import SignupForm from "@/app/components/userComponents/SignupForm";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  }),
);

test("it renders the signup form correctly", () => {
  render(<SignupForm />);
  const nameInput = screen.getByPlaceholderText("Full Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const phoneNumberInput = screen.getByPlaceholderText("Phone number");
  const submitButton = screen.getByRole("button");

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(phoneNumberInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("it sends user to login page after succesfull signup", async () => {
  const push = jest.fn();
  useRouter.mockReturnValue({ push });
  render(<SignupForm />);

  const nameInput = screen.getByPlaceholderText("Full Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const phoneNumberInput = screen.getByPlaceholderText("Phone number");
  const submitButton = screen.getByRole("button");

  await user.type(nameInput, "weezt");
  await user.type(emailInput, "weezt@gmail.com");
  await user.type(passwordInput, "password");
  await user.type(phoneNumberInput, "1234567890");
  await user.click(submitButton);

  expect(push).toHaveBeenCalledWith("/login");
});

test("it submits the form correctly", async () => {
  const push = jest.fn();
  useRouter.mockReturnValue({ push });
  render(<SignupForm />);

  const nameInput = screen.getByPlaceholderText("Full Name");
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const phoneNumberInput = screen.getByPlaceholderText("Phone number");
  const submitButton = screen.getByRole("button");

  await user.type(nameInput, "weezt");
  await user.type(emailInput, "weezt@gmail.com");
  await user.type(passwordInput, "password");
  await user.type(phoneNumberInput, "1234567890");
  user.click(submitButton);

  await waitFor(() =>
    expect(fetch).toHaveBeenCalledWith("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "weezt",
        email: "weezt@gmail.com",
        password: "password",
        phoneNumber: "1234567890",
      }),
    }),
  );
});

test("it shows error message when user forgets an input", async () => {
  render(<SignupForm />);
  const nameInput = screen.getByPlaceholderText("Full Name");
  const submitButton = screen.getByRole("button");

  await user.type(nameInput, "weezt");
  await user.click(submitButton);

  expect(screen.getByText("Please fill all the fields")).toBeInTheDocument();
});
