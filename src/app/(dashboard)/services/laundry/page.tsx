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
      style={{
        backgroundImage: `url('/images/laundry-service.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden", // Prevent scrolling
        display: "flex", // Enable Flexbox
        flexDirection: "column",
      }}
    >
      {/* Logo Positioned at Top-Left */}
      <div
        style={{
          position: "absolute",
          top: "5px",
          left: "10px",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <Image
          alt="TulaLaundry"
          className="-mr-0.5 h-10"
          src="/images/logo.png"
          width={40}
          height={40}
        />
        <Image src="/images/lund.png" alt="Tulaundry" className="h-5" width={100} height={20}/>
      </div>

      {/* Centered Card Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Card
          className="mx-auto w-[100%] max-w-4xl overflow-hidden rounded-xl shadow-lg"
          style={{
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          <div className="flex flex-wrap pt-4 lg:flex-nowrap">
            {/* Left Side Content */}
            <div className="mt-2 w-full lg:w-1/2">
              <CardHeader>
                <CardTitle className="mt-0 pb-1 text-center text-lg text-teal">
                  What &apos; s Included In Our Laundry Service
                </CardTitle>
                <div className="flex justify-center space-x-8 pb-4 font-bold">
                  <div className="flex flex-col items-center text-teal">
                    <CardDescription className="text-sm leading-tight">
                      Washing
                    </CardDescription>
                    <TbBoxModel2 size={24} />
                  </div>
                  <div className="flex flex-col items-center text-teal">
                    <CardDescription className="text-sm leading-tight">
                      Ironing
                    </CardDescription>
                    <TbBoxModel2 size={24} />
                  </div>
                  <div className="flex flex-col items-center text-teal">
                    <CardDescription className="text-sm leading-tight">
                      Folding
                    </CardDescription>
                    <TbBoxModel2 size={24} />
                  </div>
                </div>

                <h2 className="mb-2 pb-2 text-sm">
                  Need more? Explore additional add-ons that suit your needs
                </h2>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="Stain Treatment" />
                    <label
                      htmlFor="Stain Treatment"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Stain Treatment
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="Anti-Allergy Treatment" />
                    <label
                      htmlFor="Anti-Allergy Treatment"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Anti-Allergy Treatment
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="Color Care Wash" />
                    <label
                      htmlFor="Color Care Wash"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Color Care Wash
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="Odor removal" />
                    <label
                      htmlFor="Odor removal"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Odor Removal
                    </label>
                  </div>
                  <h2 className="mb-2 text-sm">
                    Have specific instructions or preferences? Leave a note to
                    ensure we handle your items just the way you like.
                  </h2>
                </div>
              </CardHeader>
              <CardFooter className="flex items-start justify-between">
                <Textarea className="mb-0 w-full border-teal-600" />
              </CardFooter>
            </div>

            {/* Right Side Content */}
            <div className="mt-6 w-full lg:mt-14 lg:w-1/2">
              <CardContent>
                {/* Date and Time Section */}
                <div className="section mb-4 text-gray-700">
                  <h3 className="text-sm font-semibold">
                    Choose a convenient date and time for your laundry service
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <input
                        type="date"
                        className="mb-0 mt-2 w-full rounded border border-gray-300 bg-gray-200 px-3 py-1 text-sm"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="time"
                        className="mb-0 mt-2 w-full rounded border border-gray-300 bg-gray-200 px-8 py-1 text-sm"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Package Selection */}
                <div className="section mb-4">
                  <h3 className="mb-1 pb-0 text-sm font-semibold">
                    Try a new package today and enjoy exclusive discount
                  </h3>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mb-0 mt-2 w-[60] rounded border border-gray-300 bg-gray-200 px-4 py-1 text-sm"
                  >
                    <option value="Basic Clean">Basic Clean</option>
                    <option value="Deep Clean">Deep Clean</option>
                    <option value="Premium Care">Premium Care</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div className="section mb-2">
                  <h3 className="mb-1 pb-1 text-sm font-semibold">
                    Choose Your Payment Method
                  </h3>
                  <div className="flex items-center gap-8">
                    <label className="flex cursor-pointer flex-col items-center">
                      <div className="flex items-center gap-2">
                        <GiTakeMyMoney />
                        <span className="text-sm font-medium text-gray-700">
                          Cash
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                        className="mt-2"
                      />
                    </label>
                    <label className="flex cursor-pointer flex-col items-center">
                      <div className="flex items-center gap-2">
                        <MdOutlineMobileFriendly />
                        <span className="text-sm font-medium text-gray-700">
                          Mobile Money
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="payment"
                        value="mobile"
                        checked={paymentMethod === "mobile"}
                        onChange={() => setPaymentMethod("mobile")}
                        className="mt-2"
                      />
                    </label>
                  </div>
                </div>

                <div className="section mb-3">
                  <h3 className="mb-1 pb-1 text-sm font-semibold">
                    Let us know which you prefer
                  </h3>
                  <div className="flex items-center gap-8">
                    <label className="flex cursor-pointer flex-col items-center">
                      <div className="flex items-center gap-2">
                        <TbTruckDelivery />
                        <span className="text-sm font-medium text-gray-700">
                          Delivery
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="delivery"
                        value="delivery"
                        checked={deliveryMethod === "delivery"}
                        onChange={() => setDeliveryMethod("delivery")}
                        className="mt-2"
                      />
                    </label>
                    <label className="flex cursor-pointer flex-col items-center">
                      <div className="flex items-center gap-2">
                        <GiCardPickup />
                        <span className="text-sm font-medium text-gray-700">
                          Pick-Up
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="delivery"
                        value="pickup"
                        checked={deliveryMethod === "pickup"}
                        onChange={() => setDeliveryMethod("pickup")}
                        className="mt-2"
                      />
                    </label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="m-2 flex justify-end">
                <Button className="mb-4 rounded-lg bg-teal px-10 py-2 text-lg text-white shadow-md">
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
