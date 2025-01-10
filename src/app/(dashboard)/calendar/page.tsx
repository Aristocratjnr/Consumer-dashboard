"use client";

import {
  Bell,
  LogOut,
  Search,
  Settings,
  ChevronDown,
  Plus,
  Calendar,
  User,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function CalendarDashboard() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 16 }, (_, i) => `${i + 1}:00AM`);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const activityData = [100, 60, 60, 100, 100];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

  const handleTodayClick = () => {
    const today = new Date();
    setSelectedDate(today.getDate());
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  const toggleYear = () => {
    setCurrentYear(currentYear === 2024 ? 2025 : 2024);
  };

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`min-h-screen ${isDarkTheme ? "bg-gray-800 text-white" : "bg-teal-20 text-black"} relative`}
    >
      {/* Sidebar */}
      <div
        className={`fixed bottom-0 left-0 top-0 w-64 border-r ${isDarkTheme ? "bg-gray-900" : "bg-background"} p-4`}
      >
        <div className="mb-6 flex items-center">
          <Link href="/home" className="flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
          </Link>
        </div>
        <nav className="flex-grow space-y-0.5">
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
            <button className="flex w-full items-center rounded-md bg-teal-20 px-4 py-3 font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-white dark:hover:bg-gray-700">
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
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
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
        <button className="absolute bottom-12 left-4 right-4 flex items-center justify-between rounded-lg px-4 py-3 text-red-800 transition-colors hover:bg-red-50">
          <div className="flex items-center space-x-3">
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Log out</span>
          </div>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header
          className={`sticky top-0 z-50 border-b ${isDarkTheme ? "bg-gray-900" : "bg-background"}`}
        >
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="bg-teal-20">
                <Calendar className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold">Calendar</h1>
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
                {isDarkTheme ? "☀️" : "🌙"}
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
          </div>
        </header>
        <SearchBar />

        <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[1fr_550px]">
          <div className="space-y-4">
            {/* Calendar Header */}
            <div className="absolute top-20 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleYear}
                  className="font-semi-bold text-lg text-teal-1000 focus-visible:ring-2 focus-visible:ring-teal-500"
                  aria-label="Toggle Year"
                >
                  {currentYear}
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-500"
                      aria-label="Toggle Month"
                    >
                      {months[currentMonth]}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {months.map((month, index) => (
                      <DropdownMenuItem
                        key={month}
                        onSelect={() => {
                          setCurrentMonth(index);
                          setSelectedDate(1);
                        }}
                        className="cursor-pointer hover:bg-teal-100 hover:text-teal-1000"
                      >
                        {month}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button
                variant="ghost"
                size="lg"
                className="font-semi-bold text-md text-teal-1000"
                onClick={handleTodayClick}
              >
                Today
              </Button>
            </div>

            {/* Calendar Grid */}
            <div
              className={`gap-8 rounded-3xl border ${isDarkTheme ? "bg-gray-700" : "bg-card"} p-4`}
            >
              <div className="mb-2 text-center">
                <h2 className="font-semi-bold text-lg text-teal-1000">
                  {months[currentMonth]} {currentYear}
                </h2>
              </div>
              <div className="grid grid-cols-7 gap-3 text-justify">
                {days.map((day) => (
                  <div
                    key={day}
                    className="text-xs font-medium text-muted-foreground"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 gap-2 text-center">
                {Array.from({ length: firstDayOfMonth }, () => (
                  <div key={`empty-${Math.random()}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                  (date) => (
                    <Button
                      key={date}
                      variant={selectedDate === date ? "default" : "ghost"}
                      className={`h-10 w-10 rounded-full p-0 ${
                        selectedDate === date
                          ? "bg-teal-1000 text-white ring-2 ring-teal-500"
                          : "text-muted-foreground hover:bg-gray-200 hover:text-black"
                      }`}
                      onClick={() => setSelectedDate(date)}
                      aria-label={`Select ${date}`}
                    >
                      {date}
                    </Button>
                  ),
                )}
              </div>
            </div>
            {/* Activity Section */}
            <div
              className={`rounded-3xl border ${isDarkTheme ? "bg-gray-700" : "bg-card"} p-8`}
            >
              <div className="mb-14">
                <h3 className="text-lg font-semibold text-teal-1000">
                  Activity
                </h3>
                <br />
                <div className="flex gap-3">
                  <span className="rounded-full bg-teal-10 px-3 py-1 text-sm text-white">
                    Services Booked
                  </span>
                  <span className="rounded-full border border-b border-teal bg-gray-100 px-3 py-1 text-sm text-gray-600">
                    Packages Used
                  </span>
                </div>
              </div>
              {/* Activity Bars */}
              <div className="flex h-[270px] items-end gap-4">
                {activityData.map((_, index) => (
                  <div
                    key={index}
                    className={`relative flex-1 rounded-full ${
                      index === 3 ? "bg-teal-1000" : "bg-gray-100"
                    }`}
                    style={{
                      height:
                        index === 1 ? "60%" : index === 2 ? "80%" : "120%",
                    }}
                  />
                ))}
              </div>
              {/* Month Labels */}
              <div className="mt-2 flex gap-4">
                {activityData.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 text-center text-sm font-semibold text-gray-700"
                  >
                    {months[index]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div
            className={`rounded-lg border ${isDarkTheme ? "bg-gray-700" : "bg-card"} space-y-4 p-4`}
          >
            <h3 className="mb-4 text-lg font-semibold text-teal-1000">
              Daily Schedule
            </h3>
            <div className="space-y-4">
              {hours.map((hour) => (
                <div key={hour} className="group flex items-center">
                  <div className="mr-4 w-20 text-sm text-muted-foreground">
                    {hour}
                  </div>
                  <div className="h-px flex-1 bg-gray-200 transition-colors duration-300 group-hover:bg-teal-500"></div>
                  <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Plus className="h-4 w-4 text-teal-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Plus Button */}
        <Button
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-1000 text-white shadow-lg"
          onClick={() => console.log("Add new event")}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
