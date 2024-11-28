import Image from "next/image";

export function LaundryIllustrations() {
  return (
    <div className="relative h-full w-full bg-customGray rounded-l-3xl overflow-hidden">
      {/* Main Container with Padding */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
        {/* Top Image */}
        <div className="flex justify-center">
          <Image
            src="/images/user.png"
            alt="Laundromat illustration"
            width={400}
            height={300}
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto max-w-sm md:max-w-md"
          />
        </div>

        {/* Decorative Border */}
        <div className="w-full border-b-4 border-teal-400 rounded-b-sm my-3 md:my-5 lg:my-6" />

        {/* Bottom Image */}
        <div className="flex justify-center">
          <Image
            src="/images/machine.png"
            alt="Laundry items illustration"
            width={400}
            height={300}
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
