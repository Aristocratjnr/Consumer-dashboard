        'use client'

        import { Bell, Home, LogOut, Menu, Search, Settings, ChevronDown, Plus, Calendar, User } from 'lucide-react'
        import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
        import { Button } from "@/components/ui/button"
        import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
        } from "@/components/ui/dropdown-menu"
        import { Input } from "@/components/ui/input"
        import Link from "next/link"
        import { useState } from "react"

        export default function CalendarDashboard() {
        const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
         const toggleProfileDropdown = () => {
              setIsProfileDropdownOpen(!isProfileDropdownOpen);
            };
        const [selectedDate, setSelectedDate] = useState(18)
        const [selectedMonth, setSelectedMonth] = useState('September')
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const dates = Array.from({ length: 21 }, (_, i) => i + 15)
        const hours = Array.from({ length: 12 }, (_, i) => `${i + 1}:00AM`)
        const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const activityData = [20, 35, 25, 85, 45]

        const handleTodayClick = () => {
            const today = new Date()
            setSelectedDate(today.getDate())
            setSelectedMonth(months[today.getMonth()])
        }

        return (
            <div className="min-h-screen  bg-teal-20 relative">
            {/* Sidebar */}
            <div className="fixed left-0 top-0 bottom-0 w-64 border-r bg-background p-4">
                <div className="mb-8">
                <div className="flex items-center mb-8">
                    <img alt="TulaLaundry" className="h-8 -mr-0.5" src="/images/logo.png" />
                    <img src="/images/lund.png" alt="Tulaundry" className="h-5" />
                </div>
                </div>
                <nav className="space-y-2">
                <Link
                    href="/home"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
                >
                    <Home className="h-5 w-5" />
                    Home
                </Link><br/>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
                >
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                    </svg>
                    Services
                </Link><br/>
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
                >
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                    </svg>
                    Calendar
                </Link><br/>
                <Link
                    href="/bookings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
                >
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    </svg>
                    Booking
                </Link><br/>
                <Link
                    href="/tracking"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
                >
                    <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                    </svg>
                    Tracking
                </Link>
                </nav>
                <div className="absolute bottom-4 left-4">
                <Button variant="ghost" className="text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </Button>
                </div>
            </div>
                    {/* Main Content */}
            <div className="pl-64">
                {/* Header */}
                <header className="sticky top-0 z-50 border-b bg-background">
                <div className="flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className='bg-teal-20'>
                        <Calendar className="h-5 w-5 " />
                    </Button>
                    <h1 className="text-lg font-semibold">Calender</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-5 w-5" />
                    </Button>
                   {/* Profile Section */}
              <div className="relative">
                    <button
                      onClick={toggleProfileDropdown}
                      className="flex items-center space-x-3 pl-4 border-l border-gray-200 bg-teal-50 text-teal-800 px-2 py-1 rounded-full"
                    >
                      <img
                        src="/images/woman.png"
                        alt="Profile"
                        className="h-8 w-8 rounded-full ring-2 ring-teal-800"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semi-bold">Sandra</span>
                        <span className="text-xs text-gray-700">77884466</span>
                      </div>
                    </button>
                    {isProfileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <User className="inline-block w-4 h-4 mr-2 text-gray-500" />
                          Profile
                        </Link>
                        <Link href="/(auth)/sign-in" passHref>
                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          onClick={() => console.log("Logging out...")}
                        >
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

                    
                

                {/* Calendar Content */}
                <main className="grid grid-cols-[1fr_250px] gap-4 p-4">
                <div className="space-y-4">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semi-bold text-teal-1000">2024</h2>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            {selectedMonth}
                            <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            {months.map((month) => (
                            <DropdownMenuItem 
                                key={month} 
                                onSelect={() => setSelectedMonth(month)}
                                className="cursor-pointer"
                            >
                                {month}
                            </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <Button 
                        className ='text-teal-1000 font-semi-bold text-lg'
                        variant="ghost" 
                        size="lg"
                        onClick={handleTodayClick}>
                        Today
                    </Button>
                    </div>

                    {/* Calendar Header and Grid */}
                    <div className="rounded-lg border bg-card shadow p-4 max-w-md mx-auto">
                    <div className="text-center mb-2">
                        <h2 className="text-lg text-teal-1000 font-semi-bold">{selectedMonth} 2024</h2>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                        {days.map((day) => (
                        <div key={day} className="text-xs font-medium text-muted-foreground">
                            {day}
                        </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center mt-2">
                        {dates.map((date) => (
                        <Button
                            key={date}
                            variant={selectedDate === date ? "default" : "ghost"}
                            className={`h-10 w-10 rounded-full p-0 ${
                            selectedDate === date ? 'bg-teal-1000 text-white' : 'text-muted-foreground'
                            }`}
                            onClick={() => setSelectedDate(date)}
                        >
                            {date}
                        </Button>
                        ))}
                    </div>

                    </div>

                    {/* Activity Section */}
                    <div className="rounded-lg border bg-card p-4">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Activity</h3>
                        <div className="flex gap-4">
                        <span className="rounded-full bg-teal-10 px-3 py-1 text-sm text-white ">
                            Services Booked
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                            Packages Used
                        </span>
                        </div>
                    </div>
                    <div className="flex h-[150px] items-end gap-4 ">
                        {activityData.map((height, index) => (
                        <div
                            key={index}
                            className="relative flex-1 rounded-t-lg rounded-[20px] bg-teal-1000"
                            style={{ height: `${height}%` }}
                        >
                            <div className="absolute bottom-0 w-full text-center text-lg text-white font-semi-bold">
                            {months[index]}
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="rounded-lg border bg-card p-4">
                    <div className="space-y-6">
                    {hours.map((hour) => (
                        <div key={hour} className="flex items-center gap-10">
                        <div className="w-16 text-sm text-muted-foreground">{hour}</div>
                        <div className="h-px flex-1 bg-border"></div>
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
        )
        }