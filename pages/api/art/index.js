import prisma from "../../../libs/prisma";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res) {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (req.method == "GET"){
      try{
        if (session){
          const arts = await prisma.art.findMany();
        res.json(arts);
        }else{
          res.send("Need to login")
        }
      }catch{
        res.status(405).json({ error: "Error creating user" });
      }
    }else if (req.method == "POST"){
      try{
        if (session){
          const user = await prisma.user.findUnique({where: {email: session.user.email}})
        if (user.role == "ADMIN"){
          const museum = await prisma.museum.findUnique({
          where:{
            id:req.body.museumId
          }
        })
        const artist = await prisma.artist.findUnique({
          where:{
            id:req.body.artistId
          }
        })
        const arts = await prisma.art.create({
          data:{
            name:req.body.name,
            image:req.body.image,
            description:req.body.description,
            category:req.body.category,
            artist:artist,
            museum:museum
          }
        });
        res.json(arts);
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
      try{
        if (session){
          const user = await prisma.user.findUnique({where: {email: session.user.email}})
        if (user.role == "ADMIN"){
          const arts = await prisma.art.delete({
          where:{
            id:req.body.id
          }
        });
        res.json(arts);
        }
        else{
          res.send("Admin only")
        }
        }else{
          res.status(404).json("ERROR")
        }
      }catch{
        res.status(405).json({ error: "Error creating user" });
      }
    }
    else{
      res.status(405).json({ error: "Method not allowed" });
    }

}