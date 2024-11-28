    "use client"
    import React, { useState } from 'react';
    import Link from 'next/link';
    import { Bell, Home, Settings, Search, Calendar, Package, LogOut, Mail, Phone, HelpCircle, ChevronRight, User, MapPin } from 'lucide-react';

    export default function Dashboard() {
      const [isNotificationOpen, setIsNotificationOpen] = useState(false);
      const [faqOpen, setFaqOpen] = useState(Array(4).fill(false));
      const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

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
        { id: 2, name: 'Weekly Essentials', price: '₵60', features: ['Free pickup and delivery for the first order', '10% discount coupon', 'Free delivery'], status: 'active' },
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

      return (
        <div className="min-h-screen bg-white text-gray-900">
          <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-md" >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-1">
                  <img src="/images/logo.png" alt="Tulaundry Logo" className="h-8 -mr-0.5" />
                  <img src="/images/lund.png" alt="Tulaundry" className="h-5" />
                </div>
                <nav className="flex items-center space-x-6">
                <button className="flex items-center space-x-2">
                <span className="bg-blue-300 hover:bg-teal-200 rounded-full p-2 transition-colors">
                  <Home className="h-5 w-5 text-teal-1000" />
                </span>
                <span className="font-bold">Home</span>
              </button>
                  {/* Additional nav items */}
                </nav>
              </div>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="flex items-center space-x-4">
                  <button 
                    className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  >
                    <Bell className="h-5 w-5 text-gray-600" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Settings className="h-5 w-5 text-gray-600" />
                  </button>
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
                    <span className="text-sm font-bold">Sandra</span>
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
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      onClick={() => console.log("Logging out...")}
                    >
                      <LogOut className="inline-block w-4 h-4 mr-2 text-red-500" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
                </div>
              </div>
            </div>
          </header>

          <div className="pt-20 flex">
            <aside className="fixed left-0 top-20 bottom-0 w-64 bg-white border-r border-gray-300 px-6 py-8 shadow-lg">
            <nav className="space-y-5">
            {[
              { icon: Home, label: 'Home', active: true, href: '/' },
              { icon: Package, label: 'Services', active: false, href: '/' }, 
              { icon: Calendar, label: 'Calendar', active: false, href: '/calendar' }, 
              { icon: Mail, label: 'Booking', active: false, href: '/bookings' }, 
              { icon: MapPin, label: 'Tracking', active: false, href: '/tracking' } 
            ].map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <button
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    item.active 
                      ? 'bg-blue-50 text-teal-600 shadow' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </Link>
            ))}
          </nav>
              <button className="absolute bottom-8 left-4 right-4 flex items-center justify-between px-4 py-3 text-red-800 hover:bg-red-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Log out</span>
                </div>
                <ChevronRight className="h-5 w-5" />
              </button>
            </aside>

            <main className="flex-1 ml-64 mr-96 px-8 py-6">
              <div className="max-w-4xl">
                <div className="mb-8">
                  <h1 className="text-4xl font-semi-bold">Welcome <span className="text-teal">Back!</span></h1>
                  <p className="text-gray-600 mt-2">Let's make laundry day effortless.</p>
                </div>
                <div className="rounded-3xl p-10 mb-10 shadow-lg">
      {/* Text Section at the Top */}
      <div className="text-center mb-6">
        <p className="text-gray-700 text-sm leading-relaxed">
          Every wash earns you more! Collect loyalty points with each order and enjoy exclusive discounts.
        </p>
      </div>

      {/* Progress Section with Numbered Circles */}
      <div className="flex flex-row items-center justify-center space-x-6 mb-4">
        {[1, 2, 3, 4, 5].map((step, index) => {
          const isCompleted = index < 2; // Mark steps 1 and 2 as completed
          const outerCircleClass = isCompleted
            ? "border-teal-1000"
            : "border-teal-1000";
          const innerCircleClass = isCompleted
            ? "bg-teal-1000 text-white"
            : "bg-gray-200 text-gray-400";
          return (
            <div key={index} className="relative flex items-center justify-center">
              {/* Outer Border Circle */}
              <div
                className={`w-16 h-16 rounded-full border-4 ${outerCircleClass} flex items-center justify-center`}
              >
                {/* Inner Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${innerCircleClass}`}
                >
                  <span className="text-lg font-bold">{step}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Range Button (Progress Bar) */}
      <div className="relative w-full mb-6">
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="absolute h-full bg-teal-1000" style={{ width: '50.67%' }}></div>
        </div>
      </div>

      {/* Texts Below Progress Bar */}
      <div className="flex justify-between text-xs text-gray-600 mb-2">
        <span>0 pts</span>
        <span>10 pts</span>
        <span>15 pts</span>
      </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="text-gray-800 font-semi-bold text-base mb-2">
          You're almost there🎯!
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          You've booked 2 times  so far—just{" "}
          <span>3 more bookings</span> to unlock{" "}
          <span className="font-semi-bold text-teal-1000">25 loyalty points</span> and enjoy a{" "}
          <span className="font-semi-bold text-teal-1000">25% discount</span> on your next order.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Keep going, your reward is within reach.
        </p>
      </div><br/>
  

                {/* Packages */}
                <div>
                  <h2 className="text-teal text-2xl font-semibold mb-6">Packages</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                      <div key={pkg.id} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-teal text-xl">{pkg.name}</h3>
                            <span className="text-2xl font-bold text-teal mt-1 block">{pkg.price}</span>
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
                          className={`w-full mt-6 py-2.5 rounded-lg font-medium transition-colors ${pkg.status === 'used' ? 'bg-gray-100 text-gray-600 cursor-not-allowed' : 'bg-teal text-white hover:bg-teal-500'}`}
                          disabled={pkg.status === 'used'}
                        >
                          {pkg.status === 'used' ? 'Used' : 'Use Again'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
                  {/* Right Sidebar - Customer Support */}
    <aside className="fixed right-0 top-20 bottom-0 w-96 bg-white border-l border-gray-300 p-6 overflow-y-auto shadow-lg rounded-2xl">

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
              <Phone className="h-6 w-6 text-teal-1000" />
            </div>
            <span className="text-sm font-semi-bold text-teal-1000">Phone Support</span>
          </div>
          <span className="text-sm text-gray-700 font-semi-bold">+233 55 444 7777</span>
        </div>
        {/* Email Support */}
        <div className="flex items-center justify-between p-4 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full shadow-md">
              <Mail className="h-6 w-6 text-teal-1000" />
            </div>
            <span className="text-sm font-semi-bold text-teal-1000 w-1">Email Support</span>
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
    </div>

    <div className="border-b-2 border-dotted border-teal mb-4"></div>

    {/* Request Assistance Form */}
    <div>
      <h3 className="text-base font-semibold text-teal-1000 mb-4">
        Request Assistance Form
      </h3>
      <form className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1"></label>
          <input
            type="text"
            className="w-full border-b border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-teal-1000 text-sm py-1 rounded-lg"
            placeholder="Name"
          />
        </div>
        {/* Contact Info Field */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1"></label>
          <input
            type="text"
            className="w-full border-b border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-teal-1000 text-sm py-1 rounded-lg"
            placeholder="Contact Info"
          />
        </div>
        {/* Order ID Field */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1"></label>
          <input
            type="text"
            className="w-full border-b border-dotted border-gray-400 bg-transparent focus:outline-none focus:border-teal-1000 text-sm py-1 rounded-lg"
            placeholder="Order ID"
          />
        </div>
        {/* Description Field */}
        <div className="relative">
          <label className="block text-sm text-gray-600 font-medium mb-1"></label>
          <textarea
            className="w-full h-24 border border-dotted border-gray-400 bg-transparent rounded-lg focus:outline-none focus:border-teal-1000 text-sm p-2"
            placeholder="Description of the problem"
          ></textarea>
        </div>
        {/* Submit Request Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-teal-1000 text-white text-sm font-medium rounded-full hover:bg-teal-1000 transition shadow-md"
          >
            Submit Request
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