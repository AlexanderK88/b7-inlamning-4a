"use client";

import React, { useEffect, useState } from "react";
import { RenderProcess } from "@/scripts/renderSaloonLayout";

export default function RenderSaloonComp({ saloonNumber, seatsToBook }) {
  const [saloonLayout, setSaloonLayout] = useState([]);

  useEffect(() => {
    async function fetchSaloonLayout() {
      try {
        const layout = await RenderProcess(saloonNumber);
        setSaloonLayout(layout || []);
      } catch (error) {
        console.error("Error fetching saloon layout:", error);
      }
    }

    fetchSaloonLayout();
  }, []); // Run once on component mount

  return (
    <div className="grid border w-full col-span-5 justify-items-start grid-flow-row justify-evenly">
      {saloonLayout.length === 0 ? <div>Loading...</div> : saloonLayout}
    </div>
  );
}
