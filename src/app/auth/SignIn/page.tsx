import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LaundryIllustrations } from "@/components/laundry-illustrations";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-4xl h-auto grid grid-cols-1 md:grid-cols-[1fr,1.5fr] shadow-lg rounded-3xl overflow-hidden">
        {/* Illustrations */}
        <LaundryIllustrations />

        {/* Sign-In Form */}
        <div
          className="relative p-6 md:p-12 flex flex-col bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sign.png')" }}
        >
          {/* Header */}
          <div className="text-center md:text-right mb-6 md:mb-12">
            <span className="text-sm text-gray-500">
              Don&apos;t have an account yet?{" "}
            </span>
            <Link
              href="/auth/SignUp"
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
              <Link href="/dashboard">
              <Button
                variant="outline"
                className="flex-1 h-10 bg-transparent  text-gray-600  font-medium"
              >
                <Image
                  src="/images/google.png"
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="mr-2 h-5 w-5 object-contain"
                />
                Continue with Google
              </Button>
              </Link>
              <Link href="/dashboard">
              <Button
                variant="ghost"
                className="flex-1 h-10 bg-transparent border text-gray-600 font-medium"
                
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
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-500" />
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-white text-gray-600">
                </span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-3 md:space-y-4">
              <h3> Or continue with email address</h3>
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                <input
                  type="email"
                  placeholder="johndoe@yahoo.com"
                  className="w-45 h-10 pl-10 pr-3 bg-gray-200 border-0 rounded-md text-sm text-gray-900 font-semi-bold placeholder-gray-600"
                />
              </div>
              {/* Password Input */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black" />
                <input
                  type="password"
                  placeholder="************"
                  className="w-45 h-10 pl-10 pr-3 bg-gray-200 border-0 rounded-md text-sm font-semi-bold  text-gray-900 placeholder-gray-600"
                />
              </div><br/>
              {/* Submit Button */}
              <Link href="/home">
              <Button className="w-45 h-10 pl-10 pr-16 bg-teal-1000 hover:bg-teal-1000 text-white font-itim text-[15px] rounded-xl flex  justify-center space-x-2 text-center">
                <span>Start Laundering!</span>
              </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


