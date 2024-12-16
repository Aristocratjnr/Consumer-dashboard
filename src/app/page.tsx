"use client";

import React from "react";
import BookingPage from "./(dashboard)/bookings/page";
import TrackingPage from "./(dashboard)/tracking/page";
import Dashboard from "./(dashboard)/home/page";
import SignIn from "./auth/SignIn/page";
import ServicesPage from "./(dashboard)/services/page";
import SearchUI from "../components/page";
import LandingPage from "./LandingPage/page";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage/>
    </div>
  );
};

export default page;
