import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Car, Package, Shirt, Wind, Clock, FoldVertical } from "lucide-react";

export default function LaundryService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-white rounded-lg shadow-md">
      {/* Title and Header Section */}
      <header className="flex items-center mb-8">
        <Image
          src="/images/logo.png"
          alt="Company Logo"
          width={50}
          height={50}
          className="mr-4"
        />
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome to our Laundry Services
        </h1>
      </header>

      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start mb-8 bg-teal-20">
        {/* Left Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <Image
            src="/images/laundry.png"
            alt="Wash Dry Fold Services"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        {/* Right Text */}
        <div>
          <p className="text-sm text-gray-600 mb-4">
            <strong className="text-gray-800">Wash and dry</strong> is a basic
            laundry service where clothes are cleaned and dried. This is ideal
            for everyday wear like t-shirts and jeans.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong className="text-gray-800">Wash, dry, and iron</strong> is an
            enhanced service that includes pressing clothes to remove wrinkles.
            This is perfect for formal wear and other items that require a crisp
            finish.
          </p>
          <p className="text-sm text-gray-600">
            <strong className="text-gray-800">Dry cleaning</strong> is a
            specialized service for delicate fabrics that can’t be cleaned with
            water. It involves cleaning clothes using a chemical solvent. This
            is best for materials like silk, wool, and leather.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-8">
  <h2 className="text-xl font-bold mb-4 text-gray-800">How It Works</h2>
  <div className="space-y-6">
    {[
      {
        icon: Car,
        text: "You can either drop off your laundry at a designated location or schedule a pickup service where they collect your laundry from your home or office.",
      },
      {
        icon: Package,
        text: "Your laundry is sorted by color and fabric type to ensure proper cleaning.",
      },
      {
        icon: Shirt,
        text: "Your clothes are washed in commercial-grade washing machines using appropriate detergents and water temperatures.",
      },
      {
        icon: Wind,
        text: "The clothes are dried in commercial dryers, ensuring they are completely dry.",
      },
      {
        icon: Clock,
        text: 'For "wash & iron", your clothes are ironed after drying!',
      },
      {
        icon: FoldVertical,
        text: "Your clean clothes are carefully folded and sorted.",
      },
      {
        icon: Car,
        text: "Your folded laundry is delivered back to you, either at a designated location or to your doorstep.",
      },
    ].map((step, index) => (
      <div key={index} className="flex items-center gap-4">
        {/* Icon Section */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
            <step.icon className="w-5 h-5 text-blue-600" />
          </div>
          {/* Vertical Line */}
          {index < 6 && (
            <div className="h-6 border-l border-gray-300 mt-1"></div>
          )}
        </div>
        {/* Text Section */}
        <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
      </div>
    ))}
  </div>
</section>


      {/* Select Laundry Service Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Select your Laundry Service</h2>
        <div className="space-y-3">
          {["Wash & Dry", "Wash & Iron", "Dry Cleaning"].map((service, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Checkbox id={`service-${index}`} />
              <label
                htmlFor={`service-${index}`}
                className="text-sm font-medium text-gray-700"
              >
                {service}
              </label>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-4">
          After selecting, click on{" "}
          <span className="text-blue-500 font-semibold">"proceed"</span> to check for available packages of your choice and within your budget.
        </p>

        <div className="mt-6 text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
            Proceed
          </Button>
        </div>
      </section>
    </div>
  );
}
