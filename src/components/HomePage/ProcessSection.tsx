import Image from "next/image";

export default function ProcessSection() {
  return (
    <div className="mx-20">
      <div>
        <p className="text-3xl font-medium">
          Keep Your Clothes{" "}
          <span className="text-[#36C3E2]">Looking New Longer</span>
        </p>
        <p className="mt-6">
          Preserve the quality of your clothes with our careful laundry and
          dry-cleaning services.
        </p>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-start">
          <Image
            src="/images/process-section.png"
            width={590}
            height={400}
            alt="Laundry process illustration"
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-96 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-b from-blue-100 to-white shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 text-lg font-bold text-blue-500">
              02
            </div>
            <div className="mt-2 rotate-90 text-lg font-medium tracking-wider text-blue-500">
              Book a Service
            </div>
          </div>
          <div className="flex h-96 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-b from-blue-100 to-white shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 text-lg font-bold text-blue-500">
              02
            </div>
            <div className="mt-2 rotate-90 text-lg font-medium tracking-wider text-blue-500">
              Book a Service
            </div>
          </div>
          <div className="flex h-96 w-20 flex-col items-center justify-center rounded-full bg-gradient-to-b from-blue-100 to-white shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-500 text-lg font-bold text-blue-500">
              02
            </div>
            <div className="mt-2 rotate-90 text-lg font-medium tracking-wider text-blue-500">
              Book a Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
