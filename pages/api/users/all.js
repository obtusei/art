import prisma from "../../../libs/prisma"

export default async function handler(req,res) {
  try{
    const users = await prisma.user.findMany()
    res.json(users);
  }
  catch{
    res.status(404).json({message:"ERROR"})
  }
}