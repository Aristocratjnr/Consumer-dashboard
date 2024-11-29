'use client'

import * as React from "react"
import { Calendar, Clock, Filter, History, Plus, Search, Settings, LogOut, Package, X, Bell, User, Banknote} from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from 'react'

interface Booking {
  id: number
  title: string
  reference: string
  date: string
  time: string
  services: string[]
  staffImage: string
  additionalNote?: string
  paymentMethod: string
  totalAmount: number
  amountPaid: number
  changeGiven: number
  modeOfTransport: string
  pickupTime: string
}

const bookings: Booking[] = [
  {
    id: 1,
    title: "Weekly Essentials",
    reference: "REF: 887746289",
    date: "Today",
    time: "9:30",
    services: ["Laundry", "Stain Treatments", "Ironing"],
    staffImage: "/images/frame.png",
    additionalNote: "Please separate the white clothes from the coloured ones",
    paymentMethod: "Cash",
    totalAmount: 60,
    amountPaid: 100,
    changeGiven: 40,
    modeOfTransport: "Picked Up",
    pickupTime: "1:30PM"
  },
  {
    id: 2,
    title: "Dry Cleaning",
    reference: "REF: 887746290",
    date: "Tomorrow",
    time: "14:00",
    services: ["Dry Cleaning"],
    staffImage: "/images/frame.png",
    paymentMethod: "Credit Card",
    totalAmount: 45,
    amountPaid: 45,
    changeGiven: 0,
    modeOfTransport: "Delivery",
    pickupTime: "16:00PM"
  },
  {
    id: 3,
    title: "Weekly Essentials",
    reference: "REF: 815749290",
    date: "Last Week",
    time: "11:30",
    services: ["Laundry", "Stain Treatments", "Ironing"],
    staffImage: "/images/frame.png",
    paymentMethod: "Cash",
    totalAmount: 55,
    amountPaid: 60,
    changeGiven: 5,
    modeOfTransport: "Picked Up",
    pickupTime: "13:00PM"
  },
  {
    id: 4,
    title: "Dry Cleaning",
    reference: "REF: 815749289",
    date: "Two Weeks Ago",
    time: "15:00",
    services: ["Dry Cleaning", "Pressing"],
    staffImage: "/images/frame.png",
    paymentMethod: "Credit Card",
    totalAmount: 70,
    amountPaid: 70,
    changeGiven: 0,
    modeOfTransport: "Delivery",
    pickupTime: "17:30PM"
  }
]

export default function BookingPage() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [selectedBooking, setSelectedBooking] = React.useState<Booking | null>(null)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  React.useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`flex min-h-screen bg-teal-20 ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <div className="w-64 border-r bg-background px-4 py-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        <div className="mb-8 flex items-center">
          <img
            alt="TulaLaundry"
            className="h-8 -mr-0.5"
            src="/images/logo.png"
          />
          <img src="/images/lund.png" alt="Tulaundry" className="h-5" />
        </div>
        <nav className="space-y-0.5 flex-grow">
        <Link href="/" passHref>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <HomeIcon className="mr-3 h-5 w-5" />
            Home
          </button>
          </Link>
          <Link href="/" passHref>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <ServicesIcon className="mr-3 h-5 w-5" />
            Services
          </button>
          </Link>
          <Link href="/calendar" passHref>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <Calendar className="mr-3 h-5 w-5" />
            Calendar
          </button>
          </Link>
          <Link href="/" passHref>
          <button className="flex w-full items-center rounded-md bg-accent px-4 py-3 font-medium text-accent-foreground dark:bg-gray-700 dark:text-white">
            <BookingsIcon className="mr-3 h-5 w-5" />
            Bookings
          </button>
          </Link>
          <Link href="/tracking" passHref>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <Package className="mr-3 h-5 w-5" />
            Tracking
          </button>
          </Link>
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col dark:bg-teal-900 relative">
        <header className="flex h-16 items-center justify-between border-b px-6 dark:border-gray-700">
          <h1 className="text-lg font-semibold dark:text-white ">Bookings</h1>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="dark:text-gray-300 dark:hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="dark:text-gray-300 dark:hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="dark:text-gray-300 dark:hover:text-white">
              <Settings className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={toggleDarkMode} className="dark:text-gray-300 dark:hover:text-white">
              {darkMode ? '☀️' : '🌙'}
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
        </header>

        <div className="flex flex-1 p-6 space-x-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <Tabs defaultValue="upcoming" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="upcoming" className="dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white">Upcoming</TabsTrigger>
                    <TabsTrigger value="history" className="dark:text-gray-300 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white">History</TabsTrigger>
                  </TabsList>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="outline" className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Input
                      className="w-[200px] dark:bg-gray-800 dark:text-white dark:border-gray-600"
                      placeholder="Search bookings..."
                      type="search"
                    />
                  </div>
                </div>

                <TabsContent value="upcoming" className="mt-4">
                  <ScrollArea className="h-[calc(100vh-12rem)]">
                    <div className="space-y-4">
                      {bookings.slice(0, 2).map((booking) => (
                        <BookingCard
                          key={booking.id}
                          booking={booking}
                          onSelect={() => setSelectedBooking(booking)}
                          isSelected={selectedBooking?.id === booking.id}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="history" className="mt-4">
                  <ScrollArea className="h-[calc(100vh-12rem)]">
                    <div className="space-y-4">
                      {bookings.slice(2).map((booking) => (
                        <BookingCard
                          key={booking.id}
                          booking={booking}
                          onSelect={() => setSelectedBooking(booking)}
                          isSelected={selectedBooking?.id === booking.id}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Payment Details Section */}
          <div className="w-96 flex-shrink-0">
            <Card className="sticky top-6 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold dark:text-white">Booking Details</CardTitle>
                {selectedBooking && (
                  <Button variant="ghost" size="icon" onClick={() => setSelectedBooking(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {selectedBooking ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold dark:text-white">{selectedBooking.title}</h3>
                      <div className="border-b-2 border-dotted border-teal-10 mb-4"></div>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">{selectedBooking.reference}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium dark:text-gray-300">Services</h4>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {selectedBooking.services.join(' • ')}
                      </p>
                    </div>
                    {selectedBooking.additionalNote && (
                      <div>
                        <div className="border-b-2 border-dotted border-teal-10 mb-4"></div>
                        <h4 className="text-sm font-medium dark:text-gray-300">Additional Note</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">{selectedBooking.additionalNote}</p>
                        <div className="border-b-2 border-dotted border-teal-10 mb-4"></div>
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                          <Banknote className="h-4 w-4 text-muted-foreground" />
                           Payment Method
                         </span>
                        <span className="text-sm font-medium dark:text-gray-300">{selectedBooking.paymentMethod}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm dark:text-gray-300">Total Amount</span>
                        <span className="text-sm font-medium dark:text-gray-300">${selectedBooking.totalAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm dark:text-gray-300">Amount Paid</span>
                        <span className="text-sm font-medium dark:text-gray-300">${selectedBooking.amountPaid}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm dark:text-gray-300">Change Given</span>
                        <span className="text-sm font-medium dark:text-gray-300">${selectedBooking.changeGiven}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm dark:text-gray-300">Mode of Transport</span>
                        <span className="text-sm font-medium dark:text-gray-300">{selectedBooking.modeOfTransport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm dark:text-gray-300">Time</span>
                        <span className="text-sm font-medium dark:text-gray-300">{selectedBooking.pickupTime}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground dark:text-gray-400">
                    Select a booking to view details
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* New Booking Button */}
        <Button
          size="icon"
          className="fixed bottom-6 right-6 rounded-full w-12 h-12 bg-teal-1000 hover:bg-teal-900 text-white shadow-lg"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

function BookingCard({ booking, onSelect, isSelected }: { booking: Booking; onSelect: () => void; isSelected: boolean }) {
  return (
    <Card className={`dark:bg-gray-800 dark:border-gray-700 ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium dark:text-white text-teal-1000">
          {booking.title}
        </CardTitle>
        <div className="text-sm text-muted-foreground dark:text-gray-400">{booking.reference}</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold dark:text-white text-teal-1000">{booking.time}</div>
            <div>
              <div className="font-medium dark:text-white text-teal-1000">Services: x{booking.services.length.toString().padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground dark:text-gray-400">
                {booking.services.join(' • ')}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              alt="Staff"
              className="h-8 w-8 rounded-full"
              src={booking.staffImage}
            />
            <Button 
              variant={isSelected ? "secondary" : "outline"} 
              className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={onSelect}
            >
              {isSelected ? "Selected" : "Details"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function ServicesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
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
  )
}

