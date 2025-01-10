"use client";

import { Bell, LogOut, Search, Settings, ChevronDown, Plus, Calendar, User, ChevronRight, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { Sheet, SheetContent} from "@/components/ui/sheet";

export default function CalendarDashboard() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const hours = Array.from({ length: 16 }, (_, i) => `${i + 1}:00AM`);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const SidebarContent = ({ isMobile = false }) => (
    <div className={`flex h-full flex-col ${isDarkTheme ? "bg-gray-900 text-white" : "bg-background text-black"}`}>
      <div className="mb-6 flex items-center justify-between p-4">
        <Link href="/home" className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
        </Link>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
          </Button>
        )}
      </div>
      <nav className="flex-grow space-y-4  px-1">
  {[
    { href: "/home", icon: "iconHome.png", label: "Home" },
    { href: "/services", icon: "iconService.png", label: "Services" },
    { href: "/calendar", icon: "iconCalendar.png", label: "Calendar", active: true },
    { href: "/bookings", icon: "iconBooking.png", label: "Bookings" },
    { href: "/tracking", icon: "iconTracking.png", label: "Tracking" },
  ].map((item) => (
    <Link key={item.label} href={item.href} passHref>
      <button className={`flex w-[80%] ml-7 items-center rounded-md px-1 py-2 mb-10 transition-colors ${
        item.active
          ? isDarkTheme
            ? "bg-gray-700 text-white"
            : "bg-teal-20 text-black"
          : isDarkTheme
          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
          : "text-gray-700 hover:bg-teal-50 hover:text-black"
      }`}>
        <Image src={`/images/${item.icon}`} width={24} height={24} alt={item.label} className="mr-3 h-5 w-5" />
        {item.label}
      </button>
    </Link>
  ))}
</nav>
      <div className="mt-auto p-4">
        <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-red-600 transition-colors hover:bg-red-50 hover:text-red-700">
          <div className="flex items-center">
            <LogOut className="mr-3 h-5 w-5" />
            <span>Log out</span>
          </div>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkTheme ? "bg-gray-800 text-white" : "bg-teal-20 text-black"}`}>
      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="w-[240px] p-0 sm:w-[300px]">
          <SidebarContent isMobile={true} />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className={`fixed bottom-0 left-0 top-0 hidden w-64 border-r ${isDarkTheme ? "bg-gray-900" : "bg-background"} md:block`}>
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="md:pl-64">
        {/* Header */}
        <header className={`sticky top-0 z-50 border-b ${isDarkTheme ? "bg-gray-900" : "bg-background"}`}>
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
                <Menu className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-teal-20">
                <Calendar className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold">Calendar</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="bg-teal-20">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkTheme ? "☀️" : "🌙"}
              </Button>
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
                  <div className="hidden flex-col sm:flex">
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
            <div className="flex items-center justify-between">
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
                size="sm"
                className="font-semi-bold text-md text-teal-1000"
                onClick={handleTodayClick}
              >
                Today
              </Button>
            </div>

            {/* Calendar Grid */}
            <div className={`gap-8 rounded-3xl border ${isDarkTheme ? "bg-gray-700" : "bg-card"} p-4`}>
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
                      className={`h-8 w-8 rounded-full p-0 sm:h-10 sm:w-10 ${
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
            <div className={`rounded-3xl border ${isDarkTheme ? "bg-gray-700" : "bg-card"} p-4 sm:p-8`}>
              <div className="mb-8 sm:mb-14">
                <h3 className="text-lg font-semibold text-teal-1000">
                  Activity
                </h3>
                <br />
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-teal-10 px-3 py-1 text-sm text-white">
                    Services Booked
                  </span>
                  <span className="rounded-full border border-b border-teal bg-gray-100 px-3 py-1 text-sm text-gray-600">
                    Packages Used
                  </span>
                </div>
              </div>
              {/* Activity Bars */}
              <div className="flex h-[200px] sm:h-[270px] items-end gap-2 sm:gap-4">
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
              <div className="mt-2 flex gap-2 sm:gap-4">
                {activityData.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 text-center text-xs sm:text-sm font-semibold text-gray-700"
                  >
                    {months[index].substring(0, 3)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={`rounded-lg border ${isDarkTheme ? "bg-gray-700" : "bg-card"} space-y-4 p-4`}>
            <h3 className="mb-4 text-lg font-semibold text-teal-1000">
              Daily Schedule
            </h3>
            <div className="space-y-4 max-h-[calc(200vh-200px)] overflow-y-auto">
              {hours.map((hour) => (
                <div key={hour} className="group flex items-center">
                  <div className="mr-4 w-16 sm:w-20 text-xs sm:text-sm text-muted-foreground">
                    {hour}
                  </div>
                  <div className="h-px flex-1 bg-gray-200 transition-colors duration-300 group-hover:bg-teal-500"></div>
                  <div className="ml-4 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-teal-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4 text-teal-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Plus Button */}
        <Button
          className="fixed bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-1000 text-white shadow-lg"
          onClick={() => console.log("Add new event")}
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

