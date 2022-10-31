import prisma from "../../../libs/prisma"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res){
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session){
    if (req.query.check === "art"){
      try{
        const savedArt = await prisma.art.findMany(
          {
          where:{
              OR:[
                {
                  name:{
                    contains:req.query.q
                  }
                },
                {
                  description:{
                    contains:req.query.q
                  }
                }
              ]
            }
          }
        )
        res.json(savedArt)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else if (req.query.check === "artist"){
      try{
        const savedArtist = await prisma.artist.findMany({
          where:{
            OR:[
                {
                  name:{
                    contains:req.query.q
                  }
                },
                {
                  description:{
                    contains:req.query.q
                  }
                }
              ]
          }
        })
        res.json(savedArtist)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else if (req.query.check === "museum"){
      try{
        const savedMuseum = await prisma.museum.findMany({
          where:{
            OR:[
                {
                  name:{
                    contains:req.query.q
                  }
                },
                {
                  description:{
                    contains:req.query.q
                  }
                }
              ]
          }
        })
        res.json(savedMuseum)
      }
      catch{
        res.status(404).send("ERROR")
      }      
    }
    else{
      res.send("ERROR")
    }
  }else{
    res.send("ERROR")
  }
}