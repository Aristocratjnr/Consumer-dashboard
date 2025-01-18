import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded-t-[1.5rem] bg-[#0E6EAC] py-6 text-white sm:rounded-t-[3rem] sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/images/footer-logo.svg"
              alt="ULaundry Logo"
              width={150}
              height={45}
              className="h-auto w-auto"
            />
          </div>

          {/* Tagline */}
          <p className="max-w-2xl text-center text-sm sm:text-base">
            Fresh clothes, hassle-free. Join us today for reliable laundry
            services and seamless connections with local providers!
          </p>

          {/* Divider */}
          <div className="my-2 w-full border-b border-dotted border-white/20 sm:my-4" />

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm sm:gap-8">
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
          <div className="my-2 w-full border-b border-dotted border-white/20 sm:my-4" />

          {/* Bottom Section */}
          <div className="flex w-full flex-col items-center justify-between gap-4 text-xs sm:flex-row sm:text-sm">
            <div>© Copyright {currentYear}</div>
            <div className="flex gap-2 sm:gap-4">
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
