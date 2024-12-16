import Image from "next/image"

export default function HeroSection() {
  return (
    <div id="home" className="mt-10 flex justify-between items-start">
      {/* Text and Icons Section */}
      <div className="rounded-[40px] bg-[#E3F6FC] py-24 flex-grow">
        <div>
          <div className="pr-24">
            <h1 className="px-10 text-8xl  text-gray-700 font-extrabold leading-tight">
              From Pile to{" "}
              <span className="text-[#36C3E2] block">Perfect</span>
            </h1>
          </div>

          {/* Description and Icons */}
          <div className="mt-8 px-10 flex items-center justify-between">
            <div className="text-gray-600 space-y-1">
              <p className="text-black text-medium ">you can use our services in any convenient way</p>
              <p>time to relax, let us handle the dirty work!</p>
            </div>
            <div className="ml-4">
              <Image
                src="/images/hero-icons.svg"
                alt="Service icons"
                width={260}
                height={96}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="ml-6">
        <div className="bg-[#36C3E2] rounded-[40px] overflow-hidden">
          <Image
            src="/images/landing-image.png"
            width={400}
            height={800}
            alt="Person holding laundry basket"
            className="h-[600px] w-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

