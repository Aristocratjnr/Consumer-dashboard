import { MapPin, Phone, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
  {
    question: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptates rerum ea dolorum natus architecto voluptas temporibus.",
  },
];

export default function FAQSection() {
  return (
    <div className="w-full bg-[#f8fbff] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3">
            <h1 className="mb-12 text-4xl font-bold lg:text-5xl">
              <span className="text-gray-800">Frequently</span>
              <span className="text-[#67c6e3]">Asked Questions</span>
            </h1>

            <div className="space-y-8">
              {/* Contact */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Contact</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-5 w-5 text-[#67c6e3]" />
                  <span>+233 55 444 7777</span>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Address</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-[#67c6e3]" />
                  <span>Third CI</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Working Hours</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-5 w-5 text-[#67c6e3]" />
                  <span>Monday-Sunday (9:00 AM to 10:00 PM)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-dotted border-[#67c6e3] pb-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-left">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
