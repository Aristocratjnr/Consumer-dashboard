"use client";

import React from "react";
import BookingPage from "./(dashboard)/bookings/page";
import TrackingPage from "./(dashboard)/tracking/page";
import Dashboard from "./(dashboard)/home/page";
import Page from "./LandingPage/page";
import ServicesPage from "./(dashboard)/services/page";
import LaundryService from "./(dashboard)/LaundryService/page";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <TrackingPage/>
    </div>
  );
};

export default page;
