import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3B75B4] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="h-24 w-24">
            <Image
              src="/images/logo.png"
              alt="Laundry Service Logo"
              width={100}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Tagline */}
          <p className="max-w-3xl text-center text-lg">
            Fresh clothes, hassle-free. Join us today for reliable laundry
            services and seamless connections with local providers!
          </p>

          {/* Navigation Links */}
          <div className="w-full border-t border-dotted border-white/50 py-6">
            <nav className="flex flex-wrap justify-center gap-8 md:gap-16">
              <Link href="/" className="transition-colors hover:text-white/80">
                HOME
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-white/80"
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className="transition-colors hover:text-white/80"
              >
                SERVICES
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-white/80"
              >
                CONTACT US
              </Link>
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="w-full border-t border-dotted border-white/50 py-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <span className="sr-only">Copyright</span>
                <span className="text-sm">©</span>
                <span className="text-sm">Copyright {currentYear}</span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-sm transition-colors hover:text-white/80"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/50">|</span>
                <Link
                  href="/terms"
                  className="text-sm transition-colors hover:text-white/80"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
