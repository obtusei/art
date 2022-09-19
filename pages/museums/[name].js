import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
function Artist() {
  return (
    <div style={{padding:"20px"}}>
      <Link href={"/artists"}>Go back</Link><br />
      <br />
      
      <div>
        <Image src={'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'} width={"120px"} height={"120px"} alt='name'/>
      </div>
      <h1>Abhishek Bhatta</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, perspiciatis ullam pariatur nobis dicta ab neque repellat, non sapiente delectus eum nulla expedita quidem esse, dolore recusandae optio animi a.</p>
      <br/>
      <hr/>
      <h2>Arts</h2>
      <div className={styles.artgrid}>
      {
        [...Array(20)].map((card,index) => (
          <div key={index} className={styles.griditem}>
            <ArtCard topHidden href={`/arts/${card}`}/>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Artist