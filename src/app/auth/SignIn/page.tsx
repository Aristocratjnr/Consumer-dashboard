"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LaundryIllustrations } from "@/components/laundry-illustrations";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", { email, password, redirect: true, callbackUrl: "/home" });
    if (result?.error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-200 p-4">
      {/* Mobile View */}
      <div className="w-full block mb-4 md:hidden">
        <LaundryIllustrations />
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr,1.5fr] shadow-lg rounded-3xl overflow-hidden bg-white">
        {/* Image for Desktop View */}
        <div className="hidden md:block">
          <LaundryIllustrations />
        </div>

        {/* Sign-In Form */}
        <div
          className="relative px-4 py-6 md:p-12 flex flex-col bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sign.png')" }}
        >
          {/* Header */}
          <div className="text-center md:text-right mb-4 md:mb-12">
            <span className="text-sm text-gray-500">Don't have an account yet? </span>
            <Link href="/auth/SignUp" className="text-sm md:text-lg font-semibold text-gray-900 hover:underline">
              Sign up
            </Link>
          </div>

          {/* Form Content */}
          <div className="w-full max-w-sm mx-auto flex-grow flex flex-col justify-center space-y-4 md:space-y-8">
            {/* Title and Description */}
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Sign in</h1>
              <p className="text-sm md:text-base text-gray-500">Sign in with your account</p>
            </div>

            {/* Social Sign-In Buttons */}
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <Button
                variant="outline"
                className="w-full h-10 bg-transparent text-gray-600 font-medium"
                aria-label="Continue with Google"
                onClick={() => signIn("google", { callbackUrl: "/home" })}
              >
                <Image src="/images/google.png" alt="Google Logo" width={20} height={20} className="mr-2 h-5 w-5 object-contain" />
                Continue with Google
              </Button>

            <Link href="/dashboard" className="flex-1">
                <Button
                  variant="ghost"
                  className="w-full h-10 bg-transparent border text-gray-600 font-medium"
                  aria-label="Continue with Apple"
                >
                  <Image
                    src="/images/apple.png"
                    alt="Apple Logo"
                    width={20}
                    height={20}
                    className="mr-2 h-5 w-5 object-contain"
                  />
                  Continue with Apple
                </Button>
              </Link>
              </div>

            {/* Divider */}
            <div className="relative py-2 md:py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500" />
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-white text-gray-600">Or continue with email address</span>
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500" aria-live="polite">{error}</p>}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@yahoo.com"
                  className="w-full h-10 pl-10 pr-3 bg-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="************"
                  className="w-full h-10 pl-10 pr-3 bg-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-10 bg-teal-1000 hover:bg-teal font-itim text-white rounded-xl"
              >
                Start Laundering!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
