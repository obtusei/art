import prisma from "../../../libs/prisma";
import bcrypt from "bcryptjs";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res) {
          if (req.method == "POST"){
            try{
              const { name,username, email, password } = req.body;
              const hashedPassword = await bcrypt.hash(password, 10);
              const isUsername = await prisma.user.findUnique({
                where:{
                  username:username
                }
              })
              const isEmail = await prisma.user.findUnique({
                where:{
                  email:email
                }
              })
              if (isUsername == null){
                if (isEmail === null){
                    const user = await prisma.user.create({
                    data: {
                      name:name,
                      username:username,
                      email:email,
                      password:hashedPassword
                    }
                  });
                  res.json(user);
                }else{
                  res.status(404).json({message:"Email already exists"})
                }

              }else{
                res.status(404).json({message:"Username already exist"})
              }
            }catch{
              res.status(404).json({ error: "Error creating user" });
            }
          }
          else if (req.method == "GET"){
            try{
              const users = await prisma.user.findMany();
              res.json(users)
            }
            catch{
              res.status(405).json({ error: "Error fetching user" })
            }
          }
          else if (req.method == "PUT"){
            const session = await unstable_getServerSession(req, res, authOptions)

            try{
              if (session){
                const { name,username, email,bio } = req.body;
              const isUsername = await prisma.user.findUnique({
                where:{
                  username:username
                }
              })
              const isEmail = await prisma.user.findUnique({
                where:{
                  email:email
                }
              })
              if (isUsername === null || isUsername.username === username){
                if (isEmail === null || isEmail.email === email){
                    const user = await prisma.user.update({
                      where:{
                        email:session.user.email
                      },
                      data: {
                        name:name,
                        username:username,
                        email:email,
                        bio:bio
                      }
                  });
                  res.json(user);
                }else{
                  res.status(404).json({message:"Email already exists"})
                }

              }else{
                res.status(404).json({message:"Username already exist"})
              }
              }else{
                res.status(404).json({message:"Please login"})
              }
            }catch{
              res.status(404).json({ error: "Error updating user" });
            }
          }
          else{
                    res.status(405).json({ error: "Method not allowed" });
          }

}