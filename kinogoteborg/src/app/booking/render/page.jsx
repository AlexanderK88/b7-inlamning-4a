"use client";

import React, { useEffect, useState } from "react";
import RenderSaloon from "@/scripts/renderSaloonLayout";

export default function Page() {
  const [saloonLayout, setSaloonLayout] = useState([]);

  useEffect(() => {
    async function fetchSaloonLayout() {
      try {
        const layout = await RenderSaloon(1); // Assuming saloon number 1
        setSaloonLayout(layout || []);
      } catch (error) {
        console.error("Error fetching saloon layout:", error);
      }
    }

    fetchSaloonLayout();
  }, []); // Run once on component mount

  return (
    <div className="flex flex-row flex-wrap justify-center w-3/4 h-screen border">
      {saloonLayout.length === 0 ? <div>Loading...</div> : saloonLayout}
    </div>
  );
}
