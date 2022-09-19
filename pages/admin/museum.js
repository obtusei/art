import React, {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
function Museum() {

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
        contact
      }
      
      await axios.post("/api/museum",data)
    }
    catch{
      console.log("ERROR");
    }
  }
  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Add Museum</h1>
      <hr />
      <form>
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
      </form>
    </div>
  )
}

export default Museum