import prisma from "../../../libs/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req,res) {
          if (req.method == "POST"){
            try{
              const { name,username, email, password } = req.body;
              const hashedPassword = await bcrypt.hash(password, 10);
              const user = await prisma.user.create({
                data: {
                  name:name,
                  username:username,
                  email:email,
                  password:hashedPassword
                }
              });
              res.json(user);
            }catch{
              res.status(405).json({ error: "Error creating user" });
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
          else{
                    res.status(405).json({ error: "Method not allowed" });
          }

}