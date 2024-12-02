import { UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CardComponet() {
  return (
    <Card className="max-w-md rounded-3xl">
      {/* 1st Card */}
      <CardContent className="p-6">
        {/* Icon and title container */}
        <div className="mb-4 flex items-center gap-3">
          {/* Icon with light blue color */}
          <UserPlus className="h-8 w-8 text-sky-300" />
          {/* Title text */}
          <h2 className="text-xl font-semibold">Onboarding &Registration</h2>
        </div>
        {/* Description text */}
        <p className="text-gray-600">
          Easy sign-up process creates a seamless entry point for both laundry
          service providers and consumers
        </p>
      </CardContent>
    </Card>
  );
}
