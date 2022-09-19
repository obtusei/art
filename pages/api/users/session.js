import prisma from "../../../libs/prisma";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res) {
    try{
      const session = await unstable_getServerSession(req, res, authOptions)
      if (session){
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email
          }
        })
        res.json(user)
      }else{
        res.send("Need to login")
      }
    }
    catch{
      res.send("Need to login")
    }
}