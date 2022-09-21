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
        <div>
          <label>title:</label> <br/>
          <input type={'text'} placeholder={"enter title"} value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>category:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>description:</label> <br/>
          <input type={'text'} placeholder={"enter your username"} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <br />
        <select id="cars" name="cars">
          <option value="volvo">Volvo XC90</option>
          <option value="saab">Saab 95</option>
          <option value="mercedes">Mercedes SLK</option>
          <option value="audi">Audi TT</option>
        </select>
        <br />
        <button onClick={addArtist}>Add</button>
      
    </div>
  )
}

export default Museum