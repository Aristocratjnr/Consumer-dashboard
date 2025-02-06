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
            {[
              { question: "How do I sign up for an account?", text: "Follow our simple registration process to get started.", answer: "You can sign up by visiting our website and clicking on the 'Sign Up' button. Fill in the required details and verify your email to complete registration." },
              { question: "What happens if I’m not home during a scheduled delivery?", text: "We will reschedule or leave it at your preferred location.", answer: "If you're not home, we can leave your laundry at a secure location of your choice or reschedule the delivery at your convenience." },
              { question: "Do I need to provide my own detergent or supplies?", text: "No, we use our own high-quality detergent.", answer: "We provide high-quality detergent and softeners to ensure your clothes are clean and fresh. However, if you have special detergent preferences, let us know." },
              { question: "Can I track my laundry order?", text: "Yes, you can track your order through our website or app.", answer: "Simply log into your account and navigate to the 'Track Order' section to see real-time updates on your laundry status." },
              { question: "Do you offer any discounts, subscriptions, or loyalty programs?", text: "Yes, we have various plans to save you money.", answer: "We offer multiple discounts and loyalty programs. You can subscribe to a monthly plan for savings or earn points with each order to redeem for discounts." },
              { question: "Do you provide dry cleaning as well as regular laundry?", text: "Yes, we offer both services to meet your needs.", answer: "Yes, we offer both standard laundry and professional dry cleaning services. Specify your preference while placing an order." },
              { question: "What are your operating hours?", text: "We are open Monday to Sunday from 9:00 AM to 10:00 PM.", answer: "Our services are available every day from 9:00 AM to 10:00 PM, ensuring flexibility to fit your schedule." },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b-2 border-dotted border-teal-10"
              >
                <AccordionTrigger className="py-3 text-lg text-left pl-0 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                  <p className="text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
