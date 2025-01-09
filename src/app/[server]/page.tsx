import React from 'react';
import Link from 'next/link';
import { Activity, AlertCircle } from 'lucide-react';

interface ServerPageProps {
  params: { server: string };
}

export default async function ServerPage({ params }: ServerPageProps) {
  const { server } = params;

  if (!server || server !== "valid-server-name") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg text-center space-y-6 animate-fade-in">
          <div className="relative">
            <h1 className="text-9xl font-black text-gray-200">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertCircle className="py-6  w-20 h-20 text-red-500 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Server Not Found🥺</h2>
            <p className="text-lg text-gray-600">
              The server you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="group relative px-6 py-3 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Return to Homepage</span>
              <div className="absolute inset-0 h-full w-full bg-blue-400 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-200" />
            </Link>
            
            <p className="text-sm flex items-center space-x-2 text-gray-500">
            <Activity className="w-4 h-4"/> &nbsp; or check our <Link href="/servers" className="text-blue-600 hover:underline">server list</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}