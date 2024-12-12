import { Clock, DollarSign, Leaf } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div id="home" className="mt-10 flex">
      {/* Text */}
      <div className="items-start rounded-br-[60px] rounded-tr-[60px]  bg-[#EBF8FA]">
        <div className="pr-[34rem]">
          <p className="mt-5 px-10 text-7xl font-extrabold">From Pile to</p>
          <p className="mt-5 px-10 text-7xl font-extrabold text-[#36C3E2]">
            Perfect
          </p>
        </div>

        {/* Description */}
        <div className="flex h-32 justify-between px-10">
          <div className="">
            <p>you can use our services in any convenient way</p>
            <p>time to relax, lets us handle the dirty work!</p>
          </div>
          {/* Feature Icons */}
          <div className="flex items-center justify-end gap-12 mt-14">
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                  <Leaf className="h-6 w-6 text-[#41CEE5]" />
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Eco<br />Friendly</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center  shadow-sm">
                  <DollarSign className="h-6 w-6 text-[#41CEE5]" />
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Money<br />Saving</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center  shadow-sm">
                  <Clock className="h-6 w-6 text-[#41CEE5]" />
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">Time<br />Saving</p>
              </div>
            </div>
          </div>
        </div>

      

      {/* Image */}
      <div className="ml-[70px] items-end">
        <Image
          src="/images/landing-image.png"
          width={382}
          height={382}
          alt="landing-image"
        />
      </div>
    </div>
  );
}