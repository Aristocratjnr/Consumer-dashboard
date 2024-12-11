"use client";

import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Image */}
      <div className="hidden w-1/2 bg-[#E5F4F7] lg:block">
        <Image
          src="/images/bg-signup1.png"
          alt="Laundry service professional"
          width={800}
          height={900}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Right Section - Form with Background Image */}
      <div className="relative flex w-full flex-col px-6 lg:w-1/2 lg:px-12">
        <Image
          src="/images/bg-signup.png"
          alt="background image"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10">
          {/* Header: Language Selector and Breadcrumb */}
          <div className="mb-8 mt-4 flex items-center justify-between text-sm text-gray-600">
            <div>
              <Link href="/" className="hover:text-gray-900">
                /home
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>English (UK)</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto w-full max-w-md">
            <h1 className="mb-8 text-3xl font-semibold">Create an account</h1>

            {/* Social Login Buttons */}
            <div className="mb-8 flex gap-4">
              <Button variant="outline" className="flex-1">
                <Image
                  src="/images/google-icon.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Google
              </Button>
              <Button variant="outline" className="flex-1">
                <Image
                  src="/images/apple-icon.png"
                  alt="Apple"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Continue with Apple
              </Button>
            </div>

            <div className="relative my-8 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 flex-shrink text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <h2 className="mb-6 text-lg font-medium">
              Enter your details below
            </h2>

            {/* Sign Up Form */}
            <form className="space-y-6">
              <FloatingInput
                label="First Name"
                id="firstName"
                type="text"
                required
              />

              <FloatingInput
                label="Last Name"
                id="lastName"
                type="text"
                required
              />

              <FloatingInput
                label="Email Address"
                id="email"
                type="email"
                required
              />

              <FloatingInput
                label="Password"
                id="password"
                type="password"
                required
              />

              <RadioGroup defaultValue="customer" className="mt-8">
                <div className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="provider" id="provider" />
                    <label htmlFor="provider" className="text-sm text-gray-600">
                      Laundry Service Provider
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="customer" />
                    <label htmlFor="customer" className="text-sm text-gray-600">
                      Customer
                    </label>
                  </div>
                </div>
              </RadioGroup>

              <Button
                type="submit"
                className="mt-8 w-full rounded-full bg-[#3B82F6] text-white"
              >
                Create Account
              </Button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#3B82F6] hover:underline">
                Login
              </Link>
            </p>

            {/* Footer Links */}
            <div className="mt-12 flex justify-center gap-8 text-sm text-gray-600">
              <Link href="/support" className="hover:text-gray-900">
                Contact Support
              </Link>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
