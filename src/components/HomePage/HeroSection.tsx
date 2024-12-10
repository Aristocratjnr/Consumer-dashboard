import Image from "next/image"
import { Clock, Leaf, DollarSign } from 'lucide-react'
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="min-h-screen">
       
      {/* Hero Section */}
      <div className="mt-10 flex flex-col lg:flex-row items-center">
        <div className="bg-[#EBF8FA] flex-1 min-h-[80vh] lg:min-h-[80vh] rounded-r-[50px] overflow-hidden lg:w-[95%]">
          <div className="container mx-auto px-6 lg:px-20 pt-16">
            <div className="max-w-xl">
              <h1 className="text-[4rem] leading-tight font-bold text-gray-800 mb-6">
                From Pile to{' '}
                <span className="text-[#41CEE5] block">Perfect</span>
              </h1>
              <p className="text-gray-600 text-lg mb-2">
                you can use our services in any convenient way
              </p>
              <p className="text-gray-500">
                time to relax, lets handle the dirty work!
              </p>
            </div>

            {/* Feature Icons */}
            <div className="flex items-center justify-end gap-12 mt-16">
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <Leaf className="h-6 w-6 text-[#41CEE5]" />
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Eco<br />Friendly</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <DollarSign className="h-6 w-6 text-[#41CEE5]" />
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Money<br />Saving</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <Clock className="h-6 w-6 text-[#41CEE5]" />
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Time<br />Saving</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center lg:pl-16">
          <div className="relative w-full max-w-lg aspect-square">
            <Image
              src="/images/landing-image.png"
              alt="Laundry Service"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

