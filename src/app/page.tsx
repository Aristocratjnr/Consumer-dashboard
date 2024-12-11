"use client";

import React from "react";
import BookingPage from "./(dashboard)/bookings/page";
import TrackingPage from "./(dashboard)/tracking/page";
import Dashboard from "./(dashboard)/home/page";
import LandingPage from "./LandingPage/page"; 
import SignIn from "./auth/SignIn/page";
import ServicesPage from "./(dashboard)/services/page";
import BookingForm from "./(dashboard)/ConsumerServicesBoard/HomeService";

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <BookingForm/>
    </div>
  );
};

export default page;
