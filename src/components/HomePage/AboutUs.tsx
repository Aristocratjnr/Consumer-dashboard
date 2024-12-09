import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between bg-gradient-to-b from-blue-50 to-white p-10">
      <div className="w-2/3">
        <h1 className="text-4xl font-extrabold">
          About <span className="text-[#36C3E2]">Us</span>
        </h1>
        <h2 className="mt-10 text-2xl font-bold">
          Connecting You to Quality Laundry Services, Anytime, Anywhere.
        </h2>
        <p className="mt-16">
          We connect busy consumers with trusted local laundry providers through
          an easy-to-use app, making laundry hassle-free and convenient. Whether
          you need on-demand pickup and delivery, customised laundry care, or
          reliable service from expert providers.
        </p>
        <div className="mt-20">
          <Image
            src="/images/check-icon.png"
            alt="Check icon"
            width={30}
            height={30}
            className="mr-5 inline-block"
          />
          <h3 className="inline-block text-2xl">2 Years of Experience</h3>
          <p className="ml-10 mt-2">
            We&aptos;ve become a trusted platform connecting consumers with
            reliable laundry providers. We&aptos;ve streamlined laundry
            services, offering convenience for customers and growth
            opportunities for providers.
          </p>
        </div>
        <div className="mt-20">
          <Image
            src="/images/check-icon.png"
            alt="Check icon"
            width={30}
            height={30}
            className="mr-5 inline-block"
          />
          <h3 className="inline-block text-2xl">10+ Service Providers</h3>
          <p className="ml-10 mt-2">
            We&aptos;ve partnered with over 10 trusted laundry service
            providers, delivering convenience and quality to our customers. Our
            platform has helped consumers access reliable, on-demand laundry
            services while supporting providers in growing their businesses.
          </p>
        </div>
      </div>

      <div className="mt-20 flex w-1/3 flex-col space-y-5 pl-10">
        <div>
          <Image
            src="/images/about-img1.png"
            alt="About image 1"
            width={250}
            height={300}
          />
        </div>

        <div>
          <Image
            src="/images/about-img2.png"
            alt="About image 2"
            width={250}
            height={300}
            className="mt-16"
          />
        </div>
      </div>

      <div className="mt-20 w-1/3 pl-10">
        <Image
          src="/images/about-img3.png"
          alt="About image 3"
          width={300}
          height={400}
          className="h-full w-full"
        />
      </div>
    </main>
  );
}
