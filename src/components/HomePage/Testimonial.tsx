import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div 
    className="w-full py-16"
    style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.70) 0%, rgba(231, 247, 253, 0.70) 18%, rgba(231, 247, 253, 0.70) 78.75%, rgba(255, 255, 255, 0.70) 97.5%)",
    }}
    >
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-5xl font-bold text-teal-30 px-2 py-2 text-left">
          Testimonials
        </h1>
        <Card className="mx-auto max-w-4xl rounded-3xl border-[#36C3E2] p-8">
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/testimonial.png"
                alt="Testimonial"
                className="aspect-square w-full max-w-full rounded-2xl object-cover" 
                width={300}
                height={300}
              />
            </div>
            <div className="w-full space-y-4 md:w-2/3">
              <div className="font-serif text-5xl leading-none text-[#67c6e3]">
                “
              </div>

              <p className="leading-relaxed text-gray-700">
                Their service is incredibly convenient and reliable. From the moment I scheduled my first pick-up, I was impressed by their professionalism. My clothes always come back perfectly clean, fresh, and neatly folded. I appreciate their attention to detail, especially with delicate fabrics and special care instructions.
              </p>
              {/* text */}
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-lg font-bold">Mawupemor</p>
                  <p>Lawyer</p>
                </div>
                <div className="mr-5 box-border flex items-center gap-1 rounded-2xl border border-[#67c6e3] px-5 py-2">
                <Star className="h-5 w-5 fill-none stroke-[#FFD700] stroke-2" />
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
