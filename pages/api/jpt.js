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
        res.json({admin:true});
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
    
    else{
      res.status(405).json({ error: "Method not allowed" });
    }

}