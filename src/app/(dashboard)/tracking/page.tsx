'use client'

import * as React from "react";
import { Bell, Home, Calendar, Search, Settings, LogOut, Package, MapPin, Phone, Briefcase, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge"; 

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
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <img alt="TulaLaundry" className="h-8" src="/images/logo.png" />
            <img src="/images/lund.png" alt="Tulaundry" className="h-5" />
          </div>
          <nav className="space-y-0.5 flex-grow">
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <Home className="mr-3 h-5 w-5" />
            Home
          </button>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <Briefcase className="mr-3 h-5 w-5" />
            Services
          </button>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <Calendar className="mr-3 h-5 w-5" />
            Calendar
          </button>
          <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
            <Calendar className="mr-3 h-5 w-5" />
            Bookings
          </button>
          <button className="flex w-full items-center rounded-md bg-accent px-4 py-3 font-medium text-accent-foreground dark:bg-gray-700 dark:text-white">
            <Package className="mr-3 h-5 w-5" />
            Tracking
          </button>
        </nav>
        </div>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
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
              <div className="flex items-center space-x-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/images/woman.png"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  width="32"
                />
                <div>
                  <div className="text-sm font-medium">Mawupemor</div>
                  <div className="text-xs text-gray-500">Premium</div>
                </div>
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
                                ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
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
                  <div className="text-sm text-gray-500">Order ID:</div>
                  <div className="text-lg font-semibold">#26683TL</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Completed
                </Badge>
              </div>

              {/* Progress Steps */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {['Pick Up', 'In Process', 'On Transit', 'On Delivery', 'Delivered'].map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-sm font-medium">{step}</div>
                      <div className="text-xs text-gray-500">06/07/2024</div>
                    </div>
                  ))}
                </div>
                <div className="relative h-2 bg-gray-100 rounded">
                  <div className="absolute left-0 top-0 h-full w-full bg-green-500 rounded" />
                </div>
              </div>

              {/* Order Information */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-medium mb-4">
                  <Calendar className="h-5 w-5 text-gray-500" />
                    ORDER INFORMATION
                    </h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-500">PICK UP DATE</div>
                      <div className="font-medium">12:30 06/07/2024</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">ORDER DESTINATION</div>
                      <div className="font-medium">24 hours</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  LOCATION</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-500">PICK UP</div>
                      <div className="font-medium">Point Block C 2301</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">DROP OFF</div>
                      <div className="font-medium">Point Block C 2301</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-4">
                  <User className="h-5 w-5 text-gray-500" />
                  CUSTOMER INFORMATION</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm text-gray-500">FULL NAME</div>
                      <div className="font-medium">Mawupemor Ruth</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">PHONE NUMBER</div>
                      <div className="font-medium">+233 55 813 2345</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item List */}
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-4">Item List</h3>
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
                <h3 className="text-sm font-medium mb-4">Map</h3>
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
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
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
                    <div className="font-medium">Andrew Erata</div>
                    <div className="text-sm text-gray-500">Courier</div>
                  </div>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
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