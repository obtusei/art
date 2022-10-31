import nextConnect from "next-connect";
import path from "path"
import multer from "multer"
import fs from "fs-extra"
import prisma from "../../libs/prisma";
import { authOptions } from "./auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth/next"

const onError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;
  res.status(err.statusCode).json({
    error,
    message: error.message,
    stack: error.stack,
  });
};

const handler = nextConnect(onError);

let storage = multer.diskStorage({
  destination:function (req,file,cb){
    cb(null,`./public/upload/`)
  },
  filename: async function (req, file, cb) {
    cb(null, "avatar" + path.extname(file.originalname));
  }
})

let upload = multer({
          storage: storage,
          fileFilter: function (req, file, callback) {
                    var ext = path.extname(file.originalname);
                    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                              return callback(new Error('Only images are allowed'))
                    }
                    callback(null, true)
          },
    limits:{
        fileSize: 1024 * 1024
    }
}).single('file')

handler.use(upload);

const checkIfSession = async (req,res,next) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session){
    next()
  }else{
    res.json({message:"Need to login"})
  }
}

handler.post(async (req,res) => {
  upload(req, res, async function (err) {
    if (err) {
        console.log("There was an error uploading the image.");
    }
    const filename = "avatar" + path.extname(req.file.originalname)
    const user = await prisma.user.findUnique({
      where:{
        id:"cl89q2bdi0000y8b3nket1ogd"
      }
    })
    const imageName = user.id + path.extname(req.file.originalname)
    const newImagePathName = `/upload/img/${imageName}`
    const ifExist = await fs.pathExists(newImagePathName)
    const move = () => {
      fs.move("./public/upload/" + filename,`./public/upload/img/${imageName}`,async function(err){
        if(err){
                  console.log("*****************************: " + ifExist)
                  console.log(err)
        }
        const userWithImage = await prisma.user.update({
          where:{
            id:"cl89q2bdi0000y8b3nket1ogd",
          },
          data:{
            image:newImagePathName
          }
        })
        res.json({
                  success:true,
                  message:"Image uploaded successfully",
                  user:userWithImage

        });
      })
    }
    if (ifExist === true){
      fs.remove(`./public/upload/img/${imageName}`)
      .then((res) => {
        move()
      })
      .catch((err) => console.log("ERROR"))
    }
    else{
      move()
    }
  })  
})

export default handler

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};