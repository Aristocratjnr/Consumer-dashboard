import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-white px-14 py-2 shadow-sm">
      {/* Logo */}
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Logo" width={100} height={60} />
        </Link>
      </div>

      {/* NavLinks */}
      <div className="flex items-center">
        <Link href="" className="px-5">
          HOME
        </Link>
        <Link href="" className="px-5">
          ABOUT US
        </Link>
        <Link href="" className="px-5">
          SERVICES
        </Link>
        <Link href="" className="px-5">
          CONTACT US
        </Link>
      </div>

      {/* Sign In / Sign Up */}
      <div className="space-x-4">
        <Link
          href="/auth/sign-in"
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Sign In
        </Link>
        <Link
          href=""
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
