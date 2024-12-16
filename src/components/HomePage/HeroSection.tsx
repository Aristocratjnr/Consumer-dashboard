import Image from "next/image";

export default function HeroSection() {
  return (
    <div id="home" className="mt-10 flex">
      {/* Text */}
      <div className="rounded-br-[60px] rounded-tr-[60px] bg-[#A1DEF7] p-10">
        <div className="pr-[18rem]">
          <h1 className="text-7xl font-extrabold">
            From Pile to <span className="text-[#36C3E2]">Perfect</span>
          </h1>
        </div>

        {/* Description and Icons */}
        <div className="mt-10 flex">
          <div className="max-w-md">
            <p>you can use our services in any convenient way</p>
            <p>time to relax, lets us handle the dirty work!</p>
          </div>
          {/* ICONS */}
          <div className="ml-[50px] items-end">
            <Image
              src="/images/hero-icons.svg"
              alt="Service icons"
              width={300}
              height={150}
            />
          </div>
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
  );
}
