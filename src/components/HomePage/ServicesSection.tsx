import { UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  return (
    <div>
      <div className="m-8">
        <p className="text-4xl font-bold">
          Our <span className="text-blue-400">Services</span>
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
                <UserPlus className="h-8 w-8 text-sky-300" />
                <h2 className="text-xl font-semibold">
                  Onboarding & Registration
                </h2>
              </div>
              <p className="text-gray-600">
                Easy sign-up process creates a seamless entry point for both
                laundry service providers and consumers
              </p>
            </CardContent>
          </Card>

          {/* Second Card */}
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-sky-300" />
                <h2 className="text-xl font-semibold">
                  Onboarding & Registration
                </h2>
              </div>
              <p className="text-gray-600">
                Easy sign-up process creates a seamless entry point for both
                laundry service providers and consumers
              </p>
            </CardContent>
          </Card>

          {/* Third Card */}
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-sky-300" />
                <h2 className="text-xl font-semibold">
                  Onboarding & Registration
                </h2>
              </div>
              <p className="text-gray-600">
                Easy sign-up process creates a seamless entry point for both
                laundry service providers and consumers
              </p>
            </CardContent>
          </Card>

          {/* Fourth Card */}
          <Card className="col-span-1 rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-sky-300" />
                <h2 className="text-xl font-semibold">
                  Onboarding & Registration
                </h2>
              </div>
              <p className="text-gray-600">
                Easy sign-up process creates a seamless entry point for both
                laundry service providers and consumers
              </p>
            </CardContent>
          </Card>

          {/* Fifth Card */}
          <Card className="col-span-1 rounded-3xl">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-sky-300" />
                <h2 className="text-xl font-semibold">
                  Onboarding & Registration
                </h2>
              </div>
              <p className="text-gray-600">
                Easy sign-up process creates a seamless entry point for both
                laundry service providers and consumers
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
