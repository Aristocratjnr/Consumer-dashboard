import React from 'react';
import Link from 'next/link';
import { Activity, Server, Home, AlertCircle, CloudOff, Wifi, Timer } from 'lucide-react';

interface ServerPageProps {
  params: { server: string };
}

export default async function ServerPage({ params }: ServerPageProps) {
  const { server } = params;
  
  if (!server || server !== "valid-server-name") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl text-center space-y-6 md:space-y-8 animate-fade-in relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-10 right-10 w-24 md:w-32 h-24 md:h-32 bg-purple-100 rounded-full blur-3xl opacity-60" />
          </div>
          
          {/* Server Icon at Top */}
          <div className="mb-4">
            <Server className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-indigo-500 opacity-90 animate-bounce-slow mx-auto" />
          </div>
          
          {/* 404 Header Section */}
          <div className="relative group">
            <h1 className="text-7xl sm:text-9xl md:text-[12rem] font-black bg-gradient-to-br from-gray-200 to-gray-300 text-transparent bg-clip-text select-none leading-none">
              404
            </h1>
          </div>
          
          {/* Error Message Section */}
          <div className="space-y-4 md:space-y-6 px-2 md:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text flex items-center justify-center gap-3">
              <CloudOff className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-pulse" />
              Server Not Found
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-pulse" />
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed flex items-center justify-center gap-2">
              <Wifi className="w-5 h-5 text-indigo-500" />
              Oops! It seems the server you&aposre looking for has wandered off into the digital void. 
              Don&apos;t worry though, we can help you find your way back.
              <Timer className="w-5 h-5 text-indigo-500" />
            </p>
          </div>
          
          {/* Single Action Button */}
          <div className="flex flex-col items-center space-y-4 md:space-y-6 mt-6 md:mt-8">
            <Link
              href="/"
              className="group relative px-6 md:px-8 py-3 text-white font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Return Home</span>
              </span>
              <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300" />
            </Link>
            
            {/* Status Indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:space-x-2 text-gray-500 mt-4 md:mt-6">
              <Activity className="w-5 h-5 text-indigo-500 animate-pulse" />
              <span className="text-sm md:text-base">System Status:</span>
              <span className="text-sm md:text-base text-indigo-600 font-medium">All Other Servers Online</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}