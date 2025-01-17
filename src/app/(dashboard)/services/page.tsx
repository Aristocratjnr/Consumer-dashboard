"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, LogOut, Plus, Search, Settings, Shirt, Sparkles, ChevronRight, Bell, User, Menu } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function LaundryDashboard() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const Sidebar = () => (
    <div className={`w-full ${isDarkTheme ? "bg-gray-800" : "bg-background"} flex flex-col px-6 py-6`}>
      <div className="mb-4 flex items-center">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={60}
          />
        </Link>
      </div>
      <nav className="flex-grow space-y-0.05">
        <br />
        {[
          { href: "/home", icon: "iconHome.png", label: "Home" },
          { href: "/services", icon: "iconService.png", label: "Services" },
          { href: "/calendar", icon: "iconCalendar.png", label: "Calendar" },
          { href: "/bookings", icon: "iconBooking.png", label: "Bookings" },
          { href: "/tracking", icon: "iconTracking.png", label: "Tracking" },
        ].map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <button
              className={`flex w-full items-center px-6 py-4 mb-8 mr-7 rounded-md ${
                isDarkTheme
                  ? item.label === "Services"
                    ? "bg-gray-700 text-accent-foreground"
                    : "text-gray-300 hover:bg-gray-700"
                  : item.label === "Services"
                  ? "bg-teal-20 text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Image
                src={`/images/${item.icon}`}
                width={32}
                height={32}
                alt={item.label}
                className="mr-3 h-5 w-5"
              />
              {item.label}
            </button>
          </Link>
        ))}
      </nav><br/><br/><br/><br/><br/><br/><br/>
      <button className="mt-auto flex items-center justify-between rounded-lg px-4 py-3 text-red-800 transition-colors hover:bg-red-50">
        <div className="flex items-center space-x-3">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Log out</span>
        </div>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );

  return (
    <div className={`flex min-h-screen flex-col ${isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Header */}
      <header className={`border-b ${isDarkTheme ? "border-gray-700 bg-gray-900" : "bg-white"} sticky top-0 z-10`}>
        <div className="flex h-16 items-center justify-between px-2 md:px-6">
          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <Sidebar />
              </SheetContent>
            </Sheet>
            <Image
              src="/images/service.png"
              width={32}
              height={32}
              alt="Services"
              className="h-7 w-7"
            />
            <h1 className="text-lg font-semibold">Services</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" className="bg-teal-20">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              onClick={toggleTheme}
              className={`rounded-full border px-2 py-1 ${isDarkTheme ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-white text-gray-800 hover:bg-gray-300"}`}
            >
              {isDarkTheme ? "☀️" : "🌙"}
            </Button>
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className={`flex items-center space-x-3 border-l border-gray-200 pl-4 ${isDarkTheme ? "bg-gray-700 text-white" : "bg-teal-50 text-black"} rounded-full px-2 py-1`}
              >
                <Image
                  src="/images/woman.png"
                  width={32}
                  height={32}
                  alt="Profile"
                  className="h-8 w-8 rounded-full ring-2 ring-teal-800"
                />
                <div className="hidden md:flex md:flex-col">
                  <span className="font-semi-bold text-sm">Sandra</span>
                  <span className="text-xs text-gray-700">77884466</span>
                </div>
              </button>
              {isProfileDropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-48 rounded-xl border shadow-lg ${isDarkTheme ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"} z-50`}
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="mr-2 inline-block h-4 w-4 text-gray-500" />
                    Profile
                  </Link>
                  <Link href="/(auth)/sign-in" passHref>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-red-50"
                      onClick={() => console.log("Logging out...")}
                    >
                      <LogOut className="mr-2 inline-block h-4 w-4 text-red-500" />
                      Log Out
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar for larger screens */}
        <aside className={`hidden md:block w-64 border-r ${isDarkTheme ? "border-gray-700 bg-gray-800" : "bg-white"}`}>
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <main className={`flex-grow ${isDarkTheme ? "bg-gray-700" : "bg-white"} p-4 md:p-6`}>
          {/* Services Section */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-teal">
              Explore Our Services
            </h2>
            <p className="text-sm font-medium text-black dark:text-white">
              Your Laundry, Done Your Way. Select The Services That Fit Your
              Needs And Leave The Rest To Us.
            </p>
          </div>
          <div className="border-3 mb-6 rounded-b-lg border-r border-gray-300 bg-white shadow-md shadow-gray-700/70">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 p-4 md:p-8">
              {[
                { icon: "/images/local.png", label: "LAUNDRY", link: "services/laundry" },
                { icon: "/images/bash.png", label: "CLOTH TREATMENTS", link: "/services/cloth-treatments" },
                { icon: "/images/event.png", label: "EVENT CLEANING", link: "/services/event-services" },
                { icon: "/images/cloth.png", label: "DRY CLEANING", link: "/services/dry-cleaning" },
                { icon: "/images/curtain.png", label: "HOME TEXTILE CLEANING", link: "/services/express-cleaning" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link href={item.link} passHref>
                    <div className="relative cursor-pointer">
                      <div className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border border-teal-10 bg-white">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={48}
                          height={48}
                          className="h-10 w-10 md:h-12 md:w-12"
                        />
                      </div>
                      <Button
                        size="icon"
                        className="absolute -bottom-2 -right-2 h-8 w-8 md:h-10 md:w-10 rounded-full bg-teal text-xl font-semibold text-white shadow-md hover:bg-teal-10"
                        style={{
                          clipPath: "circle(50% at 50% 50%)",
                        }}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </Link>
                  <span className="mt-2 text-center text-xs md:text-sm font-medium text-black dark:text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div className={`flex-grow ${isDarkTheme ? "bg-gray-900" : "bg-teal-20"} p-4 md:p-6 rounded-lg`}>
            <h2 className="font-semi-medium mb-6 items-start text-xl md:text-2xl text-teal">
              Packages
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                {
                  title: "Fresh Start Bundle",
                  price: "₵30",
                  features: [
                    { text: "5 kg Wash & Fold", icon: <Shirt className="h-4 w-4 text-teal" /> },
                    { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                    { text: "10% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                    { text: "Free delivery", icon: <Home className="h-4 w-4 text-teal" /> },
                  ],
                },
                {
                  title: "Basic Clean",
                  price: "₵60",
                  features: [
                    { text: "10 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                    { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                    { text: "15% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                    { text: "Free delivery for a week", icon: <Home className="h-4 w-4 text-teal" /> },
                  ],
                },
                {
                  title: "Weekly Essentials",
                  price: "₵120",
                  features: [
                    { text: "20 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                    { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                    { text: "20% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                    { text: "Free delivery twice a month", icon: <Home className="h-4 w-4 text-teal" /> },
                  ],
                },
                {
                  title: "Semester Saver",
                  price: "₵150",
                  features: [
                    { text: "30 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                    { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                    { text: "25% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                    { text: "Free delivery every week", icon: <Home className="h-4 w-4 text-teal" /> },
                  ],
                },
                {
                  title: "Event Ready",
                  price: "₵200",
                  features: [
                    { text: "50 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                    { text: "1kg Wash & Iron Service", con: <Home className="h-4 w-4 text-teal" /> },
                    { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                    { text: "30% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                    { text: "Priority delivery", icon: <Home className="h-4 w-4 text-teal" /> },
                  ],
                },
              ].map((pkg, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden rounded-3xl p-2 ${isDarkTheme ? "bg-gray-800" : "bg-white"} transform shadow-md transition-transform hover:scale-105`}
                >
                  <CardContent
                    className={`p-1 text-left ${isDarkTheme ? "text-gray-200" : "text-gray-900"}`}
                  >
                    <h3 className="font-semi-bold text-sm text-teal">
                      {pkg.title}
                    </h3>
                    <div className="mt-1 block text-2xl text-teal">
                      {pkg.price}
                    </div>
                    <br />
                    <ul className="mb-6 space-y-2 text-xs text-slate-500">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {feature.icon}
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 rounded-full border border-teal-600 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-teal hover:text-white"
                      variant="outline"
                    >
                      Use
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

