import LoginForm from "@/app/components/userComponents/LoginForm";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

test("it renders the login form correctly", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByRole("button");

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("it submits the form correctly", async () => {
  const replace = jest.fn();
  useRouter.mockReturnValue({ replace });
  const signInMock = signIn;
  signInMock.mockResolvedValue({ error: null });
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByRole("button");

  await user.type(emailInput, "weezt@gmail.com");
  await user.type(passwordInput, "password");
  await user.click(submitButton);

  await signInMock();
  expect(signInMock).toHaveBeenCalledWith("credentials", {
    email: "weezt@gmail.com",
    password: "password",
    redirect: false,
  });
});

test("it redirects user to correct page", async () => {
  const replace = jest.fn();
  useRouter.mockReturnValue({ replace });
  const signInMock = signIn;
  signInMock.mockResolvedValue({ error: null });
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByRole("button");

  await user.type(emailInput, "weezt@gmail.com");
  await user.type(passwordInput, "password");
  await user.click(submitButton);

  await signInMock();

  expect(replace).toHaveBeenCalledWith("profile");
});

test("it shows error when credentials are invalid", async () => {
  const replace = jest.fn();
  useRouter.mockReturnValue({ replace });
  const signInMock = signIn;
  signInMock.mockResolvedValue({ error: "Invalid Credentials" });
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByRole("button");

  await user.type(emailInput, "weezt@gmail.com");
  await user.type(passwordInput, "password");
  await user.click(submitButton);

  await signInMock();

  expect(screen.getByText("Invalid Credentials")).toBeInTheDocument();
});
