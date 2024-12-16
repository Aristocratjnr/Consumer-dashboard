import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <div>
      <div className="mx-16 my-20">
        <p className="text-4xl font-bold">
          Our <span className="text-[#36C3E2]">Services</span>
        </p>
        <p className="mt-3">
          Expert care for your everyday clothing, ensuring freshness and <br />
          cleanliness with every wash
        </p>
        {/* Card Grid */}
        <div className="mt-8 grid grid-cols-3 gap-8">
          {/* First Card */}
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/services1.png"
                  width={70}
                  height={70}
                  alt="icon"
                  className="h-16 w-16 text-sky-300"
                />
                <h2 className="text-xl font-semibold">
                  Onboarding & Registration
                </h2>
              </div>
              <p className="text-gray-600">
                Easy sign-up process creates a seamless entry point for both
                laundry service providers and consumers, allowing them to
                quickly set up profiles, customise their preferences, and start
                using the platform as well as list their services and locations
                on the platform.
              </p>
            </CardContent>
          </Card>

          {/* Second Card */}
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/services2.png"
                  width={100}
                  height={100}
                  alt="icon"
                  className="h-16 w-16 text-sky-300"
                />
                <h2 className="text-xl font-semibold">
                  Customizable Laundry Options
                </h2>
              </div>
              <p className="text-gray-600">
                Choose your preferred laundry service: wash & fold, dry
                cleaning, or specialty care. Add instructions for delicate items
                or specific detergents, all tailored to your needs.
              </p>
            </CardContent>
          </Card>

          {/* Third Card */}
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/services3.png"
                  alt="icon"
                  width={70}
                  height={70}
                  className="h-16 w-16 text-sky-300"
                />
                <h2 className="text-xl font-semibold">
                  Order Management & Scheduling
                </h2>
              </div>
              <p className="text-gray-600">
                Easily manage incoming orders, set pickup and delivery
                schedules, and keep track of laundry status directly through the
                app.
              </p>
            </CardContent>
          </Card>

          {/* Fourth Card */}
          <Card className="col-span-1 rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/services4.png"
                  alt="icon"
                  width={70}
                  height={70}
                  className="h-16 w-16 text-sky-300"
                />
                <h2 className="text-xl font-semibold">
                  On-Demand Pickup & Delivery
                </h2>
              </div>
              <p className="text-gray-600">
                Conveniently schedule pickup and delivery for your laundry,
                right from your app. Get your clothes cleaned and delivered when
                it suits you.
              </p>
            </CardContent>
          </Card>

          {/* Fifth Card */}
          <Card className="col-span-1 rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/services5.png"
                  width={70}
                  height={70}
                  alt="icon"
                  className="h-16 w-16 text-sky-300"
                />
                <h2 className="text-xl font-semibold">
                  Payment Processing & Earnings Tracking
                </h2>
              </div>
              <p className="text-gray-600">
                Secure, seamless payment system and detailed reports on
                earnings, helping you manage finances and grow your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
