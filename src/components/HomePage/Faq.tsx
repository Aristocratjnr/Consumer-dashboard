import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, MapPin, Phone } from "lucide-react";
import { Card } from "../ui/card";

export default function FAQSection() {
  return (
    <div
     className="container mx-auto px-4 py-10"
     style={{
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.70) 0%, rgba(231, 247, 253, 0.70) 18%, rgba(231, 247, 253, 0.70) 78.75%, rgba(255, 255, 255, 0.70) 97.5%)",
    }}
   
     ><br/>
      <h2 className="mb-10 text-4xl font-bold text-left">
        <span className="text-gray-900">Frequently </span>
        <span className="text-teal-30">Asked <br /> Questions</span>
      </h2>

      <div className="grid gap-56 md:grid-cols-2 items-center">
        {/* Contact Information Column */}
        <div className="flex justify-center">
          <Card className="rounded-6x1 bg-white p-4 shadow-md border border-gray-300 max-w-xs h-52">
            <div className="space-y-4">
              <div className="flex items-start gap-4 border-b-2 border-dotted pb-4">
                <div className="rounded-lg bg-sky-100 p-2">
                  <Phone className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Contact</h3>
                  <p className="text-gray-600 text-xs">+233 55 444 7777</p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-b-2 border-dotted pb-4">
                <div className="rounded-lg bg-sky-100 p-2">
                  <MapPin className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Address</h3>
                  <p className="text-gray-600 text-xs">Third Cl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-sky-100 p-2">
                  <Clock className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Working Hours</h3>
                  <p className="text-gray-600 text-xs">
                    Monday-Sunday (9:00 AM to 10:00 PM)
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Accordion Column */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {[...Array(7)].map((_, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b-2 border-dotted border-teal-10"
              >
                <AccordionTrigger className="py-3 text-lg text-left pl-0 hover:no-underline">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit.
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo voluptates rerum ea dolorum natus architecto
                  necessitatibus sapiente quo rem amet.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
