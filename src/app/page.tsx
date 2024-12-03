"use client";

import React from "react";
import BookingPage from "./(dashboard)/bookings/page";
import TrackingPage from "./(dashboard)/tracking/page";
import Dashboard from "./(dashboard)/home/page";
import SignIn from "./(auth)/sign-in/page";
import Page from "@/components/HomePage/page";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Dashboard/>
    </div>
  );
};

export default page;
