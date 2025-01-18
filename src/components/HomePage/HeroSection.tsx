import Image from "next/image";

export default function HeroSection() {
  return (
    <div id="home" className="mt-4 px-4 md:mt-10 md:px-0">
      <div className="flex flex-col items-start justify-between md:flex-row">
        {/* Text and Icons Section */}
        <div className="w-full rounded-[20px] bg-[#E3F6FC] py-12 md:w-2/3 md:rounded-[40px] md:py-24">
          <div className="px-6 md:px-10">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-700 md:text-6xl lg:text-8xl">
              From Pile to <span className="block text-[#36C3E2]">Perfect</span>
            </h1>
          </div>

          {/* Description and Icons */}
          <div className="mt-6 flex flex-col items-start justify-between px-6 md:mt-8 md:flex-row md:items-center md:px-10">
            <div className="mb-4 space-y-1 text-gray-600 md:mb-0">
              <p className="text-sm text-black md:text-base">
                You can use our services in any convenient way
              </p>
              <p className="text-sm md:text-base">
                Time to relax, let us handle the dirty work!
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Image
                src="/images/hero-icons.svg"
                alt="Service icons"
                width={260}
                height={96}
                className="h-auto w-full md:w-[260px]"
              />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="ml-0 mt-4 hidden md:ml-2 md:mt-0 md:block md:w-1/3">
          <div className="h-[400px] overflow-hidden rounded-[20px] bg-[#36C3E2] md:h-[600px] md:rounded-[40px]">
            <Image
              src="/images/landing-image.png"
              width={400}
              height={800}
              alt="Person holding laundry basket"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
