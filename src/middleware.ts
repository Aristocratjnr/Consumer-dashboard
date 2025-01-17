import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Redirect to sign-in if no token is found
  if (!token) {
    const signInUrl = new URL("/auth/SignIn", req.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Define the routes where the middleware should be applied
export const config = {
  matcher: ["/home/:path*"], // Protect /dashboard and its subroutes
};
