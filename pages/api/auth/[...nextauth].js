import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../libs/prisma";
import bcrypt from "bcryptjs";

export const authOptions = {
      providers:[
            CredentialsProvider({
                  name: "local",
                  credentials:{
                        username: { label: "Username", type: "text", placeholder: "jsmith" },
                        password: {  label: "Password", type: "password" }
                  },
                  async authorize(credentials, req) {
                        
                        const user = await prisma.user.findUnique({
                              where: {
                                    username: credentials.username
                              }
                        });
                        const password = await bcrypt.compare(credentials.password, user.password);

                        if (credentials.username == user.username && password) {
                              return await user;
                        }else{
                              return null;
                        }
                  }
            })            
      ],

      callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session,user,token }) => {
      if (token) {
        session.id = token.id;
      }

      return session;
    },
  },
      secret:process.env.NEXTAUTH_SECRET,
      jwt:{
            secret:process.env.NEXTAUTH_SECRET
      },
      pages:{
            "signin": "/login",
      }
}

export default NextAuth(authOptions)