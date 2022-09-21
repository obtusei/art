import prisma from "../../libs/prisma";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req,res) {
    const session = await unstable_getServerSession(req, res, authOptions)
     if (req.method == "GET"){
      try{
        if (session){
          const user = await prisma.user.findUnique({where: {email: session.user.email}})
        if (user.role == "ADMIN"){
          const users = await prisma.user.findMany()
        res.json(users);
        }else{
          res.status(404).json("ERROR")
        }
        }
        else{
          res.send("Admin only")
        }
      }catch{
        res.status(405).json({ error: "Error creating user" });
      }
        
    }
    else if (req.method == "DELETE"){
      if (session){
        const user = await prisma.user.findUnique({where: {email: session.user.email}})
        if (user.role == "ADMIN"){
         try{
          const user = await prisma.user.delete({
            where:{
              id:req.body.id
            }
          })
          res.json(user)
         }
         catch{
          res.send("ERROR")
         }
        }
        else{
          res.send("NOT ALLOWED")
        }
      }else{
        res.send("NOT LOGGED IN")
      }
    }
      
    else{
      res.status(405).json({ error: "Method not allowed" });
    }

}