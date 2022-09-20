import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import safeJsonStringify from 'safe-json-stringify'
import prisma from "../../libs/prisma"
import {getSession} from "next-auth/react"

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const user = await prisma.user.findUnique({
    where:{
      email:session.user.email
    }
  })
  const userData = JSON.parse(safeJsonStringify(user))
  return {
    props: {
      role:userData.role
    }, // will be passed to the page component as props
  }
}

function Museum({role}) {

  const [name,setName] = useState("")
  const [image,setImage] = useState(0)
  const [location,setLocation] = useState("")
  const [description,setDescription] = useState("")
  const [contact,setContact] = useState("")
  const router = useRouter();
  const addMuseum = async (e) => {

    const data = { name:name,location:location,description:description,contacts:contact,image:image}
    try{
      const response = await fetch("/api/museum",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const json = await response.json();
      if(json.error){
        alert(json.error);
      }
      else{
        alert("User created successfully");
        router.push("/admin");
      }

      // router.push('/login')
    }
    catch{
      console.log("error")
    }
  }
  if (role === "USER"){
    return <p>You are not an admin</p>
  }
  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Add Museum</h1>
      <hr />
      
        <div>
          <label>Name:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>Location:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>Description:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>Contact:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={contact} onChange={(e) => setContact(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>Image:</label> <br/>
          <input type={'number'} placeholder={"enter your image number"} value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <br />
        <button onClick={addMuseum} style={{width:"100%"}}>Add</button>
      
    </div>
  )
}

export default Museum