'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Home, HomeIcon, LogOut, Plus, RotateCcw, Search, Settings, Shirt, Sparkles, Package, BookOpen, ChevronRight, MapPin, Bell, User, Mail } from 'lucide-react';
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
        <div className={`flex min-h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 z-40 h-screen w-64 border-r ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <div className={`w-64 border-r ${isDarkTheme ? 'bg-gray-800' : 'bg-background'} px-4 py-6 flex flex-col`}>
                    <div className="mb-6 flex items-center">
                    <div>
                            <Link href="/" className="flex items-center space-x-2">
                            <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
                            </Link>
                    </div>
                    </div>
                    <nav className="space-y-0.5 flex-grow"><br/>
                    <Link href="/home" passHref>
                <button className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                    <img src="/images/iconHome.png" alt="Home" className="mr-3 h-5 w-5" />
                    Home
                </button><br />
            </Link>
            <Link href="/services" passHref>
                <button className={`flex w-full items-center rounded-md font-medium ${isDarkTheme ? 'bg-gray-700 text-accent-foreground' : 'bg-teal-20 text-accent-foreground'} px-4 py-3 hover:bg-accent`}>
                    <img src="/images/iconService.png" alt="Services" className="mr-3 h-5 w-5" />
                    Services
                </button><br />
            </Link>
            <Link href="/calendar" passHref>
                <button className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                    <img src="/images/iconCalendar.png" alt="Calendar" className="mr-3 h-5 w-5" />
                    Calendar
                </button><br />
            </Link>
            <Link href="/bookings" passHref>
                <button className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? 'text-gray-300' : 'text-muted-foreground'}`}>
                    <img src="/images/iconBooking.png" alt="Bookings" className="mr-3 h-5 w-5" />
                    Bookings
                </button><br />
            </Link>
            <Link href="/tracking" passHref>
                <button className={`flex w-full items-center px-4 py-3 ${isDarkTheme ? 'text-gray-300 hover:bg-gray-700' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}`}>
                    <img src="/images/iconTracking.png" alt="Tracking" className="mr-3 h-5 w-5" />
                    Tracking
                </button>
            </Link>
                    </nav>
                    <button className="absolute bottom-12 left-4 right-4 flex items-center justify-between px-4 py-3 text-red-800 hover:bg-red-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Log out</span>
                </div>
                <ChevronRight className="h-5 w-5" />
            </button>
            
                </div>
                
            </aside>
            {/* Main Content */}
            <div className={`ml-64 flex-1 flex flex-col ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                <header className={`border-b ${isDarkTheme ? 'bg-gray-900 border-gray-700' : 'bg-white'}`}>
                    <div className="flex items-center justify-between px-6 h-16">
                        <div className="flex items-center space-x-2">
                            <img src="/images/service.png" alt="Services" className="h-7 w-7 " />
                            <h1 className="text-lg font-semibold">Services</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon" className=" bg-teal-20">
                                <Search className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Settings className="h-5 w-5" />
                            </Button>
                            {/* Theme Toggle Button */}
                            <Button onClick={toggleTheme} className={`border rounded-full px-2 py-1 ${isDarkTheme ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-800 bg-white hover:bg-gray-300'}`}>
                                {isDarkTheme ? '☀️' : '🌙'}
                                
                            </Button>
                            {/* Profile Section */}
                            <div className="relative">
                                <button
                                    onClick={toggleProfileDropdown}
                                    className={`flex items-center space-x-3 pl-4 border-l  border-gray-200 ${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-teal-50 text-black'} px-2 py-1 rounded-full`}
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
                                    <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg border ${isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} z-50`}>
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
                <main className={`flex-grow ${isDarkTheme ? 'bg-gray-700' : 'bg-white'} p-6`}>
                    {/* Services Section */}
                    <div className="mb-4">
                    </div>
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-teal">Explore Our Services</h2>
                            <p className="text-sm font-medium  text-black dark:bg-white">
                                Your Laundry, Done Your Way. Select The Services That Fit Your Needs And Leave The Rest To Us.
                            </p>
                        </div>
                        <div className="border-3 border-r border-gray-300 bg-white shadow-md mb-6 rounded-b-lg shadow-gray-700/70">
    <div className="flex justify-center gap-16 p-8">
        {[
            { icon: "/images/local.png", label: "LAUNDRY" , Link: "services/laundry" },
            { icon: "/images/bash.png", label: "CLOTH TREATMENTS" , Link: "/services/cloth-treatments" },
            { icon: "/images/event.png", label: "EVENT CLEANING",  Link: "/services/event-services" },
            { icon: "/images/cloth.png", label: "DRY CLEANING" ,  Link: "/services/dry-cleaning" },
            { icon: "/images/curtain.png", label: "HOME TEXTILE CLEANING", Link: "/services/express-cleaning" },
        ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
                <Link href={item.Link} passHref>
                    <div className="relative cursor-pointer"> 
                        <div className="flex items-center justify-center w-32 h-32 border rounded-full border-teal-10 bg-white">
                            <img src={item.icon} alt={item.label} className="h-12 w-12" />
                        </div>
                        <Button
                            size="icon"
                            className="absolute -bottom-2 -right-2 rounded-full bg-teal hover:bg-teal-10 w-10 h-10 text-white text-xl font-semibold shadow-md"
                            style={{
                                clipPath: "circle(50% at 50% 50%)",
                            }}
                        >
                            <Plus />
                        </Button>
                </div>
                </Link>
                <span className="mt-2 text-md font-medium text-black">{item.label}</span>
            </div>
        ))}
    </div>
</div>

                        {/* Packages Section */}
                        <div className={`flex-grow ${isDarkTheme ? 'bg-gray-900' : 'bg-teal-20'} p-6`}>
                            <h2 className="text-teal text-2xl items-start font-semi-medium mb-6 trac">Packages</h2><br/>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                {[
                                    {
                                        title: "Fresh Start Bundle",
                                        price: "₵30",
                                        features: [
                                            { text: "5 kg Wash & Fold", icon: <Shirt className="h-4 w-4 text-teal" /> },
                                            { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                                            { text: "10% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                                            { text: "Free delivery", icon: <Home className="h-4 w-4 text-teal" /> },
                                    
                                        ],
                                    },
                                    {
                                        title: "Basic Clean",
                                        price: "₵60",
                                        features: [
                                            { text: "10 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                                            { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                                            { text: "15% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                                            { text: "Free delivery for a week", icon: <Home className="h-4 w-4 text-teal" /> },
                                        
                                        ],
                                    },
                                    {
                                        title: "Weekly Essentials",
                                        price: "₵120",
                                        features: [
                                            { text: "20 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                                            { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                                            { text: "20% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                                            { text: "Free delivery twice a month", icon: <Home className="h-4 w-4 text-teal" /> },
                                    
                                        ],
                                    },
                                    {
                                        title: "Semester Saver",
                                        price: "₵150",
                                        features: [
                                            { text: "30 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                                            { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                                            { text: "25% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                                            { text: "Free delivery every week", icon: <Home className="h-4 w-4 text-teal" /> },
                                        ],
                                        
                                    },
                                    {
                                        title: "Event Ready",
                                        price: "₵200",
                                        features: [
                                            { text: "50 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-teal" /> },
                                            { text: "1kg Wash & Iron Service", icon: <Home className="h-4 w-4 text-teal" /> },
                                            { text: "30% discount coupon", icon: <Sparkles className="h-4 w-4 text-teal" /> },
                                            { text: "Priority delivery", icon: <Home className="h-4 w-4 text-teal" /> },
                                        
                                        ],
                                    },
                                ].map((pkg, index) => (
                                    <Card key={index} className={`p-2 overflow-hidden rounded-3xl ${isDarkTheme ? 'bg-gray-800' : 'bg-white'} shadow-md transition-transform transform hover:scale-105`}>
                        <CardContent className={`p-1 text-left ${isDarkTheme ? 'text-gray-200' : 'text-gray-900'}`}>
                            <h3 className="font-semi-bold text-teal text-sm">{pkg.title}</h3>
                            <div className="text-2xl text-teal mt-1 block">{pkg.price}</div><br />
                            <ul className="mb-6 space-y-2 text-xs text-slate-500">
                            {pkg.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                {feature.icon}
                                {feature.text}
                                </li>
                            ))}
                            </ul>
                            <Button className="w-45 mt-6 py-1.5 px-4 rounded-full font-medium text-sm transition-colors border border-teal-600 hover:bg-teal hover:text-white" variant="outline">
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