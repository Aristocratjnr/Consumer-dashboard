import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ProcessText() {
  const features = [
    {
      number: "01",
      title: "Sign Up",
      Link: "/auth/SignUp",
      description:
        "Seamless registration process for laundry service providers to connect with consumers in their local area, expanding their reach and growing their customer base effortlessly.",
    },
    {
      number: "02",
      title: "Set Pricing",
      description:
        "Simple and transparent pricing setup for laundry service providers, enabling them to define competitive rates and ensure clear communication with consumers for a seamless experience",
    },
    {
      number: "03",
      title: "Receive Orders",
      description:
        "Effortless order management for laundry service providers, allowing them to receive and track consumer orders in real time, ensuring smooth operations and timely deliveries.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:gap-8">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              <span className="text-sky-400">Grow</span> Your Laundry Business
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              Connect with local customers and manage orders effortlessly with
              our easy-to-use platform.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.number}
                className="relative overflow-hidden border-none shadow-md"
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-200 text-lg font-semibold text-sky-400">
                      {feature.number}
                    </div>
                    <h3 className="border-b-2 border-[#36C3E2] text-2xl font-semibold text-sky-400">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
