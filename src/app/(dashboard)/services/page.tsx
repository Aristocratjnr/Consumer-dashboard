"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  LogOut,
  Plus,
  Search,
  Settings,
  Shirt,
  Sparkles,
  ChevronRight,
  Bell,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function LaundryDashboard() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`flex min-h-screen ${isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 border-r ${isDarkTheme ? "border-gray-700 bg-gray-800" : "bg-white"}`}
      >
        <div
          className={`w-64 border-r  ${isDarkTheme ? "bg-gray-800" : "bg-background"} flex flex-col px-6 py-6`}
        >
          <div className="mb-4 flex items-center">
            <div>
              <Link href="/" className="flex items-center space-x-1">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={100}
                  height={60}
                />
              </Link>
            </div>
          </div>
          <nav className="flex-grow space-y-0.5">
            <br />
            <Link href="/home" passHref>
              <button
                className={`flex w-full items-center  px-6 py-4 mb-4 mr-10 rounded-md ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
              >
                <Image
                  src="/images/iconHome.png"
                  width={32}
                  height={32}
                  alt="Home"
                  className="mr-3 h-5 w-5"
                />
                Home
              </button>
              <br />
            </Link>
            <Link href="/services" passHref>
              <button
                className={`flex w-full items-center  px-6 py-4 mb-4 mr-7 rounded-md ${isDarkTheme ? "bg-gray-700 text-accent-foreground" : "bg-teal-20 text-accent-foreground"} px-4 py-3 hover:bg-accent`}
              >
                <Image
                  src="/images/iconService.png"
                  width={32}
                  height={32}
                  alt="Services"
                  className="mr-3 h-5 w-5"
                />
                Services
              </button>
              <br />
            </Link>
            <Link href="/calendar" passHref>
              <button
                className={`flex w-full items-center  px-6 py-4 mb-4 mr-7 rounded-md ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
              >
                <Image
                  src="/images/iconCalendar.png"
                  width={32}
                  height={32}
                  alt="Calendar"
                  className="mr-3 h-5 w-5"
                />
                Calendar
              </button>
              <br />
            </Link>
            <Link href="/bookings" passHref>
              <button
                className={`flex w-full items-center  px-6 py-4 mb-4 mr-7 rounded-md ${isDarkTheme ? "text-gray-300" : "text-muted-foreground"}`}
              >
                <Image
                  src="/images/iconBooking.png"
                  width={32}
                  height={32}
                  alt="Bookings"
                  className="mr-3 h-5 w-5"
                />
                Bookings
              </button>
              <br />
            </Link>
            <Link href="/tracking" passHref>
              <button
                className={`flex w-full items-center px-6 py-4 mb-4 mr-7 rounded-md ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
              >
                <Image
                  src="/images/iconTracking.png"
                  width={32}
                  height={32}
                  alt="Tracking"
                  className="mr-3 h-5 w-5"
                />
                Tracking
              </button>
            </Link>
          </nav>
          <button className="absolute bottom-1 left-4 right-4 flex items-center justify-between rounded-lg px-4 py-3 text-red-800 transition-colors hover:bg-red-50">
            <div className="flex items-center space-x-3">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Log out</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <div
        className={`ml-64 flex flex-1 flex-col ${isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
      >
        <header
          className={`border-b ${isDarkTheme ? "border-gray-700 bg-gray-900" : "bg-white"}`}
        >
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/service.png"
                width={32}
                height={32}
                alt="Services"
                className="h-7 w-7"
              />
              <h1 className="text-lg font-semibold">Services</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="bg-teal-20">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              {/* Theme Toggle Button */}
              <Button
                onClick={toggleTheme}
                className={`rounded-full border px-2 py-1 ${isDarkTheme ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-white text-gray-800 hover:bg-gray-300"}`}
              >
                {isDarkTheme ? "☀️" : "🌙"}
              </Button>
              {/* Profile Section */}
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
                  <div className="flex flex-col">
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
        <main
          className={`flex-grow ${isDarkTheme ? "bg-gray-700" : "bg-white"} p-6`}
        >
          {/* Services Section */}
          <div className="mb-4"></div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-teal">
              Explore Our Services
            </h2>
            <p className="text-sm font-medium text-black dark:bg-white">
              Your Laundry, Done Your Way. Select The Services That Fit Your
              Needs And Leave The Rest To Us.
            </p>
          </div>
          <div className="border-3 mb-6 rounded-b-lg border-r border-gray-300 bg-white shadow-md shadow-gray-700/70">
            <div className="flex justify-center gap-16 p-8">
              {[
                {
                  icon: "/images/local.png",
                  label: "LAUNDRY",
                  Link: "services/laundry",
                  width: 48,
                  height: 48,
                },
                {
                  icon: "/images/bash.png",
                  label: "CLOTH TREATMENTS",
                  Link: "/services/cloth-treatments",
                  width: 48,
                  height: 48,
                },
                {
                  icon: "/images/event.png",
                  label: "EVENT CLEANING",
                  Link: "/services/event-services",
                  width: 48,
                  height: 48,
                },
                {
                  icon: "/images/cloth.png",
                  label: "DRY CLEANING",
                  Link: "/services/dry-cleaning",
                  width: 48,
                  height: 48,
                },
                {
                  icon: "/images/curtain.png",
                  label: "HOME TEXTILE CLEANING",
                  Link: "/services/express-cleaning",
                  width: 48,
                  height: 48,
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link href={item.Link} passHref>
                    <div className="relative cursor-pointer">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-teal-10 bg-white">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={item.width}
                          height={item.height}
                          className="h-12 w-12"
                        />
                      </div>
                      <Button
                        size="icon"
                        className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-teal text-xl font-semibold text-white shadow-md hover:bg-teal-10"
                        style={{
                          clipPath: "circle(50% at 50% 50%)",
                        }}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </Link>
                  <span className="text-md mt-2 font-medium text-black">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div
            className={`flex-grow ${isDarkTheme ? "bg-gray-900" : "bg-teal-20"} p-6 rounded-lg`}
          >
            <h2 className="font-semi-medium trac mb-6 items-start text-2xl text-teal">
              Packages
            </h2>
            <br />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                {
                  title: "Fresh Start Bundle",
                  price: "₵30",
                  features: [
                    {
                      text: "5 kg Wash & Fold",
                      icon: <Shirt className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "1kg Wash & Iron Service",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "10% discount coupon",
                      icon: <Sparkles className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "Free delivery",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                  ],
                },
                {
                  title: "Basic Clean",
                  price: "₵60",
                  features: [
                    {
                      text: "10 kg Wash & Iron Service",
                      icon: <Shirt className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "1kg Wash & Iron Service",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "15% discount coupon",
                      icon: <Sparkles className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "Free delivery for a week",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                  ],
                },
                {
                  title: "Weekly Essentials",
                  price: "₵120",
                  features: [
                    {
                      text: "20 kg Wash & Iron Service",
                      icon: <Shirt className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "1kg Wash & Iron Service",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "20% discount coupon",
                      icon: <Sparkles className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "Free delivery twice a month",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                  ],
                },
                {
                  title: "Semester Saver",
                  price: "₵150",
                  features: [
                    {
                      text: "30 kg Wash & Iron Service",
                      icon: <Shirt className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "1kg Wash & Iron Service",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "25% discount coupon",
                      icon: <Sparkles className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "Free delivery every week",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                  ],
                },
                {
                  title: "Event Ready",
                  price: "₵200",
                  features: [
                    {
                      text: "50 kg Wash & Iron Service",
                      icon: <Shirt className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "1kg Wash & Iron Service",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "30% discount coupon",
                      icon: <Sparkles className="h-4 w-4 text-teal" />,
                    },
                    {
                      text: "Priority delivery",
                      icon: <Home className="h-4 w-4 text-teal" />,
                    },
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
                      className="w-45 mt-6 rounded-full border border-teal-600 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-teal hover:text-white"
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
