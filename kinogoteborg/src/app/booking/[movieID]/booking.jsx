"use client";

import RenderFullBooking from "./RenderFullBooking";
import React, { Suspense } from "react";

export default function Booking({ params }) {
  return (
    <>
      <Suspense>
        <RenderFullBooking params={params} />
      </Suspense>
    </>
  );
}
