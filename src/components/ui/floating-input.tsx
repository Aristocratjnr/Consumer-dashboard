"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer w-full border-b border-gray-300 bg-transparent px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none",
            className,
          )}
          placeholder={label}
          ref={ref}
          {...props}
        />
        <label className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
          {label}
        </label>
      </div>
    );
  },
);
FloatingInput.displayName = "FloatingInput";

export { FloatingInput };
