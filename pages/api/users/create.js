import prisma from "../../../libs/prisma";

export default async function handler(req,res) {
          if (req.method == "POST"){
                    try{
                              const { fullname,username, email, password } = req.body;
                              const user = await prisma.user.create({
                                                  data: {
                                                            name:fullname,
                                                            username:username,
                                                            email:email,
                                                            password:password
                                                  }
                              });
                              res.json(user);
                    }catch{
                              res.status(405).json({ error: "Error creating user" });
                    }
          }else{
                    res.status(405).json({ error: "Method not allowed" });
          }

}