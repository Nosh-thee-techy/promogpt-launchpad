import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Waitlist from "@/components/Waitlist";

// Minimal mock for framer-motion to avoid prop warnings in tests
vi.mock("framer-motion", () => {
  const filterProps = (props: Record<string, unknown>) => {
    const motionKeys = new Set(["initial", "animate", "exit", "whileInView", "whileHover", "whileTap", "transition", "variants", "viewport"]);
    return Object.fromEntries(Object.entries(props).filter(([k]) => !motionKeys.has(k)));
  };
  return {
    motion: {
      div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => <div {...filterProps(props)}>{children}</div>,
      form: ({ children, ...props }: React.HTMLAttributes<HTMLFormElement> & Record<string, unknown>) => <form {...filterProps(props)}>{children}</form>,
    },
  };
});

// Helper: fill the required form fields (name, email, business type).
// The Radix Select trigger buttons have no accessible name, so we target them by index:
//   combobox[0] = Business Type, combobox[1] = Budget
const fillRequiredFields = async (overrides: Partial<{ name: string; email: string }> = {}) => {
  const user = userEvent.setup();

  const name = overrides.name ?? "Ada Okafor";
  const email = overrides.email ?? "ada@example.com";

  await user.type(screen.getByLabelText(/name/i), name);
  await user.type(screen.getByLabelText(/email/i), email);

  // Open the Business Type combobox (index 0) and choose SaaS
  const [businessTypeCombobox] = screen.getAllByRole("combobox");
  await user.click(businessTypeCombobox);
  await user.click(screen.getByRole("option", { name: /saas/i }));

  return user;
};

const submitForm = () =>
  fireEvent.submit(screen.getByRole("button", { name: /reserve my spot/i }).closest("form")!);

describe("Waitlist form", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_WAITLIST_WEBHOOK_URL", "");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("renders all form fields and submit button", () => {
    render(<Waitlist />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    // Two comboboxes: Business Type and Budget
    expect(screen.getAllByRole("combobox")).toHaveLength(2);
    expect(screen.getByRole("button", { name: /reserve my spot/i })).toBeInTheDocument();
  });

  it("shows validation errors when form is submitted empty", async () => {
    render(<Waitlist />);
    submitForm();
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/please select a business type/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for invalid email", async () => {
    render(<Waitlist />);
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/name/i), "Ada");
    await user.type(screen.getByLabelText(/email/i), "not-an-email");
    submitForm();
    await waitFor(() => {
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
    });
  });

  it("shows success dialog when no webhook URL is set", async () => {
    render(<Waitlist />);
    await fillRequiredFields();
    submitForm();
    await waitFor(() => {
      expect(screen.getByText(/you're officially on the list/i)).toBeInTheDocument();
    });
  });

  it("clears the form after successful submission", async () => {
    render(<Waitlist />);
    await fillRequiredFields();
    submitForm();
    await waitFor(() => {
      expect(screen.getByText(/you're officially on the list/i)).toBeInTheDocument();
    });
    expect((screen.getByLabelText(/name/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/email/i) as HTMLInputElement).value).toBe("");
  });

  it("calls webhook and shows success when webhook returns ok", async () => {
    vi.stubEnv("VITE_WAITLIST_WEBHOOK_URL", "https://example.com/webhook");
    global.fetch = vi.fn().mockResolvedValue({ ok: true } as Response);

    render(<Waitlist />);
    await fillRequiredFields();
    submitForm();

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledOnce();
      expect(screen.getByText(/you're officially on the list/i)).toBeInTheDocument();
    });

    const [url, options] = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(url).toBe("https://example.com/webhook");
    const body = JSON.parse(options.body);
    expect(body.name).toBe("Ada Okafor");
    expect(body.email).toBe("ada@example.com");
    expect(body.businessType).toBe("saas");
    expect(body.submittedAt).toBeDefined();
  });

  it("shows error message when webhook returns a non-ok HTTP status", async () => {
    vi.stubEnv("VITE_WAITLIST_WEBHOOK_URL", "https://example.com/webhook");
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 } as Response);

    render(<Waitlist />);
    await fillRequiredFields();
    submitForm();

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/you're officially on the list/i)).not.toBeInTheDocument();
  });

  it("shows error message when the fetch call throws a network error", async () => {
    vi.stubEnv("VITE_WAITLIST_WEBHOOK_URL", "https://example.com/webhook");
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    render(<Waitlist />);
    await fillRequiredFields();
    submitForm();

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/you're officially on the list/i)).not.toBeInTheDocument();
  });

  it("disables the submit button while submitting", async () => {
    vi.stubEnv("VITE_WAITLIST_WEBHOOK_URL", "https://example.com/webhook");
    let resolvePromise: () => void;
    global.fetch = vi.fn().mockReturnValue(
      new Promise<Response>((resolve) => {
        // Resolve with an error response so the success dialog does NOT open,
        // keeping the form visible for the re-enabled button assertion.
        resolvePromise = () => resolve({ ok: false, status: 400 } as Response);
      })
    );

    render(<Waitlist />);
    await fillRequiredFields();
    submitForm();

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /reserving/i })).toBeDisabled();
    });

    resolvePromise!();
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /reserve my spot/i })).not.toBeDisabled();
    });
  });
});

