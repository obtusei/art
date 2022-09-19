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
  const [location,setLocation] = useState("")
  const [description,setDescription] = useState("")
  const [contact,setContact] = useState("")
  const router = useRouter();
  const addMuseum = async (e) => {
    try{
      const data = {
        name:name,
        location:location,
        description:description,
        contacts:contact
      }
      
      await axios.post("/api/museum",data)
    }
    catch{
      console.log("ERROR");
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
        <button onClick={addMuseum} style={{width:"100%"}}>Add</button>
      
    </div>
  )
}

export default Museum