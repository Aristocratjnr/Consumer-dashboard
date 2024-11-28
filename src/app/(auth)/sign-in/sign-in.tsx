import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LaundryIllustrations } from "@/components/laundry-illustrations";
import { Apple, Chrome, Lock, Mail } from "lucide-react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl h-auto grid grid-cols-1 md:grid-cols-[1fr,1.5fr] shadow-lg rounded-3xl overflow-hidden">
        {/* Illustrations */}
        <LaundryIllustrations />

        {/* Sign-In Form */}
        <div className="p-6 md:p-12 flex flex-col">
          {/* Header */}
          <div className="text-center md:text-right mb-6 md:mb-12">
            <span className="text-sm text-gray-500">
              Don't have an account yet?{" "}
            </span>
            <Link
              href="/sign-up"
              className="text-sm md:text-lg font-semibold text-gray-900 hover:underline"
            >
              Sign up
            </Link>
          </div>

          {/* Form Content */}
          <div className="max-w-sm mx-auto w-full flex-grow flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Title and Description */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Sign in
              </h1>
              <p className="text-sm md:text-base text-gray-500">
                Sign in with your account
              </p>
            </div>

                        {/* Buttons for Google and Apple Sign-In */}
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Button
                variant="outline"
                className="flex-1 h-10 text-gray-500 font-medium border-customGray"
            >
                {/* Google Image */}
                <div className="mr-2 h-5 w-5 md:h-6 md:w-6">
                <Image
                    src="/images/google.png" 
                    alt="Google Logo"
                    width={20} 
                    height={20}
                    className="object-contain"
                />
                </div>
                Continue with Google
            </Button>
            <Button
                variant="outline"
                className="flex-1 h-10 text-gray-500 font-medium border-customGray"
            >
                {/* Apple Image */}
                <div className="mr-2 h-5 w-5 md:h-6 md:w-6">
                <Image
                    src="/images/apple.png" 
                    alt="Apple Logo"
                    width={20} 
                    height={20}
                    className="object-contain"
                />
                </div>
                Continue with Apple
            </Button>
            </div>


            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500" />
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-white text-gray-600">
                  Or continue with email address
                </span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-3 md:space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="johndoe@yahoo.com"
                  className="w-45 h-10 pl-10 pr-3 bg-gray-100 border-0 rounded-md text-sm text-gray-800 placeholder-gray-400 "
                />
              </div>
              {/* Password Input */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-45 h-10 pl-10 pr-3 bg-gray-100 border-0 rounded-md text-sm text-gray-800 placeholder-gray-400"
                />
              </div>
              {/* Submit Button */}
              <Button className="w-45 h-10 bg-teal-1000 hover:bg-teal-1000 text-white text-sm font-normal leading-normal rounded-xl flex items-center justify-center space-x-2">
                Start Laundering!
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
