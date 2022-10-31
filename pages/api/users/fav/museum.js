import prisma from "../../../../libs/prisma"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(req,res){
  const session = await unstable_getServerSession(req, res, authOptions)
  if (req.method === "GET"){                                       //GET
    try{
      const savedMuseum = await prisma.savedmuseum.findMany({
        where:{
          AND:[
            {
              type:{
                equals:"FAV"
              }
            },
            {
              userId:req.query.id
            }
          ]
        },
        include:{
          museum:true
        }
      })
      res.status(200).json(savedMuseum)
    }
    catch{
      res.status(404).send("ERROR")
    }
  }
  else if (req.method === "POST"){                                           //POST
    if (session){
      const user = await prisma.user.findUnique({where: {email: session.user.email}})
      try{
        const savedMuseum = await prisma.savedmuseum.create({
          data:{
            type:"FAV",
            userId:user.id,
            museumId:req.body.id
          }
        })
        res.status(200).json(savedMuseum)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }else{
      res.send("NOT LOGGED IN")
    }
  }
  else if (req.method === "DELETE"){                                          //DELETE
    if (session){
        const user = await prisma.user.findUnique({where: {email: session.user.email}})
      try{
        const savedMuseum = await prisma.savedmuseum.deleteMany({
          where:{
            AND:[
              {
                type:{
                  equals:"FAV"
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
        res.status(200).json(savedMuseum)
      }
      catch{
        res.status(404).send("ERROR")
      }
    }else{
      res.send("NOT LOGGED IN")
    }
  }
  else{
    res.send("METHOD NOT ALLOWED")
  }
}