import prisma from "../../../libs/prisma";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res) {
    const session = await unstable_getServerSession(req, res, authOptions) 


  if (req.method == "GET"){
      try{
        if(session){
          const artists = await prisma.artist.findMany();
          res.json(artists);
        }
        else{
          res.send("Need to login")
        }
      }catch{
        res.status(405).json({ error: "Error getting museum" });
      }
    }else if (req.method == "POST"){
      try{
        if(session){
        const user = await prisma.user.findUnique({where:{email:session.user.email}})
        if (user.role == "ADMIN"){
          const arts = await prisma.artist.create({
          data:{
            name:req.body.name,
            image:req.body.image,
            description:req.body.description,
          }
        });
        res.json(arts);
        }else{
          res.send("Admin only")
        }
      }else{
        res.status(404).json("ERROR")
      }
      }catch{
        res.status(405).json({ error: "Error creating museums" });
      }
        
    }
    else if (req.method == "DELETE"){
      try{
        if(session){
        const user = await prisma.user.findUnique({where:{email:session.user.email}})
        if (user.role == "ADMIN"){
          const arts = await prisma.artist.delete({
          where:{
            id:req.body.id
          }
        });
        res.json(arts);
        }else{
          res.send("Admin only")
        }
      }else{
        res.status(404).json("ERROR")
      }
      }catch{
        res.status(405).json({ error: "Error deleting museums" });
      }
    }
    else{
      res.status(405).json({ error: "Method not allowed" });
    }

}