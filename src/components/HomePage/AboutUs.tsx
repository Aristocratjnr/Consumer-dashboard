import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white p-4 lg:flex-row lg:justify-between lg:p-10">
      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl font-extrabold lg:text-4xl">
          About <span className="text-[#36C3E2]">Us</span>
        </h1>
        <h2 className="mt-6 text-xl font-bold lg:mt-10 lg:text-2xl">
          Connecting You to Quality Laundry Services, Anytime, Anywhere.
        </h2>
        <p className="mt-8 lg:mt-16">
          We connect busy consumers with trusted local laundry providers through
          an easy-to-use app, making laundry hassle-free and convenient. Whether
          you need on-demand pickup and delivery, customised laundry care, or
          reliable service from expert providers.
        </p>
        <div className="mt-12 lg:mt-20">
          <Image
            src="/images/check-icon.png"
            alt="Check icon"
            width={30}
            height={30}
            className="mr-3 inline-block lg:mr-5"
          />
          <h3 className="inline-block text-xl lg:text-2xl">
            2 Years of Experience
          </h3>
          <p className="ml-8 mt-2 lg:ml-10">
            We&apos;ve become a trusted platform connecting consumers with
            reliable laundry providers. We&apos;ve streamlined laundry services,
            offering convenience for customers and growth opportunities for
            providers.
          </p>
        </div>
        <div className="mt-12 lg:mt-20">
          <Image
            src="/images/check-icon.png"
            alt="Check icon"
            width={30}
            height={30}
            className="mr-3 inline-block lg:mr-5"
          />
          <h3 className="inline-block text-xl lg:text-2xl">
            10+ Service Providers
          </h3>
          <p className="ml-8 mt-2 lg:ml-10">
            We&apos;ve partnered with over 10 trusted laundry service providers,
            delivering convenience and quality to our customers. Our platform
            has helped consumers access reliable, on-demand laundry services
            while supporting providers in growing their businesses.
          </p>
        </div>
      </div>
      <div className="mt-20 hidden w-full flex-col space-y-5 lg:flex lg:w-1/3 lg:pl-10">
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
      <div className="mt-20 hidden w-full lg:block lg:w-1/3 lg:pl-10">
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
