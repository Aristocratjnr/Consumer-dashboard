import { Clock, DollarSign, Leaf } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div id="home" className="mt-10 flex">
      {/* Text */}
      <div className="items-start rounded-br-[60px] rounded-tr-[60px] bg-[#A1DEF7]">
        <div className="pr-[34rem]">
          <p className="mt-5 px-10 text-7xl font-extrabold">From Pile to</p>
          <p className="mt-5 px-10 text-7xl font-extrabold text-[#36C3E2]">
            Perfect
          </p>
        </div>

        {/* Description and Icons */}
        <div className="mt-10 flex">
          <div className="max-w-md">
            <p>you can use our services in any convenient way</p>
            <p>time to relax, lets us handle the dirty work!</p>
          </div>
          {/* ICONS */}
          <div className="ml-20">
            <Image
              src="/images/hero-icons.svg"
              alt="Service icons"
              width={300}
              height={150}
            />
          </div>
        </div>

      

      {/* Image */}
      <div className="ml-[70px] items-end">
        <Image
          src="/images/landing-image.png"
          width={400}
          height={400}
          alt="landing-image"
          className="h-[400px] w-[400px]"
        />
      </div>
    </div>
    </div>
  );
}