"use client";

import React from "react";
import BookingPage from "./(dashboard)/bookings/page";
import TrackingPage from "./(dashboard)/tracking/page";
import Dashboard from "./(dashboard)/settings/page";


const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Dashboard/>
    </div>
  );
};

export default page;
