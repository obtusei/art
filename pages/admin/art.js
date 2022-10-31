import axios from 'axios'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import useSWR from 'swr'
const fetcher = url => fetch(url).then(r => r.json())

function Museum() {

  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [description,setDescription] = useState("")
  const [artist,setArtist] = useState(null)
  const [image,setImage] = useState(0) 
  const [museum,setMuseum] = useState("")
  const { data:museums, error:museumErrror } = useSWR('/api/museum', fetcher)
  const {data:artists,error:artistError} = useSWR('/api/artist', fetcher)
  const router = useRouter()
  const addArtist = (e) => {
    const data={
      name:name,
      image:String(image),
      category:category,
      artistid:artist,
      description:description,
      museumid:museum
    }
    try{
      axios.post("/api/art",data,{withCredentials:true})
      .then((res) => {
        alert("Art created successfully")
      })
      .catch((err) => {
        console.log(err.response.data)
        alert("Error creating the art")
      })
    }
    catch{
      console.log("error")
    }
  }

  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Add Art</h1>
      <hr />
        <div>
          <label>title:</label> <br/>
          <input type={'text'} placeholder={"enter title"} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>category:</label> <br/>
          <input type={'text'} placeholder={"enter category"} value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>description:</label> <br/>
          <textarea placeholder={"add description"} style={{width:"100%",background:"lightgray",border:"none",borderRadius:"10px",padding:"10px"}} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>artists:</label> <br/>
          <select id="museums" name="museums" value={artist} onChange={(e) => setArtist(e.target.value)}>
          <option value={null}>None</option>
          {
            artists ? artists.map((artist,index) => (
              <option value={artist.id} key={index}>{artist.name}</option>
            )):<></>
          }
        </select>
        </div>
        <br />
        <div>
          <label>museum:</label> <br/>
          <select id="museums" name="museums" value={museum} onChange={(e) => setMuseum(e.target.value)}>
          <option value={null}>None</option>
          {
            museums ? museums.map((museum,index) => (
              <option value={museum.id} key={index}>{museum.name}</option>
            )):<></>
          }
        </select>
        </div><br />
         <div>
          <label>image:</label> <br/>
          <input type={'number'} placeholder={"enter image id"} value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <br />
        <Button onClick={addArtist}>Add</Button>
      
    </div>
  )
}

export default Museum