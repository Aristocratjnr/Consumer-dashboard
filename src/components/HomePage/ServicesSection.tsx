import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: "/images/services1.png",
      title: "Onboarding & Registration",
      description:
        "Easy sign-up process creates a seamless entry point for both laundry service providers and consumers, allowing them to quickly set up profiles, customise their preferences, and start using the platform as well as list their services and locations on the platform.",
    },
    {
      icon: "/images/services2.png",
      title: "Customizable Laundry Options",
      description:
        "Choose your preferred laundry service: wash & fold, dry cleaning, or specialty care. Add instructions for delicate items or specific detergents, all tailored to your needs.",
    },
    {
      icon: "/images/services3.png",
      title: "Order Management & Scheduling",
      description:
        "Easily manage incoming orders, set pickup and delivery schedules, and keep track of laundry status directly through the app.",
    },
    {
      icon: "/images/services4.png",
      title: "On-Demand Pickup & Delivery",
      description:
        "Conveniently schedule pickup and delivery for your laundry, right from your app. Get your clothes cleaned and delivered when it suits you.",
    },
    {
      icon: "/images/services5.png",
      title: "Payment Processing & Earnings Tracking",
      description:
        "Secure, seamless payment system and detailed reports on earnings, helping you manage finances and grow your business.",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our <span className="text-[#36C3E2]">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Expert care for your everyday clothing, ensuring freshness and
            cleanliness with every wash
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-3xl border-[#36C3E2] shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    width={70}
                    height={70}
                    alt={`${service.title} icon`}
                    className="h-16 w-16 text-sky-300"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
