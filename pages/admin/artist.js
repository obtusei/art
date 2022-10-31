import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState} from 'react'

function Artist() {

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [image,setImage] = useState(0) 
  const router = useRouter()

  const addArtist = async () => {

    const data = {name:name,image:Number(image),description:description}
    try{

      axios.post("/api/artist",data,{withCredentials:true})
      .then((res) => {
        alert("Artist created successfully")
      })
      .catch((err) => {
        console.log(err.response.data)
        alert("Error creating the artist")
      })
    }
    catch{
      console.log("error")
    }
  }
  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Add Artist</h1>
      <hr />
        <div>
          <label>name:</label> <br/>
          <input type={'text'} placeholder={"enter artist name"} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>about:</label> <br/>
          <textarea placeholder={"enter about"} value={description} onChange={(e) => setDescription(e.target.value)} style={{width:"100%",height:"80px"}}/>
        </div>
        <br />
        <div>
          <label>image:</label> <br/>
          <input type={'number'} placeholder={"enter image id"} value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <br />
        <button onClick={() => addArtist()} style={{width:"100%"}}>Add</button>

    </div>
  )
}

export default Artist