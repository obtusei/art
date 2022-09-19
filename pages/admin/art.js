import { useRouter } from 'next/router'
import React, {useState} from 'react'

function Museum() {

  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [description,setDescription] = useState("")
  const [artist,setArtist] = useState(null)
  const [museum,setMuseum] = useState(null)
  const router = useRouter()
  const addArtist = (e) => {

  }

  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Add Art</h1>
      <hr />
      <form>
        <div>
          <label>Title:</label> <br/>
          <input type={'text'} placeholder={"enter title"} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>username:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>username:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <br />
        <br />
        <button onClick={addArtist}>Add</button>
      </form>
    </div>
  )
}

export default Museum