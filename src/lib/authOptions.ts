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
   secret: process.env.NEXTAUTH_SECRET,

    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID || "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
      ],
      
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
