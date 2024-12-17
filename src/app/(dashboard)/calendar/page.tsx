        'use client'

        import { Bell, Home, LogOut, Menu, Search, Settings, ChevronDown, Plus, Calendar, User, BookMinusIcon, HomeIcon, Package, ChevronRight } from 'lucide-react';
        import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
        import { Button } from "@/components/ui/button";
        import {
            DropdownMenu,
            DropdownMenuContent,
            DropdownMenuItem,
            DropdownMenuTrigger,
        } from "@/components/ui/dropdown-menu";
        import { Input } from "@/components/ui/input";
        import Link from "next/link";
        import { useState } from "react";
        import SearchBar from '@/components/SearchBar';
        import Image from 'next/image';

        export default function CalendarDashboard() {
            const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
            const toggleProfileDropdown = () => {
                setIsProfileDropdownOpen(!isProfileDropdownOpen);
            };

            const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
            const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
            const [selectedDate, setSelectedDate] = useState(new Date().getDate());
            const [isDarkTheme, setIsDarkTheme] = useState(false); 

            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const hours = Array.from({ length: 17 }, (_, i) => `${i + 1}:00AM`);
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
                <div className={`min-h-screen ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-teal-20 text-black'} relative`}>
                    {/* Sidebar */}
                    <div className={`fixed left-0 top-0 bottom-0 w-64 border-r ${isDarkTheme ? 'bg-gray-900' : 'bg-background'} p-4`}>
                        <div className='mb-6 flex items-center'>
                            <Link href="/home" className="flex items-center space-x-2">
                            <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
                            </Link>
                        </div>
                        <nav className="space-y-0.5 flex-grow"><br/>
                        <Link href="/home" passHref>
                        <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                            <img src="/images/iconHome.png" alt="Home" className="mr-3 h-5 w-5" />
                            Home
                        </button><br />
                    </Link>
                    <Link href="/services" passHref>
                        <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                            <img src="/images/iconService.png" alt="Services" className="mr-3 h-5 w-5" />
                            Services
                        </button><br />
                    </Link>
                    <Link href="/calendar" passHref>
                        <button className="flex w-full items-center rounded-md font-medium bg-teal-20 px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-white dark:hover:bg-gray-700">
                            <img src="/images/iconCalendar.png" alt="Calendar" className="mr-3 h-5 w-5" />
                            Calendar
                        </button><br />
                    </Link>
                    <Link href="/bookings" passHref>
                        <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                            <img src="/images/iconBooking.png" alt="Bookings" className="mr-3 h-5 w-5" />
                            Bookings
                        </button><br />
                    </Link>
                    <Link href="/tracking" passHref>
                        <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                            <img src="/images/iconTracking.png" alt="Tracking" className="mr-3 h-5 w-5" />
                            Tracking
                        </button>
                    </Link>
                </nav>
                </div>


        {/* Main Content */}
                    <div className="pl-64">
                        {/* Header */}
                        <header className={`sticky top-0 z-50 border-b ${isDarkTheme ? 'bg-gray-900' : 'bg-background'}`}>
                            <div className="flex h-16 items-center justify-between px-4">
                                <div className="flex items-center gap-4">
                                    <Button variant="ghost" size="icon" className='bg-teal-20'>
                                        <Calendar className="h-5 w-5 " />
                                    </Button>
                                    <h1 className="text-lg font-semibold">Calendar</h1>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Button variant="ghost" size="icon"className=' bg-teal-20'>
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
                                        {isDarkTheme ? '☀️' : '🌙'}
                                    </Button>
                                    {/* Profile Section */}
                                    <div className="relative">
                                        <button onClick={toggleProfileDropdown} className="flex items-center space-x-3 pl-4 border-l border-gray-200 bg-teal-50 text-black px-2 py-1 rounded-full">
                                            <img src="/images/woman.png" alt="Profile" className="h-8 w-8 rounded-full ring-2 ring-teal-800" />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semi-bold">Sandra</span>
                        <span className="text-xs text-gray-700">77884466</span>
                                            </div>
                                        </button>
                                        {isProfileDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                                                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    <User className="inline-block w-4 h-4 mr-2 text-gray-500" />
                                                    Profile
                                                </Link>
                                                <Link href="/(auth)/sign-in" passHref>
                                                    <button className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50" onClick={() => console.log("Logging out...")}>
                                                        <LogOut className="inline-block w-4 h-4 mr-2 text-red-500" />
                                                        Log Out
                                                    </button>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </header>
                        <SearchBar/>

                        <main className="grid grid-cols-1 md:grid-cols-[1fr_550px] gap-4 p-4">
            <div className="space-y-4">
                {/* Calendar Header */}
                <div className="absolute flex items-center justify-center  top-20 ">
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleYear}
                            className="text-lg font-semi-bold text-teal-1000 focus-visible:ring-2 focus-visible:ring-teal-500"
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
                        className="text-teal-1000 font-semi-bold text-md"
                        onClick={handleTodayClick}
                    >
                        Today
                    </Button>
                </div>

                {/* Calendar Grid */}
<div className="grid grid-cols-7 gap-2 p-4">
  {/* Days of the Week */}
  {days.map((day) => (
    <div key={day} className="text-center text-sm font-semibold text-gray-500">
      {day}
    </div>
  ))}

  {/* Empty Cells Before First Day */}
  {Array.from({ length: firstDayOfMonth }).map((_, index) => (
    <div key={`empty-${index}`} className="h-16"></div>
  ))}

  {/* Days in Current Month */}
  {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
    const dayNumber = dayIndex + 1;

    return (
      <button
        key={dayNumber}
        onClick={() => setSelectedDate(dayNumber)}
        className={`flex items-center justify-center w-14 h-14 rounded-3xl transition-all duration-300 ${
          selectedDate === dayNumber
            ? 'bg-teal-1000 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
        }`}
      >
        {dayNumber}
      </button>
    );
  })}
</div>

                                {/* Activity Section */}
<div className={`rounded-3xl border ${isDarkTheme ? 'bg-gray-700' : 'bg-card'} p-8`}>
    <div className="mb-14">
        <h3 className="text-lg font-semibold text-teal-1000">Activity</h3><br />
        <div className="flex gap-3">
            <span className="rounded-full bg-teal-10 px-3 py-1 text-sm text-white">
                Services Booked
            </span>
            <span className="rounded-full border-b border-teal border px-3 py-1 text-sm  text-gray-500">
                Packages Used
            </span>
        </div>
    </div>
    <div className="flex h-[270px] items-end gap-4">
        {activityData.map((_, index) => (
            <div
                key={index}
                className={`relative flex-1 rounded-full ${
                    index === 3
                        ? ' bg-teal-1000 ' 
                        : 'bg-gray-300' 
                }`}
                style={{ height: index === 1 ? '60%' : index === 2 ? '80%' : '120%' }} 
            >
                {index === 4 && ( 
                    <div className="absolute bottom-1 w-full text-center text-md text-white font-semi-bold">
                        {months[index]}
                    </div>
                )}
            </div>
        ))}
    </div>


                                </div>
                            </div>

                            {/* Timeline */}
                            <div className={`rounded-lg border ${isDarkTheme ? 'bg-gray-700' : 'bg-card'} p-4 space-y-4`}>
                                <h3 className="text-lg font-semibold text-teal-1000 mb-4">Daily Schedule</h3>
                                <div className="space-y-4">
                                    {hours.map((hour) => (
                                        <div key={hour} className="flex items-center group">
                                            <div className="w-20 text-sm text-muted-foreground mr-4">{hour}</div>
                                            <div className="h-px flex-1 bg-gray-200 group-hover:bg-teal-500 transition-colors duration-300"></div>
                                            <div className="w-8 h-8 ml-4 bg-teal-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Plus className="h-4 w-4 text-teal-600" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </main>

                        {/* Plus Button */}
                        <Button
                            className="absolute bottom-4 right-4 rounded-full bg-teal-1000 text-white h-12 w-12 flex items-center justify-center shadow-lg"
                            onClick={() => console.log('Add new event')}
                        >
                            <Plus className="h-5 w-5 " />
                        </Button>
                    </div>
                </div>
            );
        }