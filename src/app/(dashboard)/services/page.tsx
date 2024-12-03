import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Home, HomeIcon, LogOut, Plus, RotateCcw, Search, Settings, Shirt, Sparkles, Package, BookOpen, ChevronRight } from 'lucide-react';
import Link from "next/link";

export default function LaundryDashboard() {
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
      <div className="ml-64">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h1 className="text-xl font-semibold">Services</h1>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <RotateCcw className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage alt="User" src="/placeholder.svg" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {/* Services Section */}
          <div className="mb-8">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Explore Our Services</h2>
              <p className="text-sm text-slate-500">
                Your Laundry, Done Your Way. Select The Services That Fit Your Needs And Leave The Rest To Us.
              </p>
            </div>
            <div className="flex justify-center gap-12">
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
                  price: "$30",
                  features: [
                    { text: "5 kg Wash & Fold", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "10% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Basic Clean",
                  price: "$60",
                  features: [
                    { text: "10 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "15% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery for a week", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Weekly Essentials",
                  price: "$120",
                  features: [
                    { text: "20 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "20% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery twice a month", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Semester Saver",
                  price: "$150",
                  features: [
                    { text: "30 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "25% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Free delivery every week", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
                {
                  title: "Event Ready",
                  price: "$200",
                  features: [
                    { text: "50 kg Wash & Iron Service", icon: <Shirt className="h-4 w-4 text-blue-500" /> },
                    { text: "30% discount coupon", icon: <Sparkles className="h-4 w-4 text-blue-500" /> },
                    { text: "Priority delivery", icon: <Home className="h-4 w-4 text-blue-500" /> },
                  ],
                },
              ].map((pkg, index) => (
                <Card key={index} className="overflow-hidden rounded-xl bg-blue-50 shadow-md transition-transform transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-slate-900">{pkg.title}</h3>
                    <div className="mt-1 text-2xl font-bold text-blue-600">{pkg.price}</div>
                    <ul className="mb-6 space-y-2 text-sm text-slate-500">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {feature.icon}
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant="outline">
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