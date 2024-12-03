import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Home, HomeIcon, LogOut, Plus, RotateCcw, Search, Settings, Shirt, Sparkles, Package, BookOpen, ChevronRight, MapPin, Bell, User } from 'lucide-react';
import Link from "next/link";
import { useState } from "react";

export default function LaundryDashboard() {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white">
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
              </button><br/>
              </Link>
              <Link href="/" passHref>
              <button className="flex w-full items-center rounded-md font-medium  bg-accent px-4 py-3 text-accent-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300  dark:bg-gray-700">
                <Package className="mr-3 h-5 w-5" />
                Services
              </button><br/>
              </Link>
              <Link href="/calendar" passHref>
              <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                <Calendar className="mr-3 h-5 w-5" />
                Calendar
              </button><br/>
              </Link>
              <Link href="/bookings" passHref>
              <button className="flex w-full items-center  px-4 py-3 text-muted-foreground dark:text-white">
                <BookOpen className="mr-3 h-5 w-5" />
                Bookings
              </button><br/>
              </Link>
              <Link href="/tracking" passHref>
              <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                <Package className="mr-3 h-5 w-5" />
                Tracking
              </button>
              </Link>
            </nav>
          </div>
</aside>
    {/* Main Content */}
    <div className="ml-64 flex-1">
                <header className="border-b  bg-white">
                    <div className="flex items-center justify-between px-6 h-16">
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-teal-1000" />
                            <h1 className="text-lg font-semibold">Services</h1>
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
                            {/* Theme Toggle Button */}
                            <Button variant="ghost" size="icon">
                              
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
        {/* Main Content */}
        <main className="p-6">
          {/* Services Section */}
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-lg font-semi-bold text-teal">Explore Our Services</h2>
              <p className="text-sm text-slate-500">
                Your Laundry, Done Your Way. Select The Services That Fit Your Needs And Leave The Rest To Us.
              </p>
            </div>
            <div className="flex justify-center gap-16 p-8">
              {[
                { icon: "/images/local.png", label: "LAUNDRY" },
                { icon: "/images/bash.png", label: "CLOTH TREATMENTS" },
                { icon: "/images/event.png", label: "EVENT CLEANING" },
                { icon: "/images/custom-cleaning.png", label: "CUSTOM CLEANING" },
                { icon: "/images/express-cleaning.png", label: "EXPRESS CLEANING" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 border rounded-full border-teal-10 bg-white">
                      <img src={item.icon} alt={item.label} className="h-12 w-12" />
                    </div>
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 rounded-full bg-teal hover:bg-blue-700 w-8 h-8 text-white text-xl font-semibold shadow-md"
                    >
                      <Plus />
                    </Button>
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div>
            <h2 className="text-teal text-2xl font-semi-bold mb-6">Packages</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                {
                  title: "Fresh Start Bundle",
                  price: "₵30",
                  features: [
                    { text: "5 kg Wash & Fold", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "10% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Basic Clean",
                  price: "₵60",
                  features: [
                    { text: "10 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "15% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery for a week", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Weekly Essentials",
                  price: "₵120",
                  features: [
                    { text: "20 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "20% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery twice a month", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Semester Saver",
                  price: "₵150",
                  features: [
                    { text: "30 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "25% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery every week", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Event Ready",
                  price: "₵200",
                  features: [
                    { text: "50 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "30% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Priority delivery", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
              ].map((pkg, index) => (
                <Card key={index} className="overflow-hidden rounded-xl bg-blue-50 shadow-md transition-transform transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semi-bold text-teal text-xl">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-teal mt-1 block">{pkg.price}</div><br/>
                    <ul className="mb-6 space-y-2 text-sm text-slate-500">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {feature.icon}
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <Button className="`w-45 mt-6 py-1.5 px-4 rounded-full font-medium text-sm transition-colors" variant="outline">
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