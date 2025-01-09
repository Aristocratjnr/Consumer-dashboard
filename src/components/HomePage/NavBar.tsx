import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-white rounded-full border border-b-1 border-[#006A8A] px-14 py-2 shadow-sm">
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

      {/* AuthButtons */}
      <div className="space-x-4">
        <Link
          href="/auth/SignIn"
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Sign In
        </Link>
        <Link
          href="/auth/SignUp"
          className="rounded-full bg-gradient-to-b from-teal-20 to-teal-1000 px-4 py-2 text-md font-medium text-white hover:bg-blue-700"
        >
          Sign Up Here
        </Link>
      </div>
    </nav>
  );
}
