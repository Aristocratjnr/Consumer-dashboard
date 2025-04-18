"use client";

import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("customer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userType,
        }),
      });

      if (res.ok) {
        setLoading(false);
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push("/auth/SignIn");
      } else {
        const errorData = await res.json();
        setError("Registration failed: " + errorData.message);
        setLoading(false);
      }
    } catch (error: unknown) {
     if (error instanceof Error) {
      setError("An unexpected error occurred: " + error.message);
    } else {
      setError("An unexpected error occurred. Please try again.");
    }
    setLoading(false);
  }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section - Image */}
      <div className="hidden md:block w-1/2 bg-[#E5F4F6] relative">
        <Image
          src="/images/bg-signup1.png"
          alt="Laundry Service"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Right Section - Form with Background Image */}
      <div className="relative flex w-full flex-col px-4 sm:px-6 lg:w-1/2 lg:px-12">
        <Image
          src="/images/sign.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          className="opacity-200 md:opacity-200"
          priority
        />
        <div className="relative z-10 flex flex-col justify-between min-h-screen py-6 md:py-8">
          {/* Header */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
            <div>
              <Link href="/" className="hover:text-gray-900">
                /home
              </Link>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>English (UK)</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto w-full max-w-[340px] sm:max-w-md">
            <h1 className="mb-6 md:mb-8 text-xl sm:text-2xl font-semibold">Create an account</h1>

            {/* Social Login Buttons */}
            <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="outline" className="flex-1 text-xs bg-transparent border px-2 sm:px-4 h-9 sm:h-10">
                <Image
                  src="/images/google-icon.png"
                  alt="Google"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Continue with Google
              </Button>
              <Button variant="outline" className="flex-1 text-xs bg-transparent px-2 sm:px-4 h-9 sm:h-10">
                <Image
                  src="/images/apple-icon.png"
                  alt="Apple"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                Continue with Apple
              </Button>
            </div>

            <div className="relative my-5 sm:my-6 flex items-center">
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="mx-4 flex-shrink text-xs text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>

            <h2 className="mb-5 sm:mb-6 text-base sm:text-lg font-medium text-gray-600">
              Enter your details below
            </h2>

            {/* Sign Up Form */}
            <form className="space-y-4 font-light text-md" onSubmit={handleSubmit}>
              <FloatingInput
                label="First Name"
                id="firstName"
                value={firstName}
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                disabled={loading}
              />

              <FloatingInput
                label="Last Name"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                disabled={loading}
              />

              <FloatingInput
                label="Email Address"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                disabled={loading}
              />

              <FloatingInput
                label="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                disabled={loading}
              />

              <RadioGroup
                defaultValue="customer"
                onValueChange={(value) => setUserType(value)}
                className="mt-5 sm:mt-6"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="provider" id="provider" />
                    <label htmlFor="provider" className="text-sm font-medium text-gray-600">
                      Laundry Service Provider
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="customer" />
                    <label htmlFor="customer" className="text-sm font-medium text-gray-600">
                      Customer
                    </label>
                  </div>
                </div>
              </RadioGroup>

              <Button
                type="submit"
                className={`mt-6 w-full rounded-full ${
                  loading ? "bg-gray-400" : "bg-teal-1000 hover:bg-teal-700"
                } text-white text-sm h-10 sm:h-11`}
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 text-center rounded-md mt-2 mx-auto">
                {error}
              </div>
            )}

            <p className="mt-4 text-center text-xs text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/SignIn" className="text-black hover:underline">
                Login
              </Link>
            </p>
          </div>
             {/* Footer Links */}
             <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-gray-600 mt-6">
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
  );
}
