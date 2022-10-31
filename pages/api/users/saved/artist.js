import prisma from "../../../../libs/prisma"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req,res){
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session){
    const user = await prisma.user.findUnique({where: {email: session.user.email}})
    if (req.method === "GET"){                                       //GET
      try{
        const savedArtist = await prisma.savedartist.findMany({
          where:{
            AND:[
              {
                type:{
                  equals:"SAVE"
                }
              },
              {
                userId:user.id
              }
            ]
          },
          include:{
            artist:true
          }
        })
        res.status(200).json(savedArtist)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else if (req.method === "POST"){                                           //POST
      try{
        const savedArtist = await prisma.savedartist.create({
          data:{
            type:"SAVE",
            userId:user.id,
            artistId:req.body.id
          }
        })
        res.status(200).json(savedArtist)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else if (req.method === "DELETE"){                                          //DELETE
      try{
        const savedArtist = await prisma.savedartist.deleteMany({
          where:{
            AND:[
              {
                type:{
                  equals:"SAVE"
                }
              },
              {
                userId:user.id
              },
              {
                artistId:req.query.id
              }
            ]
          }
        })
        res.status(200).json(savedArtist)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else{
      res.send("METHOD NOT ALLOWED")
    }
  }else{
    res.send("NOT LOGGED IN")
  }
}