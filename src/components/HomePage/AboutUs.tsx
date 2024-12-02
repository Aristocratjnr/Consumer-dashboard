import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold sm:text-5xl">
                About <span className="text-cyan-400">Us</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 sm:text-3xl">
                Connecting You to Quality Laundry Services, Anytime, Anywhere.
              </h2>
            </div>

            <p className="leading-relaxed text-gray-600">
              We connect busy consumers with trusted local laundry providers
              through an easy-to-use app, making laundry hassle-free and
              convenient. Whether you need on-demand pickup and delivery,
              customised laundry care, or reliable service from expert
              providers, we&apos;ve got you covered. Our mission is to save you
              time, provide top-quality laundry services, and support local
              businesses, all with the click of a button.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-cyan-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    2 Years of Experience
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve become a trusted platform connecting consumers
                    with reliable laundry providers. We&apos;ve streamlined
                    laundry services, offering convenience for customers and
                    growth opportunities for providers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-cyan-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    10+ Service Providers
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ve partnered with over 10 trusted laundry service
                    providers, delivering convenience and quality to our
                    customers. Our platform has helped consumers access
                    reliable, on-demand laundry services while supporting
                    providers in growing their businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="transform overflow-hidden rounded-2xl bg-cyan-100 p-2">
                  <Image
                    src=""
                    alt="Laundry Service Provider"
                    width={500}
                    height={500}
                    className="rounded-xl"
                  />
                </div>
                <div className="transform overflow-hidden rounded-2xl bg-cyan-100 p-2">
                  <Image
                    src=""
                    alt="Professional Laundry Service"
                    width={500}
                    height={500}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="mt-12">
                <div className="transform overflow-hidden rounded-2xl bg-cyan-100 p-2">
                  <Image
                    src=""
                    alt="Laundry Process"
                    width={500}
                    height={850}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
