import prisma from "../../../../libs/prisma"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req,res){
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session){
    const user = await prisma.user.findUnique({where: {email: session.user.email}})
    if (req.query.check === "art"){
      try{
        const savedArt = await prisma.savedart.findMany({
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
                artId:req.query.id
              }
            ]
          }
        })
        if (savedArt.length > 0){ 
          res.json({didSave:true})
        }else{
          res.json({didSave:false})
        }
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else if (req.query.check === "artist"){
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
              },
              {
                artistId:req.query.id
              }
            ]
          }
        })
        if (savedArtist.length > 0){ 
          res.json({didSave:true})
        }else{
          res.json({didSave:false})
        }
      }
      catch{
        res.status(404).send("ERROR")
      }
    }
    else if (req.query.check === "museum"){
      try{
        const savedMuseum = await prisma.savedmuseum.findMany({
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
                museumId:req.query.id
              }
            ]
          }
        })
        if (savedMuseum.length > 0){
          res.json({didSave:true})      
        }else{
          res.json({didSave:false})
        }
      }
      catch{
        res.status(404).send("ERROR")
      }      
    }
    else{
      res.json({didSave:false})
    }
  }else{
    res.json({didSave:false})
  }
}