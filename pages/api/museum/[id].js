import prisma from "../../../libs/prisma";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res) {
    if (req.method == "GET"){
      try{
        const museums = await prisma.museum.findUnique({
          where:{
            id:req.query.id
          }
        });
        res.json(museums);
      }catch{
        res.status(405).json({ error: "Error getting museum" });
      }
    }
    else{
      res.status(405).json({ error: "Method not allowed" });
    }

}