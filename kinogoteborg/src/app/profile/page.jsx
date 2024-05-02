"use client";

import { useState } from "react";
import SideBar from "../components/profile/SideBar";
import General from "../components/profile/General";
import Bookings from "../components/profile/Bookings";
import Settings from "../components/profile/Settings";
import Reviews from "../components/profile/Reviews";

export default function page() {
  const [page, setPage] = useState("General");

  return (
    <main className="h-screen bg-stone-100 grid grid-cols-6">
      <SideBar setPage={setPage} />
      {page === "General" ? <General /> : null}
      {page === "Bookings" ? <Bookings /> : null}
      {page === "Reviews" ? <Reviews /> : null}
      {page === "Settings" ? <Settings /> : null}
    </main>
  );
}
