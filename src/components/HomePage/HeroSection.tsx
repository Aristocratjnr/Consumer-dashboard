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

        {/* Description */}
        <div className="flex h-32 justify-between px-10">
          <div className="">
            <p>you can use our services in any convenient way</p>
            <p>time to relax, lets us handle the dirty work!</p>
          </div>
          {/* ICONS */}
          <div className="h-10 w-10 bg-blue-600"></div>
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
