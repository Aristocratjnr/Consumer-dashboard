import Image from "next/image";

export default function ProcessSection() {
  const steps = [
    {
      number: "02",
      title: "Book a Service",
      isMain: false,
    },
    {
      number: "03",
      title: "We Collect",
      isMain: false,
    },
    {
      number: "04",
      title: "Expert Processing",
      isMain: false,
    },
    {
      number: "05",
      title: "We Deliver",
      isMain: false,
    },
  ];

  return (
    <section className="container mx-auto hidden px-4 py-16 md:block">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-medium">
          Keep Your Clothes{" "}
          <span className="text-[#36C3E2]">Looking New Longer</span>
        </h2>
        <p className="mt-6 text-gray-600">
          Preserve the quality of your clothes with our careful laundry and
          dry-cleaning services.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-start gap-2 lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <div className="rounded-4xl relative aspect-[4/4] overflow-hidden">
            <Image
              src="/images/process-section.png"
              alt="Person typing on laptop"
              width={600}
              height={500}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-start overflow-x-auto pb-6 lg:pb-0">
          <div className="flex gap-2">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex h-[500px] min-w-[90px] flex-col items-center rounded-full bg-gradient-to-b from-teal-500 to-teal-20 px-2 shadow-md ${
                  index === 0 ? "rounded-full" : ""
                } ${index === steps.length - 1 ? "rounded-full" : ""} ${
                  step.isMain ? "w-20" : "w-32"
                }`}
              >
                <div className="font-semi-bold mt-12 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal bg-white text-lg text-teal">
                  {step.number}
                </div>
                <div className="mt-8 origin-center translate-y-[180px] -rotate-90 items-start whitespace-nowrap text-lg font-bold tracking-wider text-teal-1000">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
