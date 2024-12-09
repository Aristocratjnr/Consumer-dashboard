import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="w-full bg-[#f8fbff] py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-5xl font-bold text-[#67c6e3]">
          Testimonials
        </h1>
        <Card className="mx-auto max-w-4xl rounded-3xl border-[#36C3E2] p-8">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/testimonial.png"
                alt="Testimonial"
                className="aspect-square w-full max-w-full rounded-2xl object-cover" // Added max-w-full here
                width={300}
                height={300}
              />
            </div>
            <div className="w-full space-y-4 md:w-2/3">
              <div className="font-serif text-6xl leading-none text-[#67c6e3]">
                ”
              </div>

              <p className="leading-relaxed text-gray-700">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.
              </p>
              {/* text */}
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <p>Mawupemor</p>
                  <p>Lawyer</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-[#67c6e3] text-[#67c6e3]" />
                  <span className="text-lg font-medium">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
