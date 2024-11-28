'use client';

import React from "react";
import { useRouter } from "next/navigation";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-extrabold text-gray-800">Error</h1>
      <p className="text-2xl font-semibold text-gray-600 mt-4">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Retry
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
