'use client'

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {useSession } from "next-auth/react";
import ReactConfetti from "react-confetti";
import { Bell, Settings, Search, LogOut, Mail, Phone, User, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Dashboard() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();
  const isDraggingRef = useRef(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const loyaltyPoints = [
    { points: 100, status: "completed" },
    { points: 200, status: "completed" },
    { points: 300, status: "completed" },
    { points: 400, status: "in-progress" },
    { points: 500, status: "locked" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current && progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const newProgress = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setDragProgress(newProgress);

        if (newProgress === 100 && !showConfetti) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        }
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const newProgress = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setDragProgress(newProgress);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [showConfetti]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed > 1200) {
        lastTimestamp = timestamp;
        setDragProgress((prevProgress) => {
          const newProgress = prevProgress + 0.1;
          return newProgress > 100 ? 100 : newProgress;
        });
      }

      if (dragProgress < 100) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dragProgress]);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    setDragProgress(0);
  };

  const handleTouchStart = () => {
    isDraggingRef.current = true;
    setDragProgress(0);
  };

  // Sidebar component
  const Sidebar = () => (
    <>
      <nav className="flex flex-col space-y-16">
        <Link href="/home" passHref>
          <Button variant="ghost" className="w-full justify-start rounded-md bg-teal-20">
            <Image
              src="/images/iconHome.png"
              alt="Home"
              width={24}
              height={24}
              className="mr-2 h-5 w-5"
            />
            Home
          </Button>
        </Link>
        <Link href="/services" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Image
              src="/images/iconService.png"
              alt="Services"
              width={24}
              height={24}
              className="mr-2 h-5 w-5"
            />
            Services
          </Button>
        </Link>
        <Link href="/calendar" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Image
              src="/images/iconCalendar.png"
              alt="Calendar"
              width={24}
              height={24}
              className="mr-2 h-5 w-5"
            />
            Calendar
          </Button>
        </Link>
        <Link href="/bookings" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Image
              src="/images/iconBooking.png"
              alt="Bookings"
              width={24}
              height={24}
              className="mr-2 h-5 w-5"
            />
            Bookings
          </Button>
        </Link>
        <Link href="/tracking" passHref>
          <Button variant="ghost" className="w-full justify-start">
            <Image
              src="/images/iconTracking.png"
              alt="Tracking"
              width={24}
              height={24}
              className="mr-2 h-5 w-5"
            />
            Tracking
          </Button>
        </Link>
      </nav>
      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-100">
          <LogOut className="mr-2 h-5 w-5" />
          Log out
        </Button>
      </div>
    </>
  );

  // Packages component
  const Packages = () => {
    const packages = [
      {
        id: 1,
        name: "Fresh Start Bundle",
        price: "₵30",
        features: [
          "5 Kg Wash & Fold",
          "1 Kg Wash & Iron Service",
          "A 10% discount coupon",
          "Free delivery",
        ],
        status: "used",
      },
      {
        id: 2,
        name: "Weekly Essentials",
        price: "₵60",
        features: [
          "10kg Wash & Fold Service",
          "10% discount coupon",
          "15% discount on all orders",
          "Free delivery",
        ],
        status: "active",
      },
      {
        id: 3,
        name: "Semester Saver",
        price: "₵120",
        features: [
          "Semester-long service",
          "Priority processing",
          "15% discount on all orders",
          "Free delivery",
        ],
        status: "active",
      },
    ];

    return (
      <div>
        <h2 className="font-semi-bold mb-6 text-2xl text-teal">
          Packages
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl border-2 border-teal-1000 bg-gradient-to-br p-8 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-semi-bold text-teal">{pkg.name}</h3>
                  <span className="mt-1 block text-xl text-teal">
                    {pkg.price}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-teal"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-45 font-semi-bold mt-6 rounded-full px-4 py-1.5 text-sm transition-colors ${
                  pkg.status === "used"
                    ? "cursor-not-allowed bg-gray-100 text-gray-600"
                    : "bg-teal-1000 text-white hover:bg-teal-600"
                }`}
                disabled={pkg.status === "used"}
              >
                {pkg.status === "used" ? "Used" : "Use Again"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // LoyaltyProgress component
  const LoyaltyProgress = () => {
    const [localDragProgress, setLocalDragProgress] = useState(dragProgress);

    useEffect(() => {
      setLocalDragProgress(dragProgress);
    }, [dragProgress]);

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const newProgress = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setLocalDragProgress(newProgress);
      }
    };

    const handleTouchEnd = () => {
      setDragProgress(localDragProgress);
    };

    return (
      <Card className="mb-8">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {[1, 2, 3, 4, 5].map((step, index) => {
              const isCompleted = (localDragProgress / 100) * loyaltyPoints.length > index;
              const isInProgress = (localDragProgress / 100) * loyaltyPoints.length > index - 1 && (localDragProgress / 100) * loyaltyPoints.length < index;
              const outerCircleClass = isCompleted ? "border-teal-1000" : isInProgress ? "border-teal-1000" : "border-gray-300";
              const innerCircleClass = isCompleted ? "bg-teal-1000 text-white" : isInProgress ? "bg-teal-1000 text-white" : "bg-gray-200 text-gray-400";
              return (
                <div key={index} className="relative flex items-center justify-center">
                  <div className={`h-8 w-8 rounded-full border-2 md:h-12 md:w-12 lg:h-16 lg:w-16 ${outerCircleClass} flex items-center justify-center`}>
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8 lg:h-12 lg:w-12 ${innerCircleClass}`}>
                      <span className="text-xs font-bold md:text-sm lg:text-lg">{step}</span>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className={`h-1 w-4 md:w-6 lg:w-8 ${isCompleted ? "bg-teal-1000" : "bg-gray-300"} absolute left-full top-1/2 -translate-y-1/2 transform`}></div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Range Button (Progress Bar) */}
          <div
            className="relative mb-6 h-4 w-full cursor-pointer overflow-hidden rounded-full bg-gray-200"
            ref={progressBarRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute h-full bg-teal-1000 transition-all duration-300 ease-in-out"
              style={{ width: `${localDragProgress}%` }}
            ></div>
            <div
              className="absolute top-1/2 h-6 w-6 -translate-y-1/2 transform rounded-full border-4 border-teal-1000 bg-white transition-all duration-300 ease-in-out"
              style={{ left: `calc(${localDragProgress}% - 12px)` }}
            ></div>
          </div>

          {/* Texts Below Progress Bar */}
          <div className="mb-4 flex justify-between text-xs text-gray-600">
            {loyaltyPoints.map((point, index) => (
              <span key={index}>{point.points} pts</span>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  // CustomerSupport component
  const CustomerSupport = () => {
    const faqs = [
      {
        question: "How to place an order?",
        answer: "You can place an order by selecting the services you need and clicking on the order button.",
      },
      {
        question: "What services are available?",
        answer: "We offer wash & fold, wash & iron, and special bundles.",
      },
      {
        question: "How to track my order?",
        answer: "You can track your order status from your dashboard.",
      },
      {
        question: "Payment and refund policies.",
        answer: "We accept various payment methods and offer refunds under certain conditions.",
      },
    ];

    return (
      <div className="space-y-6">
        {/* Contact Options */}
        <div>
          <div className="mb-6 flex items-center">
            <h3 className="text-base font-semibold text-teal-1000">
              Contact Options
            </h3>
            <span className="font-semi-bold ml-auto text-sm text-teal-1000">
              CM 309678
            </span>
          </div>
          <div className="mb-4 border-b-2 border-dotted border-teal"></div>
          <div className="space-y-4">
            {/* Phone Support */}
            <div className="flex items-center justify-between rounded-lg p-4 shadow-sm transition hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-white p-3 shadow-md">
                  <Phone className="h-4 w-4 text-teal-1000" />
                </div>
                <span className="font-semi-bold text-sm text-teal-1000">
                  Phone Support
                </span>
              </div>
              <span className="font-semi-bold text-sm text-gray-700">
                +233 55 444 7777
              </span>
            </div>
            {/* Email Support */}
            <div className="flex items-center justify-between rounded-lg p-4 shadow-sm transition hover:shadow-md">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-white p-3 shadow-md">
                  <Mail className="h-4 w-4 text-teal-1000" />
                </div>
                <span className="font-semi-bold mr-2 text-sm text-teal-1000">
                  Email Support
                </span>
              </div>
              <span className="font-semi-bold text-sm text-gray-700">
                tulaundry@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="font-semi-bold mb-4 text-base text-teal-1000">
            FAQs
          </h3>
          <div className="mb-4 border-b-2 border-dotted border-teal"></div>
          <ul className="space-y-3">
            {faqs.map((faq, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-start">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-1000"></span>
                  <Link
                    href="#"
                    className="font-semi-bold ml-4 text-sm text-gray-700 transition hover:text-teal-600"
                  >
                    {faq.question}
                  </Link>
                </div>
                {/* Answer Text */}
                <p className="ml-10 text-xs text-gray-600">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Request Assistance Form */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-teal-1000">
            Request Assistance Form
          </h3>
          <div className="mb-4 border-b-2 border-dotted border-teal"></div>
          <form className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                className="w-full border-b border-teal-1000 bg-transparent text-sm focus:border-teal-1000 focus:outline-none"
                placeholder="Name"
              />
            </div>
            {/* Contact Info Field */}
            <div className="relative">
              <input
                type="text"
                className="w-full border-b border-teal-1000 bg-transparent text-sm focus:border-teal-1000 focus:outline-none"
                placeholder="Contact Info"
              />
            </div>
            {/* Order ID Field */}
            <div className="relative">
              <input
                type="text"
                className="w-full border-b border-teal-1000 bg-transparent text-sm focus:border-teal-1000 focus:outline-none"
                placeholder="Order ID"
              />
            </div>
            {/* Description Field */}
            <div className="relative">
              <textarea
                className="h-24 w-full rounded-lg border border-gray-400 bg-transparent p-2 text-sm focus:border-teal-1000 focus:outline-none"
                placeholder="Description of the problem"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="font-semi-bold inline-block rounded-full border border-b border-teal px-6 py-2 text-sm text-black shadow-md transition hover:bg-teal"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // NotificationPanel component
  const NotificationPanel = () => (
    <div className="fixed right-4 top-20 z-50 w-80 rounded-xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Notifications</h3>
          <button className="text-sm text-teal-1000 hover:text-teal-1000">
            Mark all as read
          </button>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {[
          {
            title: "Order Status Update",
            message: "Your order #2458 is ready for pickup",
            time: "2 hours ago",
            unread: true,
          },
          {
            title: "Special Offer",
            message: "Get 20% off on your next order!",
            time: "1 day ago",
            unread: false,
          },
        ].map((notification, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 hover:bg-gray-50 ${notification.unread ? "bg-blue-50" : ""}`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`mt-2 h-2 w-2 rounded-full ${notification.unread ? "bg-teal-600" : "bg-gray-300"}`}
              />
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {notification.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {notification.message}
                </p>
                <span className="mt-2 block text-xs text-gray-500">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <button className="w-full text-center text-sm text-teal-900 hover:text-teal-1000">
          View all notifications
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-teal-20 text-gray-900">
      {/* Enhanced Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white bg-white/90 px-1 py-2 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={100}
                  height={60}
                />
              </Link>
            </div>
            <nav className="hidden md:block">
              <button className="flex items-center">
                <span className="ml-28 text-lg font-semibold">Home</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="bg-teal-20 hover:bg-gray-100"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </Button>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                className="relative rounded-full p-2 transition-all hover:bg-gray-100"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>

              <button className="rounded-full p-2 transition-all hover:bg-gray-100 hidden md:block">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>

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
                  <div className="flex flex-col items-start md:flex">
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
                    <Link href="/" passHref>
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
        </div>
      </header>

      <div className="flex pt-24">
        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden fixed top-20 right-1 z-50 bg-white shadow-lg rounded-full">
              <Menu className="h-6 w-6 text-teal-1000" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <Sidebar />
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar */}
        <aside className="fixed bottom-0 left-0 top-16 hidden w-64 border-r border-gray-300 bg-white px-6 py-10 shadow-lg md:block">
          <Sidebar />
        </aside>

        {/* Main Content */}
        { session ? (
           <div>
          <main className="flex-1 px-4 py-2 md:ml-64 lg:mr-96">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="font-semi-bold text-4xl">
                Welcome, <span className="text-teal">{session.user?.name}</span>
              </h1>
                <>
                </>
              <p className="mt-2 text-sm text-gray-600">
                Let&apos;s make laundry day effortless.
              </p>
            </div>
            {/* Text Section at the Top */}
            <div className="mb-6 text-center">
              <p className="text-md text-left text-gray-700">
                Every wash earns you more! Collect loyalty points with each
                order <br /> and enjoy exclusive discounts.
              </p>
            </div>
            {/* Loyalty Progress */}
            <LoyaltyProgress />

            {/* Status Text */}
            <div className="flex flex-col items-center text-center">
              <p className="mb-2 text-base font-semibold text-gray-800">
                {dragProgress < 100
                  ? "You're making progress! 🎯"
                  : "Congratulations! You've reached the top tier! 🎉"}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {dragProgress < 100 ? (
                  <>
                    You&apos;ve earned{" "}
                    {Math.floor(
                      (dragProgress / 100) *
                        loyaltyPoints[loyaltyPoints.length - 1].points,
                    )}{" "}
                    points so far—just{" "}
                    <span className="font-semibold text-teal-1000">
                      {loyaltyPoints[loyaltyPoints.length - 1].points -
                        Math.floor(
                          (dragProgress / 100) *
                            loyaltyPoints[loyaltyPoints.length - 1].points,
                        )}{" "}
                      more points
                    </span>{" "}
                    to unlock{" "}
                    <span className="font-semibold text-teal-1000">
                      25% discount
                    </span>{" "}
                    on your next order.
                  </>
                ) : (
                  "You've unlocked the maximum 25% discount on your next order!"
                )}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {dragProgress < 100
                  ? "Keep going, your reward is within reach!"
                  : "Thank you for your loyalty!"}
              </p>
            </div>

            {/* Packages */}
            <Packages />
            
          </div>
          {showConfetti && (
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={200}
            />
          )}
           </main>
          </div>
        )
      : (
        <div className="flex h-screen items-center justify-center"></div>
      )}
       

        {/* Right Sidebar - Customer Support */}
        <aside className="fixed bottom-0 right-0 top-16 w-96 overflow-y-auto rounded-2xl border-l border-gray-300 bg-white p-6 shadow-lg lg:block hidden">
          <CustomerSupport />
        </aside>

        {/* Mobile Customer Support Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed bottom-20 right-4 z-50 lg:hidden bg-white shadow-lg rounded-full">
              <Phone className="h-6 w-6 text-teal" />
              <span className="sr-only">Toggle customer support</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto">
            <div className="pb-20">
              <CustomerSupport />
            </div>
          </SheetContent>
        </Sheet>
        {/* Notification Panel */}
        {isNotificationOpen && (
          <NotificationPanel />
        )}
      </div>
    </div>
  );
}

