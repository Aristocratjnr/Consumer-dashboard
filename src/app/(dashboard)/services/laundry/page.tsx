"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbBoxModel2 } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const Page: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("Basic Clean");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");

  return (
    <div
      className="relative flex h-screen w-full flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/laundry-service.png')`,
      }}
    >
      {/* Logo Positioned at Top-Left */}
      <div className="absolute top-0 left-0 z-10 flex items-center">
        <Image
          alt="TulaLaundry"
          className="-mr-0.5 h-10"
          src="/images/logo.png"
          width={40}
          height={40}
        />
        <Image
          src="/images/lund.png"
          alt="Tulaundry"
          className="h-5 items-start"
          width={100}
          height={20}
        />
      </div>

      {/* Centered Card Container */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6">
        <Card className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl shadow-lg">
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Left Side Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <CardHeader>
                <CardTitle className="pb-1 text-center text-lg text-teal">
                  What&apos;s Included In Our Laundry Service
                </CardTitle>
                <div className="flex justify-center space-x-4 pb-4 font-bold sm:space-x-8">
                  <div className="flex flex-col items-center text-teal">
                    <CardDescription className="text-sm">Washing</CardDescription>
                    <TbBoxModel2 size={24} />
                  </div>
                  <div className="flex flex-col items-center text-teal">
                    <CardDescription className="text-sm">Ironing</CardDescription>
                    <TbBoxModel2 size={24} />
                  </div>
                  <div className="flex flex-col items-center text-teal">
                    <CardDescription className="text-sm">Folding</CardDescription>
                    <TbBoxModel2 size={24} />
                  </div>
                </div>

                <h2 className="mb-4 text-sm">
                  Need more? Explore additional add-ons that suit your needs
                </h2>
                <div className="space-y-4">
                  {["Stain Treatment", "Anti-Allergy Treatment", "Color Care Wash", "Odor Removal"].map(
                    (addon) => (
                      <div key={addon} className="flex items-center space-x-3">
                        <Checkbox id={addon} />
                        <label
                          htmlFor={addon}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {addon}
                        </label>
                      </div>
                    )
                  )}
                </div>
                <h2 className="mt-6 mb-2 text-sm">
                  Have specific instructions or preferences? Leave a note to ensure we handle your
                  items just the way you like.
                </h2>
              </CardHeader>
              <CardFooter>
                <Textarea
                  placeholder="Leave your instructions here..."
                  className="w-full border-teal-600"
                />
              </CardFooter>
            </div>

            {/* Right Side Content */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-14">
              <CardContent>
                {/* Date and Time Section */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold">
                    Choose a convenient date and time for your laundry service
                  </h3>
                  <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                    <input
                      type="date"
                      className="w-full rounded border border-gray-300 bg-gray-200 px-3 py-1 text-sm"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <input
                      type="time"
                      className="w-full rounded border border-gray-300 bg-gray-200 px-3 py-1 text-sm"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    />
                  </div>
                </div>

                {/* Package Selection */}
                <div className="mb-6">
                  <h3 className="mb-1 text-sm font-semibold">
                    Try a new package today and enjoy exclusive discounts
                  </h3>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mt-2 w-[60] rounded border border-gray-300 bg-gray-200 px-4 py-1 text-sm"
                  >
                    <option value="Basic Clean">Basic Clean</option>
                    <option value="Deep Clean">Deep Clean</option>
                    <option value="Premium Care">Premium Care</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="mb-1 text-sm font-semibold">Choose Your Payment Method</h3>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { label: "Cash", value: "cash", Icon: GiTakeMyMoney },
                      { label: "Mobile Money", value: "mobile", Icon: MdOutlineMobileFriendly },
                    ].map(({ label, value, Icon }) => (
                      <label
                        key={value}
                        className="flex cursor-pointer flex-col items-center text-center"
                      >
                        <div className="flex items-center gap-2">
                          <Icon />
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                        <input
                          type="radio"
                          name="payment"
                          value={value}
                          checked={paymentMethod === value}
                          onChange={() => setPaymentMethod(value)}
                          className="mt-2"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delivery Method */}
                <div>
                  <h3 className="mb-1 text-sm font-semibold">Choose Delivery Option</h3>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { label: "Delivery", value: "delivery", Icon: TbTruckDelivery },
                      { label: "Pick-Up", value: "pickup", Icon: GiCardPickup },
                    ].map(({ label, value, Icon }) => (
                      <label
                        key={value}
                        className="flex cursor-pointer flex-col items-center text-center"
                      >
                        <div className="flex items-center gap-2">
                          <Icon />
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                        <input
                          type="radio"
                          name="delivery"
                          value={value}
                          checked={deliveryMethod === value}
                          onChange={() => setDeliveryMethod(value)}
                          className="mt-2"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-6 flex justify-end">
                <Button className="rounded-lg bg-teal px-10 py-2 text-lg text-white shadow-md">
                  Book
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Page;
