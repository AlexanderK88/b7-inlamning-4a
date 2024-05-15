"use client";

import { useState } from "react";
import SideBar from "../components/profile/SideBar";
import General from "../components/profile/General";
import Bookings from "../components/profile/Bookings";
import Settings from "../components/profile/Settings";
import Reviews from "../components/profile/Reviews";
import Admin from "../components/profile/Admin";

export default function page() {
  const [page, setPage] = useState("General");

  return (
    <div className="bg-stone-800 flex flex-col sm:grid sm:grid-cols-8">
      <SideBar setPage={setPage} />
      {page === "General" ? <General /> : null}
      {page === "Bookings" ? <Bookings /> : null}
      {page === "Reviews" ? <Reviews /> : null}
      {page === "Settings" ? <Settings /> : null}
      {page === "Admin" ? <Admin /> : null}
    </div>
  );
}
