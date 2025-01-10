"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bell,
  Calendar,
  Search,
  Settings,
  LogOut,
  Package,
  MapPin,
  User,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";

interface TrackingItem {
  id: string;
  date: string;
  status: "On Transit" | "On Delivery" | "Completed";
}

interface OrderItem {
  no: number;
  description: string;
  quantity: number;
  weight: string;
}

const trackingItems: TrackingItem[] = [
  { id: "ID #26683TL", date: "01/06/2024", status: "Completed" },
  { id: "ID #26683TL", date: "01/08/2024", status: "On Delivery" },
  { id: "ID #26683TL", date: "05/03/2024", status: "Completed" },
  { id: "ID #26683TL", date: "06/06/2025", status: "On Delivery" },
  { id: "ID #26683TL", date: "30/12/2024", status: "On Transit" },
  { id: "ID #26683TL", date: "05/11/2024", status: "Completed" },
  { id: "ID #26683TL", date: "04/12/2025", status: "On Transit" },
  { id: "ID #26683TL", date: "03/07/2024", status: "Completed" },
  { id: "ID #26683TL", date: "04/03/2024", status: "On Delivery" },
  { id: "ID #26683TL", date: "03/02/2025", status: "On Delivery" },
  { id: "ID #26683TL", date: "01/07/2025", status: "On Delivery" },
  { id: "ID #26683TL", date: "01/07/2025", status: "On Delivery" },
];

const orderItems: OrderItem[] = [
  { no: 1, description: "T-Shirts", quantity: 5, weight: "4kg" },
  { no: 2, description: "Jeans Trouser", quantity: 3, weight: "20kg" },
  {
    no: 3,
    description: "Bedsheet with Pillowcases",
    quantity: 1,
    weight: "15kg",
  },
];

export default function TrackingPage() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`flex min-h-screen ${isDarkTheme ? "bg-gray-800 text-white" : "bg-teal-20 text-black"}`}
    >
      {/* Sidebar */}
      <div
        className={`w-64 ${isDarkTheme ? "bg-gray-900" : "bg-white"} flex flex-col border-r`}
      >
        <div className="flex-grow p-6">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={100}
                height={60}
              />
            </Link>
          </div>

          <nav className="space-y-0.5">
            <br />
            <br />
            <Link href="/home" passHref>
              <button
                className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent"}`}
              >
                <Image
                  src="/images/iconHome.png"
                  alt="Home"
                  width={32}
                  height={32}
                  className="mr-3 h-5 w-5"
                />
                Home
              </button>
            </Link>
            <br />
            <Link href="/services" passHref>
              <button
                className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent"}`}
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
            </Link>
            <br />
            <Link href="/calendar" passHref>
              <button
                className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent"}`}
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
            </Link>
            <br />
            <Link href="/bookings" passHref>
              <button
                className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? "text-gray-300 hover:bg-gray-700" : "text-muted-foreground hover:bg-accent"}`}
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
            </Link>
            <br />
            <Link href="/tracking" passHref>
              <button
                className={`flex w-full items-center rounded-md px-4 py-3 ${isDarkTheme ? "bg-gray-700 text-white" : "bg-teal-20 text-accent-foreground"}`}
              >
                <Image
                  src="/images/iconTracking.png"
                  alt="Tracking"
                  width={32}
                  height={32}
                  className="h-5 w-5 rounded-full bg-teal-20"
                />
                Tracking
              </button>
            </Link>
          </nav>
        </div>
        <div className="p-4">
          <button className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-red-800 transition-colors hover:bg-red-50">
            <div className="flex items-center space-x-5">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Log out</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header
          className={`border-b ${isDarkTheme ? "bg-gray-900" : "bg-white"}`}
        >
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-teal-1000" />
              <h1 className="text-lg font-semibold">Tracking</h1>
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
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkTheme ? "🌙" : "☀️"}
              </Button>
              {/* Profile Section */}
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className={`flex items-center space-x-3 border-l border-gray-200 pl-4 ${isDarkTheme ? "bg-gray-800 text-white" : "bg-teal-50 text-black"} rounded-full px-2 py-1`}
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
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg">
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

        <div className="grid grid-cols-12 gap-5 p-4">
          {/* Tracking List */}
          <div className="col-span-4">
            <div
              className={`rounded-lg p-1 shadow-sm ${isDarkTheme ? "bg-gray-100 text-white" : "bg-white"}`}
            >
              <div className="relative mb-4">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search ID" className="pl-9" />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1"
                >
                  <Package
                    className={`h-4 w-4 ${isDarkTheme ? "bg-gray-100 text-black" : "bg-white"}`}
                  />
                </Button>
              </div>
              <ScrollArea className="h-full overflow-y-auto">
                <div className="space-y-2">
                  {trackingItems.map((item, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{item.id}</div>
                            <div className="text-xs text-gray-500">
                              {item.date}
                            </div>
                          </div>
                          <Badge
                            variant={
                              item.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              item.status === "Completed"
                                ? "inline-block rounded-2xl border border-customGreen bg-white text-customGreen hover:bg-green-100"
                                : item.status === "On Delivery"
                                  ? "inline-block rounded-2xl border border-red-600 bg-white text-red-600 hover:bg-red-100"
                                  : "inline-block rounded-2xl border-teal-1000 bg-white text-teal-1000 hover:bg-blue-100"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Order Details */}
          <div className="col-span-8">
            <div
              className={`rounded-lg p-8 shadow-sm ${isDarkTheme ? "bg-gray-700 text-white" : "bg-white"}`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-bold">Order ID:</div>
                  <div className="font-semi-bold text-sm text-gray-500">
                    #26683TL
                  </div>
                </div>
                <Badge className="inline-block rounded-2xl border border-customGreen bg-white text-customGreen hover:bg-green-100">
                  Completed
                </Badge>
              </div>

              {/* Progress Steps */}
              <div className="mb-8">
                <div className="relative mb-6 flex justify-between">
                  {[
                    "Pick Up",
                    "In Process",
                    "On Transit",
                    "On Delivery",
                    "Delivered",
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="relative z-10 flex flex-col items-center"
                    >
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-customGreen">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {step}
                      </div>
                      <div className="mt-1 text-xs text-gray-600">
                        06/07/2024
                      </div>
                    </div>
                  ))}
                  {/* Progress line */}
                  <div
                    className="absolute left-0 right-0 top-5 -z-0 h-[1px] bg-customGreen"
                    style={{ width: "100%", transform: "translateY(-30%)" }}
                  />
                </div>
              </div>

              {/* Order Information */}
              <div className="mb-8 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="mb-4 flex items-center text-sm font-medium">
                    <Calendar className="mr-1 h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">ORDER INFORMATION</span>
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm">PICK UP DATE</div>
                      <div className="text-sm font-medium">
                        12:30 06/07/2024
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">DROP OFF DESTINATION</div>
                      <div className="text-sm font-medium">24 hours</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 flex items-center text-sm font-medium">
                    <MapPin className="mr-1 h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">LOCATION</span>
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm">PICK UP</div>
                      <div className="text-sm font-medium">
                        Pent Block C 2301
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">DROP OFF</div>
                      <div className="text-sm font-medium">
                        Pent Block C 2301
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 flex items-center text-sm font-medium">
                    <User className="mr-1 h-5 w-5 text-gray-400" />
                    <span className="text-gray-400">CUSTOMER INFORMATION</span>
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm">FULL NAME</div>
                      <div className="text-sm font-medium">Mawupemor Ruth</div>
                    </div>
                    <div>
                      <div className="text-sm">PHONE NUMBER</div>
                      <div className="text-sm font-medium">
                        +233 55 813 2345
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item List */}
              <div className="mb-4">
                <h3 className="mb-4 text-lg font-semibold">Item List</h3>
                <table className="w-full border border-gray-300">
                  <thead>
                    <tr className="divide-y divide-gray-200 bg-gray-100 text-left text-sm text-gray-500">
                      <th className="border-b border-gray-300 px-4 py-2">
                        No.
                      </th>
                      <th className="border-b border-gray-300 px-4 py-2">
                        Description
                      </th>
                      <th className="border-b border-gray-300 px-4 py-2">
                        Quantity
                      </th>
                      <th className="border-b border-gray-300 px-4 py-2">
                        Weight
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orderItems.map((item) => (
                      <tr
                        key={item.no}
                        className="border-b border-gray-300 text-gray-500"
                      >
                        <td className="border border-gray-300 px-4 py-3">
                          {item.no}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {item.description}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {item.quantity}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          {item.weight}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Map */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-medium">Map</h3>
                <div className="relative h-64 rounded-lg bg-gray-100">
                  <div className="absolute inset-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.799816782024!2d-0.1870308!3d5.6503765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzknMDEuNCJOIDDCsDExJzEzLjMiVw!5e0!3m2!1sen!2sgh!4v1625581243076!5m2!1sen!2sgh"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Courier Information */}
              <div className="flex items-center justify-between rounded-lg bg-white p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    alt="Courier"
                    className="rounded-full"
                    height="40"
                    src="/images/Andrew.png"
                    style={{ aspectRatio: "40/40", objectFit: "cover" }}
                    width="40"
                  />
                  <div className="flex flex-col">
                    <span className={`${isDarkTheme ? "text-black" : ""}`}>
                      Andrew
                    </span>
                    <span className="text-sm text-gray-500">Courier</span>
                  </div>
                </div>
                <Image
                  src="/images/call.png"
                  alt="Phone icon"
                  width={32}
                  height={32}
                  className="mr-2 h-6 w-6 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
