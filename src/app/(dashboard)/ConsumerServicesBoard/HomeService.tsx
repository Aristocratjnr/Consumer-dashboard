'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { WashingMachine, Calendar, Clock, Package, Wallet2, Truck } from 'lucide-react'

type PaymentMethod = 'cash' | 'mobile';
type DeliveryMethod = 'delivery' | 'pickup';

export default function BookingForm() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [selectedDelivery, setSelectedDelivery] = useState<DeliveryMethod | null>(null);

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method);
  };

  const handleDeliverySelect = (method: DeliveryMethod) => {
    setSelectedDelivery(method);
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/sign.png")' }}>
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 flex items-start justify-between min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        
        <img src="/images/lund.png" alt="Company Logo" className="w-24 ml-4" />
        
        <Card className="w-full max-w-5xl mx-auto bg-white">
          <CardContent className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Services Grid */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-medium text-[#0066cc] mb-4">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { title: "Curtain & Drapery\nCleaning", icon: WashingMachine },
                    { title: "Rug & Carpet\nCleaning", icon: WashingMachine },
                    { title: "Upholstery\nCleaning", icon: WashingMachine },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 border rounded-lg"
                    >
                      <service.icon className="w-8 h-8 text-[#0066cc] mb-2" />
                      <p className="whitespace-pre-line">{service.title}</p>
                    </div>
                  ))}
                </div>

                {/* Additional Services */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#0066cc] mb-2">Additional Services</h3>
                  <p className="text-sm text-gray-600 mb-4">Need more? Explore additional add-ons that suit your needs</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Odor Removal",
                      "Deodorization Services",
                      "Stain Guard Treatment",
                      "Comforter & Bedding Cleaning",
                    ].map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`service-${index}`} />
                        <label
                          htmlFor={`service-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <h3 className="text-lg font-medium text-[#0066cc] mb-2">Special Instructions</h3>
                  <p className="text-sm text-gray-600 mb-2">Have specific instructions or preferences? Leave a note to ensure we handle your items just the way you like</p>
                  <Textarea className="min-h-[100px]" placeholder="Type your instructions here..." />
                </div>
              </div>

              {/* Payment and Delivery Preference */}
              <div>
                {/* Payment Method */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#0066cc] mb-2">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${selectedPayment === 'cash' ? 'bg-gray-200' : 'hover:bg-gray-50'}`} 
                      onClick={() => handlePaymentSelect('cash')}
                    >
                      <Wallet2 className="w-4 h-4 mr-2" />
                      <span>Cash</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${selectedPayment === 'mobile' ? 'bg-gray-200' : 'hover:bg-gray-50'}`} 
                      onClick={() => handlePaymentSelect('mobile')}
                    >
                      <Wallet2 className="w-4 h-4 mr-2" />
                      <span>Mobile Money</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Preference */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#0066cc] mb-2">Delivery Preference</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${selectedDelivery === 'delivery' ? 'bg-gray-200' : 'hover:bg-gray-50'}`} 
                      onClick={() => handleDeliverySelect('delivery')}
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      <span>Delivery</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer ${selectedDelivery === 'pickup' ? 'bg-gray-200' : 'hover:bg-gray-50'}`} 
                      onClick={() => handleDeliverySelect('pickup')}
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      <span>Pick-Up</span>
                    </div>
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#0066cc] mb-2">Schedule Service</h3>
                  <p className="text-sm mb-4">Choose a convenient date and time for your laundry service</p>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <Calendar className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <Clock className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Package Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#0066cc] mb-2">Choose Package</h3>
                  <p className="text-sm mb-4">Try a new package today and enjoy exclusive discount</p>
                  <Select>
                    <SelectTrigger>
                      <Package className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Basic Clean" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Clean</SelectItem>
                      <SelectItem value="premium">Premium Clean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Book Button */}
                <Button className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}