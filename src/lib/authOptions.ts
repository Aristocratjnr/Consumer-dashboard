import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
      ],
      secret: process.env.NEXTAUTH_SECRET || "defaultFallbackSecret",
      session: {
        strategy: 'jwt',
      },
      callbacks: {
        async session({ session, token }) {
          if (session.user) {
            if (token.sub) {
              session.user.id = token.sub; 
            }
          }
          return session;
        },
      },
    };
