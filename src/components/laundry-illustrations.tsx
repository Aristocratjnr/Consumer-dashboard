import Image from "next/image";

export function LaundryIllustrations() {
  return (
    <div className="relative w-full h-64 md:h-full rounded-3xl overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/images/man.png"
          alt="Laundromat illustration"
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}