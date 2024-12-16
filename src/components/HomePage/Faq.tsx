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
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-12 text-4xl font-bold">
        <span className="text-gray-900">Frequently </span> <br />
        <span className="text-sky-400">Asked Questions</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information Column */}
        <Card className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-2">
                <Phone className="h-6 w-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="text-gray-600">+233 55 444 7777</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-2">
                <MapPin className="h-6 w-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-600">Third Cl</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-sky-100 p-2">
                <Clock className="h-6 w-6 text-sky-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Working Hours</h3>
                <p className="text-gray-600">
                  Monday-Sunday (9:00 AM to 10:00 PM)
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Accordion Column */}
        <div>
          <Accordion
            type="single"
            collapsible
            className="ml-16 w-full space-y-2"
          >
            {[...Array(7)].map((_, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-sky-100"
              >
                <AccordionTrigger className="m-0 text-left hover:no-underline">
                  Borem ipsum dolor sit amet, consectetur adipiscing elit.
                </AccordionTrigger>
                <AccordionContent>
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
