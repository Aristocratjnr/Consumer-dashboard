        'use client'

        import * as React from "react";
        import Link from "next/link";
        import { Bell, Home, Calendar, Search, Settings, LogOut, Package, MapPin, Phone, Briefcase, User, ChevronRight, Check, Mail } from 'lucide-react';
        import { Button } from "@/components/ui/button";
        import { Input } from "@/components/ui/input";
        import { Card, CardContent } from "@/components/ui/card";
        import { ScrollArea } from "@/components/ui/scroll-area";
        import { Badge } from "@/components/ui/badge"; 
        import { useState } from "react";

        interface TrackingItem {
        id: string;
        date: string;
        status: 'On Transit' | 'On Delivery' | 'Completed';
        }

        interface OrderItem {
        no: number;
        description: string;
        quantity: number;
        weight: string;
        }

        const trackingItems: TrackingItem[] = [
        { id: '#26683TL', date: '01/07/2024', status: 'Completed' },
        { id: '#26683TL', date: '01/07/2024', status: 'On Delivery' },
        { id: '#26683TL', date: '01/07/2024', status: 'Completed' },
        { id: '#26683TL', date: '01/07/2024', status: 'On Delivery' },
        { id: '#26683TL', date: '01/07/2024', status: 'On Transit' },
        { id: '#26683TL', date: '01/07/2024', status: 'Completed' },
        { id: '#26683TL', date: '01/07/2024', status: 'On Transit' },
        { id: '#26683TL', date: '01/07/2024', status: 'Completed' },
        { id: '#26683TL', date: '01/07/2024', status: 'On Delivery' }
        ];

        const orderItems: OrderItem[] = [
        { no: 1, description: 'T-Shirts', quantity: 5, weight: '4kg' },
        { no: 2, description: 'Jeans Trouser', quantity: 3, weight: '20kg' },
        { no: 3, description: 'Bedsheet with Pillowcases', quantity: 1, weight: '15kg' }
        ];

        export default function TrackingPage() {
            const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

          const toggleProfileDropdown = () => {
            setIsProfileDropdownOpen(!isProfileDropdownOpen);
          };

        return (
            <div className="flex min-h-screen bg-teal-20">
           {/* Sidebar */}
            <div className="w-64 bg-white border-r">
                <div className="p-6">
                <div className="flex items-center mb-8">
                    <img alt="TulaLaundry" className="h-8 -mr-0.5" src="/images/logo.png" />
                    <img src="/images/lund.png" alt="Tulaundry" className="h-5" />
                </div>
                <nav className="space-y-0.5 flex-grow">
                <Link href="/" passHref>
                <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                    <Home className="mr-3 h-5 w-5" />
                    Home
                </button>
                </Link><br/>
                <Link href="/" passHref>
                <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                    <Briefcase className="mr-3 h-5 w-5" />
                    Services
                </button>
                </Link><br/>
                <Link href="/calendar" passHref>
                <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                    <Calendar className="mr-3 h-5 w-5" />
                    Calendar
                </button>
                </Link><br/>
                <Link href="/bookings" passHref>
                <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                    <Mail className="mr-3 h-5 w-5" />
                    Bookings
                </button>
                </Link><br/>
                <Link href="/" passHref>
                <button className="flex w-full items-center rounded-md bg-accent px-4 py-3 font-medium text-accent-foreground dark:bg-gray-700 dark:text-white">
                    <MapPin className="mr-3 h-5 w-5" />
                    Tracking
                </button>
                </Link>
                </nav>
                </div>
                <button className="absolute bottom-12 left-4 right-4 flex items-center justify-between w-40 px-4 py-3 text-red-800 hover:bg-red-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-5">
                    <LogOut className="h-5 w-5" /> 
                    <span className="font-medium">Log out</span>
                </div>
                <ChevronRight className="h-5 w-5" />
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <header className="bg-white border-b">
                <div className="flex items-center justify-between px-6 h-16">
                    <h1 className="text-lg font-semibold">Tracking</h1>
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


                <div className="grid grid-cols-12 gap-6 p-6">
                {/* Tracking List */}
                <div className="col-span-4">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search ID" className="pl-9" />
                        <Button size="icon" variant="ghost" className="absolute right-1 top-1">
                        <Package className="h-4 w-4" />
                        </Button>
                    </div>
                    <ScrollArea className="h-[calc(100vh-12rem)]">
                        <div className="space-y-2">
                        {trackingItems.map((item, index) => (
                            <Card key={index} className="cursor-pointer hover:bg-gray-50">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-medium">{item.id}</div>
                                    <div className="text-sm text-gray-500">{item.date}</div>
                                </div>
                                <Badge 
                                    variant={item.status === 'Completed' ? 'default' : 'secondary'}
                                    className={
                                    item.status === 'Completed' 
                                        ? 'bg-white text-customGreen hover:bg-green-100 border border-customGreen rounded-2xl inline-block' 
                                        : 'bg-white text-teal-1000 hover:bg-blue-100 border-teal-1000 rounded-2xl inline-block'
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
                    <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                        <div className="text-sm font-bold">Order ID:</div>
                        <div className="text-sm font-semi-bold  text-gray-500">#26683TL</div>
                        </div>
                        <Badge className="bg-white text-customGreen hover:bg-green-100 border border-customGreen rounded-2xl inline-block">
                        Completed
                        </Badge>
                    </div>

                        {/* Progress Steps */}
        <div className="mb-8">
        <div className="relative flex justify-between mb-6">
            {['Pick Up', 'In Process', 'On Transit', 'On Delivery', 'Delivered'].map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10">
                <div className="w-8 h-8 rounded-full bg-customGreen flex items-center justify-center mb-2">
                <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{step}</div>
                <div className="text-xs text-gray-600 mt-1">06/07/2024</div>
            </div>
            ))}
            {/* Progress line */}
            <div className="absolute top-5 left-0 right-0 h-[1px] bg-customGreen -z-0" style={{ width: '100%', transform: 'translateY(-30%)' }} />
        </div>
        </div>

                    {/* Order Information */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        <div>
                        <h3 className="text-sm font-medium mb-4">
                        <Calendar className="h-5 w-5 text-gray-400" />
                            <h3 className="text-gray-400">ORDER INFORMATION</h3>
                            </h3>
                        <div className="space-y-2">
                            <div>
                            <div className="text-sm">PICK UP DATE</div>
                            <div className="font-medium ">12:30 06/07/2024</div>
                            </div>
                            <div>
                            <div className="text-sm text-gray-400">ORDER DESTINATION</div>
                            <div className="font-medium">24 hours</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h3 className="text-sm font-medium mb-4">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <h3 className="text-gray-400">LOCATION</h3>
                        </h3>
                        <div className="space-y-2">
                            <div>
                            <div className="text-sm">PICK UP</div>
                            <div className="font-medium text-sm">Point Block C 2301</div>
                            </div>
                            <div>
                            <div className="text-sm ">DROP OFF</div>
                            <div className="font-medium text-sm">Point Block C 2301</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <h3 className="text-sm font-medium mb-4">
                        <User className="h-5 w-5 text-gray-400" />
                        <h3 className="text-gray-400">CUSTOMER INFORMATION</h3>
                        </h3>
                        <div className="space-y-2">
                            <div>
                            <div className="text-sm ">FULL NAME</div>
                            <div className="font-medium text-sm">Mawupemor Ruth</div>
                            </div>
                            <div>
                            <div className="text-sm text-gray-500">PHONE NUMBER</div>
                            <div className="font-medium text-sm">+233 55 813 2345</div>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Item List */}
                    <div className="mb-4">
                        <h3 className="text-lg  font-semibold mb-4">Item List</h3>
                        <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-500 bg-gray-100 divide-y divide-gray-200">
                            <th className="pb-2 border-b border-gray-300">No.</th>
                            <th className="pb-2 border-b border-gray-300">Description</th>
                            <th className="pb-2 border-b border-gray-300">Quantity</th>
                            <th className="pb-2 border-b border-gray-300">Weight</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orderItems.map((item) => (
                            <tr key={item.no} className="border-b border-gray-300">
                                <td className="py-3 px-4 border border-gray-300">{item.no}</td>
                                <td className="py-3 px-4 border border-gray-300">{item.description}</td>
                                <td className="py-3 px-4 border border-gray-300">{item.quantity}</td>
                                <td className="py-3 px-4 border border-gray-300">{item.weight}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>

                    {/* Map */}
                    <div className="mb-8">
                        <h3 className="text-lg font-medium mb-4">Map</h3>
                        <div className="h-64 bg-gray-100 rounded-lg relative">
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
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                        <img
                            alt="Courier"
                            className="rounded-full"
                            height="40"
                            src="/images/Andrew.png"
                            style={{ aspectRatio: "40/40", objectFit: "cover" }}
                            width="40"
                        />
                        <div>
                            <div className="font-medium  text-gray-500">Andrew Erata</div>
                            <div className="text-sm">Courier</div>
                        </div>
                        </div>
                        <img 
                    src="/images/call.png" 
                    alt="Phone icon" 
                    className=" text-white h-6 w-6 mr-2"
                    />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
        }

        function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
        return (
            <button
            className={`flex items-center w-full space-x-3 px-4 py-2 rounded-lg text-sm ${
                active 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
            >
            {icon}
            <span>{label}</span>
            </button>
        );
        }