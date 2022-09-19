import prisma from "../../libs/prisma";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req,res) {
  const session = await unstable_getServerSession(req, res, authOptions) 
    const user = await prisma.user.findUnique({
      where:{
        email:session.user.email
      }
    })
    if (req.method == "GET"){
      try{
        const museums = await prisma.museum.findMany();
        res.json(museums);
      }catch{
        res.status(405).json({ error: "Error getting museum" });
      }
    }else if (req.method === "POST"){
      try{
        if (user.role == "ADMIN"){
          const museum = await prisma.museum.create({
          data:{
            name:req.body.name,
            location:req.body.location,
            description:req.body.description,
            contacts:req.body.contacts,
          }
        });
        res.json(museum);
        }
        else{
          res.send("Admin only")
        }
      }catch{
        res.status(405).json({ error: "Error creating museum" });
      }
        
    }
    else if (req.method == "DELETE"){
      try{
        if (user.role == "ADMIN"){
          const arts = await prisma.museum.delete({
          where:{
            id:req.body.id
          }
        });
        res.json(arts);

        }
        else{
          res.send("Admin only")
        }
      }catch{
        res.status(405).json({ error: "Error deleting museums" });
      }
    }
    else{
      res.status(405).json({ error: "Method not allowed" });
    }

}