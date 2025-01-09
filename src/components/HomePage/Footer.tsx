import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded-t-[3rem] bg-[#2B6CA3] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/footer-logo.svg"
              alt="ULaundry Logo"
              width={200}
              height={60}
              className=""
            />
          </div>

          {/* Tagline */}
          <p className="max-w-2xl text-center">
            Fresh clothes, hassle-free. Join us today for reliable laundry
            services and seamless connections with local providers!
          </p>
           {/* Divider */}
           <div className="my-4 w-full border border-b-2 border-dotted border-white/20" />
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8 text-sm sm:text-base">
            <Link href="/" className="transition-opacity hover:opacity-80">
              HOME
            </Link>
            <Link href="/about" className="transition-opacity hover:opacity-80">
              ABOUT US
            </Link>
            <Link
              href="/services"
              className="transition-opacity hover:opacity-80"
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className="transition-opacity hover:opacity-80"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Divider */}
          <div className="my-4 w-full border border-b-2 border-dotted border-white/20" />

          {/* Bottom Section */}
          <div className="flex w-full flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <div>Copyright © {currentYear}</div>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="transition-opacity hover:opacity-80"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link
                href="/terms"
                className="transition-opacity hover:opacity-80"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
