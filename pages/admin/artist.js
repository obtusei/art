import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useState} from 'react'

function Artist() {

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const router = useRouter()
  const addArtist = (e) => {

  }
  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Add Artist</h1>
      <hr />
      <form>
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
          {/* <input type={'image'} height={"20px"}/> */}
          <input type="file" name="image" id="" />
        </div>
        <br />
        <button onClick={addArtist} style={{width:"100%"}}>Add</button>
      </form>
    </div>
  )
}

export default Artist