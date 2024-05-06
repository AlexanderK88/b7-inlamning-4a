import SideBar from "@/app/components/profile/SideBar";
import { SessionProvider } from "next-auth/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

test("Sidebar renders correctly", () => {
  render(
    <SessionProvider session={{ user: { name: "Test User" } }}>
      <SideBar />
    </SessionProvider>,
  );
  expect(screen.getByText("Profile")).toBeInTheDocument();
  expect(screen.getByText("General")).toBeInTheDocument();
  expect(screen.getByText("Bookings")).toBeInTheDocument();
  expect(screen.getByText("Reviews")).toBeInTheDocument();
  expect(screen.getByText("Settings")).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});
