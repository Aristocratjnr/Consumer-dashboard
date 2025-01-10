"use client";

import * as React from "react";
import {
  Clock,
  Plus,
  Search,
  Settings,
  LogOut,
  X,
  Bell,
  User,
  Banknote,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import Image from "next/image";

interface Booking {
  id: number;
  title: string;
  reference: string;
  date: string;
  height: number;
  width: number;
  time: string;
  services: string[];
  staffImage: string;
  additionalNote?: string;
  paymentMethod: string;
  totalAmount: number;
  amountPaid: number;
  changeGiven: number;
  modeOfTransport: string;
  pickupTime: string;
}

const bookings: Booking[] = [
  {
    id: 1,
    title: "Weekly Essentials",
    reference: "REF: 887746289",
    date: "Today",
    time: "9:30 AM",
    services: ["Laundry", "Stain Treatments", "Ironing"],
    staffImage: "/images/frame.png",
    width: 32,
    height: 32,
    additionalNote: "Please separate the white clothes from the coloured ones",
    paymentMethod: "Cash",
    totalAmount: 60,
    amountPaid: 100,
    changeGiven: 40,
    modeOfTransport: "Picked Up",
    pickupTime: "1:30PM",
  },
  {
    id: 2,
    title: "Weekly Essentials",
    reference: "REF: 8877463429",
    date: "Today",
    time: "11:30 AM",
    width: 32,
    height: 32,
    services: ["Laundry", "Ironing"],
    staffImage: "/images/frame.png",
    additionalNote: "Please separate the white clothes from the coloured ones",
    paymentMethod: "Cash",
    totalAmount: 60,
    amountPaid: 100,
    changeGiven: 40,
    modeOfTransport: "Picked Up",
    pickupTime: "1:30PM",
  },
  {
    id: 3,
    title: "Weekly Essentials",
    reference: "REF: 815749290",
    date: "Last Week",
    time: "13:30 PM",
    width: 32,
    height: 32,
    services: ["Laundry", "Stain Treatments", "Ironing"],
    staffImage: "/images/frame.png",
    additionalNote: "Please separate the white clothes from the coloured ones",
    paymentMethod: "Cash",
    totalAmount: 55,
    amountPaid: 60,
    changeGiven: 5,
    modeOfTransport: "Picked Up",
    pickupTime: "13:00PM",
  },
];

export default function BookingPage() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [selectedBooking, setSelectedBooking] = React.useState<Booking | null>(
    null,
  );
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedTab, setSelectedTab] = React.useState<"upcoming" | "history">(
    "upcoming",
  );

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  React.useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex min-h-screen bg-white ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div className="flex w-64 flex-col border-r bg-background px-4 py-6 dark:border-gray-700 dark:bg-gray-800">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
          </Link>
        </div>

        <nav className="flex-grow space-y-0.5">
          <br />
          <br />
          <Link href="/home" passHref>
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
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
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
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
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
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
            <button className="flex w-full items-center rounded-md bg-teal-20 px-4 py-3 font-medium text-accent-foreground dark:bg-gray-700 dark:text-white">
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
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
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
        <div className="mt-auto space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-800 transition-colors hover:bg-red-100 dark:text-red-800 dark:hover:bg-red-100"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-1 flex-col dark:bg-gray-900">
        <header className="flex h-16 items-center justify-between border-b px-6 dark:border-gray-700">
          <div className="flex items-center">
            <BookingsIcon className="mr-1 h-5 w-5 text-teal-1000 dark:text-teal-10" />
            <h1 className="text-lg font-semibold dark:text-white">Bookings</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="bg-teal-20 dark:text-gray-300 dark:hover:text-white"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="dark:text-gray-300 dark:hover:text-white"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="dark:text-gray-300 dark:hover:text-white"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleDarkMode}
              className="dark:text-gray-300 dark:hover:text-white"
            >
              {darkMode ? "☀️" : "🌙"}
            </Button>
            {/* Profile Section */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-3 rounded-full border-l border-gray-200 bg-teal-50 px-2 py-1 pl-4 text-black"
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
        </header>
        <div className="border-b dark:border-gray-700">
          <div className="container mx-auto px-6">
            <Tabs
              defaultValue="upcoming"
              className="w-full"
              value={selectedTab}
              onValueChange={(value: string) =>
                setSelectedTab(value as "upcoming" | "history")
              }
            >
              <div className="flex items-center justify-between py-4">
                <TabsList>
                  <TabsTrigger
                    value="upcoming"
                    onClick={() => setSelectedTab("upcoming")}
                    className="dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    onClick={() => setSelectedTab("history")}
                    className="dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                  >
                    History
                  </TabsTrigger>
                </TabsList>
                <SearchBar />
              </div>

              <div className="flex flex-1 space-x-6 py-6">
                <div
                  className={`flex-1 items-start ${selectedTab === "history" ? "w-full" : ""}`}
                >
                  <TabsContent value="upcoming" className="mt-2">
                    <div className="space-y-10">
                      {bookings.slice(0, 3).map((booking, index) => (
                        <React.Fragment key={booking.id}>
                          <div className={`${index === 0 ? "-mt-10" : ""}`}>
                            <div className="flex items-center gap-4 px-2 py-3">
                              <div
                                className={`text-lg font-bold ${index === 0 ? "text-teal dark:text-white" : "text-gray-500 dark:text-gray-300"}`}
                              >
                                {index === 0
                                  ? "This Week"
                                  : index === 1
                                    ? "Last Week"
                                    : "Last Two Weeks"}
                              </div>
                              <div className="flex-1 border-b-2 border-dotted border-gray-400"></div>
                              <div
                                className={`text-lg font-bold ${index === 0 ? "text-teal dark:text-white" : "text-gray-500 dark:text-gray-300"}`}
                              >
                                {index === 0
                                  ? "Sun 24"
                                  : index === 1
                                    ? "Wed 17"
                                    : "Mon 8"}
                              </div>
                            </div>
                            <BookingCard
                              booking={booking}
                              onSelect={() => setSelectedBooking(booking)}
                              isSelected={selectedBooking?.id === booking.id}
                            />
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="history"
                    className="mt-4 w-full rounded-lg bg-teal-20 dark:bg-gray-300"
                  >
                    <ScrollArea className="h-[calc(100vh-12rem)]">
                      <div className="space-y-0">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-start space-x-3 border-b border-dotted border-teal p-4"
                          >
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <p className="text-sm text-gray-600">
                              On Nov 24, REF 887746289, your &apos;Weekly
                              Essentials&apos; package was accepted at 9:00 AM,
                              processed at 11:30 AM, by Pent BlkC Laundry and
                              picked up at 2:00 PM
                            </p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </div>

                {selectedTab !== "history" && (
                  <div className="w-96 flex-shrink-0">
                    <Card className="sticky top-6 bg-teal-20 dark:border-gray-700 dark:bg-gray-800">
                      {selectedBooking && (
                        <div className="rounded-t-lg bg-sky-50 p-4 dark:bg-sky-950">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 rounded-full bg-white px-3 py-1 text-sm dark:bg-sky-900">
                              <Clock className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                              <span className="font-medium text-gray-800 dark:text-gray-200">
                                {selectedBooking.time}
                              </span>
                              <span className="text-gray-500 dark:text-gray-400"></span>
                            </div>
                            <div className="font-medium text-sky-600 dark:text-sky-400">
                              Ready in{" "}
                              <span className="text-black dark:text-white">
                                45 Minutes
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-semibold dark:text-white">
                          Booking Details
                        </CardTitle>
                        {selectedBooking && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedBooking(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </CardHeader>
                      <CardContent>
                        {selectedBooking ? (
                          <>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-lg font-semibold dark:text-white">
                                  {selectedBooking.title}
                                </h3>
                                <div className="mb-4 border-b-2 border-dotted border-teal-10"></div>
                                <p className="text-sm text-muted-foreground dark:text-gray-400">
                                  {selectedBooking.reference}
                                </p>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <div className="flex items-center justify-between text-sm text-black dark:text-gray-300">
                                    <span>
                                      Services:{" "}
                                      <b>
                                        x
                                        {selectedBooking.services.length
                                          .toString()
                                          .padStart(2, "0")}
                                      </b>
                                    </span>
                                  </div>
                                  <br />
                                  {selectedBooking.services.map(
                                    (service, index) => (
                                      <div
                                        key={service}
                                        className="flex items-center justify-between"
                                      >
                                        <div className="flex items-center gap-3">
                                          <span className="text-xs text-gray-500">
                                            {(index + 1)
                                              .toString()
                                              .padStart(2, "0")}
                                          </span>
                                          <span className="text-sm font-medium">
                                            {service}
                                          </span>
                                        </div>
                                        <span className="text-sm text-gray-500">
                                          {index === 0
                                            ? "25"
                                            : index === 1
                                              ? "7"
                                              : "13"}{" "}
                                          min
                                        </span>
                                      </div>
                                    ),
                                  )}
                                </div>
                              </div>
                              {selectedBooking.additionalNote && (
                                <div>
                                  <div className="mb-4 border-b-2 border-dotted border-teal-10"></div>
                                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Additional Note
                                  </h4>
                                  <p className="text-sm font-medium text-black dark:text-gray-400">
                                    {selectedBooking.additionalNote}
                                  </p>
                                  <div className="mb-4 border-b-2 border-dotted border-teal-10"></div>
                                </div>
                              )}
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="flex items-center gap-2">
                                    <Banknote className="h-4 w-4 text-muted-foreground" />
                                    Payment Method
                                  </span>
                                  <span className="text-sm font-medium dark:text-gray-300">
                                    {selectedBooking.paymentMethod}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500 dark:text-gray-300">
                                    Total Amount
                                  </span>
                                  <span className="text-sm font-medium dark:text-gray-300">
                                    ₵{selectedBooking.totalAmount}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500 dark:text-gray-300">
                                    Amount Paid
                                  </span>
                                  <span className="text-sm font-medium dark:text-gray-300">
                                    ₵{selectedBooking.amountPaid}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500 dark:text-gray-300">
                                    Change Given
                                  </span>
                                  <span className="text-sm font-medium dark:text-gray-300">
                                    ₵{selectedBooking.changeGiven}
                                  </span>
                                </div>
                                <div className="mb-4 border-b-2 border-dotted border-teal-10"></div>
                                <div className="flex justify-between">
                                  <span className="font-semi-bold text-sm text-gray-500 dark:text-gray-200">
                                    Mode of Transport
                                  </span>
                                  <span className="font-semi-bold text-sm dark:text-gray-100">
                                    {selectedBooking.modeOfTransport}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500 dark:text-gray-300">
                                    Time
                                  </span>
                                  <span className="font-semi-bold text-sm dark:text-gray-100">
                                    {selectedBooking.pickupTime}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="text-center text-muted-foreground dark:text-gray-400">
                            Select a booking to view details
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </div>

        {/* New Booking Button */}
        <Button
          size="icon"
          className="fixed bottom-1 right-9 h-12 w-12 rounded-full bg-teal-1000 text-white shadow-lg hover:bg-teal-900"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

function BookingCard({
  booking,
  onSelect,
  isSelected,
}: {
  booking: Booking;
  onSelect: () => void;
  isSelected: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-4 shadow-sm transition hover:shadow-md ${
        isSelected
          ? "ring-2 ring-gray-100"
          : "ring-1 ring-gray-100 dark:ring-gray-700"
      } w-62 bg-teal-20 dark:bg-gray-800`}
    >
      {/* Top Section */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
          <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          {booking.time}
        </div>
        <div className="text-xs font-semibold text-black dark:text-gray-400">
          {booking.reference}
        </div>
      </div>

      {/* Middle Content */}
      <div className="mb-3 space-y-2">
        {/* Package Name */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {booking.title}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Assigned to
            </span>
            <Image
              alt="Staff"
              className="h-6 w-6 rounded-full border border-gray-300 object-cover dark:border-gray-600"
              src={booking.staffImage}
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Services */}
        <div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {booking.services.join(" • ")}
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          x{booking.services.length.toString().padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
            Completed
          </span>
        </div>
        <button
          onClick={onSelect}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            isSelected
              ? "bg-teal text-white shadow-sm hover:bg-teal-700"
              : "border border-teal bg-gray-100 text-black hover:bg-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-100"
          }`}
        >
          {isSelected ? "Selected ✅" : "Details >"}
        </button>
      </div>
    </div>
  );
}

function BookingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
    </svg>
  );
}
