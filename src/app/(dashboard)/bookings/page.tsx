'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Plus, Search, Settings, LogOut, X, Bell, User, Banknote, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useSession, signOut } from "next-auth/react";

interface Booking {
  id: number;
  title: string;
  reference: string;
  date: string;
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

// SidebarContent Component
const SidebarContent: React.FC<{ darkMode: boolean }> = ({ darkMode }) => (
  <div className={`flex h-full flex-col ${darkMode ? "bg-gray-800 text-white" : "bg-background text-black"}`}>
    <div className="mb-6 flex items-center justify-between p-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
      </Link>
    </div>
    <nav className="flex-grow space-y-0.5">
      {[
        { href: "/home", icon: "iconHome.png", label: "Home" },
        { href: "/services", icon: "iconService.png", label: "Services" },
        { href: "/calendar", icon: "iconCalendar.png", label: "Calendar" },
        { href: "/bookings", icon: "iconBooking.png", label: "Bookings", active: true },
        { href: "/tracking", icon: "iconTracking.png", label: "Tracking" },
      ].map((item) => (
        <Link key={item.label} href={item.href} passHref>
          <button className={`flex w-full items-center px-6 py-4 mb-8 rounded-md ${
            item.active
              ? "bg-teal-20 font-medium text-accent-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          } ${darkMode ? "dark:text-gray-300 dark:hover:bg-gray-700" : ""}`}>
            <Image
              src={`/images/${item.icon}`}
              width={24}
              height={24}
              alt={item.label}
              className="mr-3 h-5 w-5"
            />
            {item.label}
          </button>
        </Link>
      ))}
    </nav>
    <div className="mt-auto space-y-2 p-4">
      <Button
       onClick={() => signOut({ callbackUrl: "/" })}
        variant="ghost"
        className="w-full justify-start text-red-800 transition-colors hover:bg-red-100 dark:text-red-800 dark:hover:bg-red-100"
      >
        <LogOut className="mr-2 h-4 w-4" />
        Log out
      </Button>
    </div>
  </div>
);

// BookingCard Component
const BookingCard: React.FC<{ booking: Booking; onSelect: () => void; isSelected: boolean }> = ({ booking, onSelect, isSelected }) => {
  return (
    <div
      className={`relative rounded-3xl p-4 shadow-sm transition hover:shadow-md ${
        isSelected
          ? "ring-2 ring-teal-500 dark:ring-teal-400"
          : "ring-1 ring-gray-100 dark:ring-gray-600"
      } w-full bg-teal-20 dark:bg-gray-800 dark:text-gray-100`}
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
              width={24}
              height={24}
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
};

// SearchBar Component
const SearchBar: React.FC = () => {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
      <Input
        type="search"
        placeholder="Search bookings..."
        className="pl-8 pr-4 w-full"
      />
    </div>
  );
};

// NotificationPanel Component
const NotificationPanel: React.FC = () => {
  return (
    <div className="fixed right-4 top-20 z-50 w-80 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Notifications</h3>
          <button className="text-sm text-teal-1000 hover:text-teal-1000">
            Mark all as read
          </button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {[
          {
            title: "Order Status Update",
            message: "Your order #2458 is ready for pickup",
            time: "2 hours ago",
            unread: true,
          },
          {
            title: "Special Offer",
            message: "Get 20% off on your next order!",
            time: "1 day ago",
            unread: false,
          },
        ].map((notification, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 hover:bg-gray-50 ${notification.unread ? "bg-blue-50" : ""}`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`mt-2 h-2 w-2 rounded-full ${notification.unread ? "bg-teal-600" : "bg-gray-300"}`}
              />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {notification.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {notification.message}
                </p>
                <span className="mt-2 block text-xs text-gray-500">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <button className="w-full text-center text-sm text-teal-900 hover:text-teal-1000">
          View all notifications
        </button>
      </div>
    </div>
  );
};

// Main BookingPage Component
export default function BookingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "history">("upcoming");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const {data : session} = useSession();

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex min-h-screen bg-white ${darkMode ? "dark bg-gray-900 text-gray-100" : ""}`}>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[240px] p-0 sm:w-[300px]">
          <SidebarContent darkMode={darkMode} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:border-r md:bg-background dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
        <SidebarContent darkMode={darkMode} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col dark:bg-gray-900">
        <header className="flex h-16 items-center justify-between border-b px-2 sm:px-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <BookingsIcon className="mr-1 h-5 w-5 text-teal-1000 dark:text-teal-10" />
            <h1 className="text-lg font-semibold dark:text-white">Bookings</h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="bg-teal-20 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            >
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hidden sm:inline-flex dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleDarkMode}
              className="dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? "☀️" : "🌙"}
            </Button>
            {/* Profile Section */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2 rounded-full border-l border-gray-200 bg-teal-50 px-2 py-1 text-black"
              >
                <Image
                  src={session?.user?.image || "/images/woman.png"}
                  width={32}
                  height={32}
                  alt="Profile"
                  className="h-8 w-8 rounded-full ring-2 ring-teal-800"
                />
                <div className="hidden flex-col sm:flex">
                  <span className="font-semi-bold text-sm">{session?.user?.name}</span>
                  <span className="text-xs text-gray-700">{session?.user?.id}</span>
                </div>
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="mr-2 inline-block h-4 w-4 text-gray-500" />
                    Profile
                  </Link>
                  <Link href="/" passHref>
                    <button
                      className="block w-full px-4 py-2 text-left text-sm text-red-700 hover:bg-red-50"
                      onClick={() => signOut({ callbackUrl: "/" })}
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
          <div className="container mx-auto px-4 sm:px-6">
            <Tabs
              defaultValue="upcoming"
              className="w-full"
              value={selectedTab}
              onValueChange={(value: string) =>
                setSelectedTab(value as "upcoming" | "history")
              }
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
                <TabsList className="mb-4 sm:mb-0">
                  <TabsTrigger
                    value="upcoming"
                    onClick={() => setSelectedTab("upcoming")}
                    className="dark:text-gray-300 dark:data-[state=active]:bg-teal-800 dark:data-[state=active]:text-white"
                  >
                    Upcoming
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    onClick={() => setSelectedTab("history")}
                    className="dark:text-gray-300 dark:data-[state=active]:bg-teal-800 dark:data-[state=active]:text-white"
                  >
                    History
                  </TabsTrigger>
                </TabsList>
                <SearchBar />
              </div>

              <div className="flex flex-col md:flex-row md:space-x-6 py-6">
                <div className={`flex-1 ${selectedTab === "history" ? "w-full" : ""}`}>
                  <TabsContent value="upcoming" className="mt-2">
                    <div className="space-y-6 sm:space-y-10">
                      {bookings.slice(0, 3).map((booking, index) => (
                        <React.Fragment key={booking.id}>
                          <div className={`${index === 0 ? "-mt-6 sm:-mt-10" : ""}`}>
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
                  <div className="w-full md:w-96 mt-6 md:mt-0">
                    <Card className="sticky top-6 bg-teal-20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                      {selectedBooking && (
                        <div className="rounded-t-lg bg-sky-50 p-4 dark:bg-sky-900 dark:text-gray-100">
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
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-teal-1000 text-white shadow-lg hover:bg-teal-900"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
      {/* Notification Panel */}
      {isNotificationOpen && (
        <NotificationPanel />
      )}
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

