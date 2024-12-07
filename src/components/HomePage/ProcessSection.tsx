import Image from "next/image"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Sign up",
      description: "Easy sign-up process for consumers to be connected to a laundry service provider near them.",
      isMain: true
    },
    {
      number: "02",
      title: "Book a Service",
      isMain: false
    },
    {
      number: "03",
      title: "We Collect",
      isMain: false
    },
    {
      number: "04",
      title: "Expert Processing",
      isMain: false
    },
    {
      number: "05",
      title: "We Deliver",
      isMain: false
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
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
      
      <div className="mt-16 flex flex-col lg:flex-row gap-8 items-start">
        <div className="relative w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/process-section.png"
              alt="Person typing on laptop"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-between gap-2 overflow-x-auto pb-6 lg:pb-0">
          {steps.slice(1).map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center min-w-[100px] h-[470px] rounded-full bg-gradient-to-b from-teal-500 to-teal-500 shadow-md px-2"
            >
              <div className="mt-16 flex h-16 w-16 items-center justify-center rounded-full border-2 text-lg bg-white border-teal  font-semi-bold text-teal">
                {step.number}
              </div>
              <div className="mt-4 -rotate-90 origin-center translate-y-[140px] whitespace-nowrap text-2xl font-bold tracking-wider text-teal">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

