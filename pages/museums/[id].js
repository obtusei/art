import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import useSWR from "swr"
const fetcher = url => fetch(url).then(r => r.json())

import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import { useRouter } from 'next/router'
function Artist() {

  const router = useRouter()
  const { data, error } = useSWR(`/api/museum/${router.query.id}`, fetcher)
  if (!data) return <></>
  else if (error) return <p>Error</p>
  else{
  return (
    <div style={{padding:"20px"}}>
      <Link href={"/museums"}>Go back</Link><br />
      <br />
      
      <div>
        <Image src={`/museums/${data.image}.jpg`} width={"500px"} height={"500px"} alt='name'/>
      </div>
      <h1>{data.name}</h1>
      <p>About: {data.description}</p>
      <p>Contacts: {data.contacts}</p>
      <br/>
     
    </div>
  )
  }
}

export default Artist