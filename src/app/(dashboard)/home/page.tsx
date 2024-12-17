"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Bell, Home, Settings, Search, Calendar, Package, Briefcase, LogOut, Mail, Phone, HelpCircle, ChevronRight, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ReactConfetti from 'react-confetti';

export default function Dashboard() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(Array(4).fill(false));
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const loyaltyPoints = [
    { points: 100, status: 'completed' },
    { points: 200, status: 'completed' },
    { points: 300, status: 'completed' },
    { points: 400, status: 'in-progress' },
    { points: 500, status: 'locked' }
  ];

  const packages = [
    { id: 1, name: 'Fresh Start Bundle', price: '₵30', features: ['5 Kg Wash & Fold', '1 Kg Wash & Iron Service', 'A 10% discount coupon', 'Free delivery'], status: 'used' },
    { id: 2, name: 'Weekly Essentials', price: '₵60', features: ['10kg Wash & Fold Service', '10% discount coupon', '15% discount on all orders', 'Free delivery'], status: 'active' },
    { id: 3, name: 'Semester Saver', price: '₵120', features: ['Semester-long service', 'Priority processing', '15% discount on all orders', 'Free delivery'], status: 'active' }
  ];

  const faqs = [
    { question: 'How to place an order?', answer: 'You can place an order by selecting the services you need and clicking on the order button.' },
    { question: 'What services are available?', answer: 'We offer wash & fold, wash & iron, and special bundles.' },
    { question: 'How to track my order?', answer: 'You can track your order status from your dashboard.' },
    { question: 'Payment and refund policies.', answer: 'We accept various payment methods and offer refunds under certain conditions.' }
  ];

  const toggleFaq = (index: number) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current && progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const newProgress = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setDragProgress(newProgress);
      
        // Check if progress is 100% and trigger confetti
        if (newProgress === 100 && !showConfetti) {
          setShowConfetti(true);
          // Hide confetti after 5 seconds
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

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [showConfetti]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (elapsed > 1200) { // Update every 50ms for a slower, more stable movement
        lastTimestamp = timestamp;
        setDragProgress(prevProgress => {
          const newProgress = prevProgress + 0.1; // Increase by 0.1% each time
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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    const rect = progressBarRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setDragProgress(0); // Reset progress to 0
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    const rect = progressBarRef.current!.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    setDragProgress(0); // Reset progress to 0
  };

  return (
    <div className="min-h-screen bg-teal-20  text-gray-900">
      {/* Enhanced Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-2 py-1 backdrop-blur-sm bg-white/90">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
              </Link>
            </div><br/>

            <nav className="items-center">
            <button className="flex items-center">
                <span className="ml-28 text-lg font-semibold">Home</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover:bg-gray-100  bg-teal-20"
              >
                <Search className="h-5 w-5 text-gray-600 " />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="relative p-2 rounded-full hover:bg-gray-100 transition-all"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
              </button>

              <button className="p-2 rounded-full hover:bg-gray-100 transition-all">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>

              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-3 pl-4 border-l border-gray-200 bg-teal-50 text-black px-2 py-1 rounded-full"
                >
                  <img
                    src="/images/woman.png"
                    alt="Profile"
                    className="h-8 w-8 rounded-full ring-2 ring-teal-800"
                  />
                  <div className="flex flex-col items-start">
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
                    <Link href="/" passHref>
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
        </div>
      </header>


      <div className="pt-24 flex">
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-300 px-6 py-10 shadow-lg">
          <nav className="space-y-0.5 flex-grow"><br/>
          <Link href="/home" passHref>
            <button className="flex w-full rounded-md bg-teal-20 items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                <img src="/images/iconHome.png" alt="Home" className="mr-3 h-5 w-5 bg-teal-20" />
                Home
            </button>
        </Link><br />
        <Link href="/services" passHref>
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                <img src="/images/iconService.png" alt="Services" className="mr-3 h-5 w-5" />
                Services
            </button>
        </Link><br />
        <Link href="/calendar" passHref>
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                <img src="/images/iconCalendar.png" alt="Calendar" className="mr-3 h-5 w-5" />
                Calendar
            </button>
        </Link><br />
        <Link href="/bookings" passHref>
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground hover:bg-accent hover:text-accent-foreground dark:text-gray-300 dark:hover:bg-gray-700">
                <img src="/images/iconBooking.png" alt="Bookings" className="mr-3 h-5 w-5" />
                Bookings
            </button>
        </Link><br />
        <Link href="/tracking" passHref>
            <button className="flex w-full items-center px-4 py-3 text-muted-foreground">
                <img src="/images/iconTracking.png" alt="Tracking" className="mr-3 h-5 w-5" />
                Tracking
            </button>
        </Link>
          </nav>
          <button className="absolute bottom-8 left-4 right-4 flex items-center justify-between px-4 py-3 text-red-800 hover:bg-red-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Log out</span>
            </div>
            <ChevronRight className="h-5 w-5" />
          </button>
        </aside>

        <main className="flex-1 ml-64 mr-96 px-4 py-2">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h1 className="text-4xl font-semi-bold">Welcome <span className="text-teal">Back!</span></h1>
              <p className="text-gray-600 mt-2 text-sm">Let's make laundry day effortless.</p>
            </div>
            {/* Text Section at the Top */}
            <div className="text-center mb-6">
                <p className="text-gray-700 text-md text-left">
                  Every wash earns you more! Collect loyalty points with each order <br/> and enjoy exclusive discounts.
                </p>
              </div>
            {/* Progress Section */}
            <div className="rounded-3xl p-6 md:p-10 mb-10 shadow-lg bg-white">
              

              {/* Progress Section with Numbered Circles */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
                {[1, 2, 3, 4, 5].map((step, index) => {
                  const isCompleted = (dragProgress / 100) * loyaltyPoints.length > index;
                  const isInProgress = (dragProgress / 100) * loyaltyPoints.length > index - 1 && (dragProgress / 100) * loyaltyPoints.length < index;
                  const outerCircleClass = isCompleted
                    ? "border-teal-1000"
                    : isInProgress
                    ? "border-teal-1000"
                    : "border-gray-300";
                  const innerCircleClass = isCompleted
                    ? "bg-teal-1000 text-white"
                    : isInProgress
                    ? "bg-teal-1000 text-white"
                    : "bg-gray-200 text-gray-400";
                  return (
                    <div key={index} className="relative flex items-center justify-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 ${outerCircleClass} flex items-center justify-center`}
                      >
                        <div
                          className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center ${innerCircleClass}`}
                        >
                          <span className="text-sm md:text-lg font-bold">{step}</span>
                        </div>
                      </div>
                      {index < 4 && (
                        <div className={`hidden md:block h-1 w-8 ${isCompleted ? 'bg-teal-1000' : 'bg-gray-300'} absolute left-full top-1/2 transform -translate-y-1/2`}></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Range Button (Progress Bar) */}
            <div
              className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-6 cursor-pointer"
              ref={progressBarRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              <div
                className="absolute h-full bg-teal-1000 transition-all duration-300 ease-in-out"
                style={{ width: `${dragProgress}%` }}
              ></div>
              <div
                className="absolute top-1/2 w-6 h-6 bg-white border-4 border-teal-1000 rounded-full transform -translate-y-1/2 transition-all duration-300 ease-in-out"
                style={{ left: `calc(${dragProgress}% - 12px)` }}
              ></div>
            </div>
            
              {/* Texts Below Progress Bar */}
              <div className="flex justify-between text-xs text-gray-600 mb-4">
                {loyaltyPoints.map((point, index) => (
                  <span key={index}>{point.points} pts</span>
                ))}
              </div>
              </div>

              {/* Status Text */}
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-800 font-semibold text-base mb-2">
                  {dragProgress < 100 ? "You're making progress! 🎯" : "Congratulations! You've reached the top tier! 🎉"}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {dragProgress < 100 ? (
                    <>
                      You've earned {Math.floor((dragProgress / 100) * loyaltyPoints[loyaltyPoints.length - 1].points)} points so far—just{" "}
                      <span className="font-semibold text-teal-1000">{loyaltyPoints[loyaltyPoints.length - 1].points - Math.floor((dragProgress / 100) * loyaltyPoints[loyaltyPoints.length - 1].points)} more points</span> to unlock{" "}
                      <span className="font-semibold text-teal-1000">25% discount</span> on your next order.
                    </>
                  ) : (
                    "You've unlocked the maximum 25% discount on your next order!"
                  )}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {dragProgress < 100 ? "Keep going, your reward is within reach!" : "Thank you for your loyalty!"}
                </p>
              </div>
          

            {/* Packages */}
            <div>
              <h2 className="text-teal text-2xl font-semi-bold mb-6 ">Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="bg-gradient-to-br p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow border-2 border-teal-1000">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semi-bold text-teal">{pkg.name}</h3>
                        <span className="text-xl text-teal mt-1 block">{pkg.price}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-45 mt-6 py-1.5 px-4 rounded-full font-semi-bold text-sm transition-colors ${
                        pkg.status === 'used'
                          ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                          : 'bg-teal-1000 text-white hover:bg-teal-600'
                      }`}
                      disabled={pkg.status === 'used'}
                    >
                      {pkg.status === 'used' ? 'Used' : 'Use Again'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
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
        {/* Right Sidebar - Customer Support */}
        <aside className="fixed right-0 top-16 bottom-0 w-96 bg-white border-l border-gray-300 p-6 overflow-y-auto shadow-lg rounded-2xl">
          {/* Contact Options */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <h3 className="text-base font-semibold text-teal-1000 mb-4">Contact Options</h3>
              <span className="text-sm text-teal-1000 font-semi-bold ml-auto">CM 309678</span>
            </div>
            <div className="border-b-2 border-dotted border-teal mb-4"></div>
            <div className="space-y-4">
              {/* Phone Support */}
              <div className="flex items-center justify-between p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <Phone className="h-4 w-4 text-teal-1000" />
                  </div>
                  <span className="text-sm font-semi-bold text-teal-1000">Phone Support</span>
                </div>
                <span className="text-sm text-gray-700 font-semi-bold">+233 55 444 7777</span>
              </div>
              {/* Email Support */}
              <div className="flex items-center justify-between p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <Mail className="h-4 w-4 text-teal-1000" />
                  </div>
                  <span className="text-sm font-semi-bold text-teal-1000 mr-2">Email Support</span>
                </div>
                <span className="text-sm text-gray-700 font-semi-bold">tulaundry@gmail.com</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-8">
            <h3 className="text-base font-semi-bold text-teal-1000 mb-4">FAQs</h3>
            <div className="border-b-2 border-dotted border-teal mb-4"></div>
            <ul className="space-y-3">
              {faqs.map((faq, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex items-start">
                    <span className="w-2.5 h-2.5 mt-1.5 bg-teal-1000 rounded-full flex-shrink-0"></span>
                    <Link
                      href="#"
                      className="ml-4 text-sm text-gray-700 hover:text-teal-600 font-semi-bold transition"
                    >
                      {faq.question}
                    </Link>
                  </div>
                  {/* Answer Text */}
                  <p className="ml-10 text-xs text-gray-600">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div><br/>

          {/* Request Assistance Form */}
          <div>
            <h3 className="text-base font-semibold text-teal-1000 mb-4">
              Request Assistance Form
            </h3>
            <div className="border-b-2 border-dotted border-teal mb-4"></div>
            <form className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm text-gray-600 font-medium mb-1"></label>
                <input
                  type="text"
                  className="w-full border-b border-teal-1000 bg-transparent focus:outline-none focus:border-teal-1000 text-sm "
                  placeholder="Name"
                />
              </div>
              {/* Contact Info Field */}
              <div className="relative">
                <label className="block text-sm text-gray-600 font-medium mb-1"></label>
                <input
                  type="text"
                  className="w-full border-b border-teal-1000 bg-transparent focus:outline-none focus:border-teal-1000 text-sm "
                  placeholder="Contact Info"
                />
              </div>
              {/* Order ID Field */}
              <div className="relative">
                <label className="block text-sm text-gray-600 font-medium mb-1"></label>
                <input
                  type="text"
                  className="w-full border-b  border-teal-1000 bg-transparent focus:outline-none focus:border-teal-1000 text-sm "
                  placeholder="Order ID"
                />
              </div>
              {/* Description Field */}
              <div className="relative">
                <label className="block text-xs text-gray-600 font-semi-bold mb-1"></label>
                <textarea
                  className="w-full h-24 border  border-gray-400 bg-transparent rounded-lg focus:outline-none focus:border-teal-1000 text-sm p-2"
                  placeholder="Description of the problem"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 border-b border-teal hover:bg-teal border text-black  text-sm font-semi-bold rounded-full transition shadow-md inline-block"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </aside>
        {/* Notification Panel */}
        {isNotificationOpen && (
          <div className="fixed top-20 right-4 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Notifications</h3>
                <button className="text-sm text-teal-1000 hover:text-teal-1000">Mark all as read</button>
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {[
                { title: 'Order Status Update', message: 'Your order #2458 is ready for pickup', time: '2 hours ago', unread: true },
                { title: 'Special Offer', message: 'Get 20% off on your next order!', time: '1 day ago', unread: false }
              ].map((notification, index) => (
                <div key={index} className={`p-4 hover:bg-gray-50 cursor-pointer ${notification.unread ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 mt-2 rounded-full ${notification.unread ? 'bg-teal-600' : 'bg-gray-300'}`} />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button className="text-sm text-center w-full text-teal-900 hover:text-teal-1000">View all notifications</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

