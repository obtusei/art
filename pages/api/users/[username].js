import prisma from "../../../libs/prisma"

export default async function handler(req,res) {
  try{
    const users = await prisma.user.findUnique({
      where:{
        username:req.query.username
      }
    })
    res.json(users);
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}