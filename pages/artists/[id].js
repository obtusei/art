import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import ArtCard from "../../components/ArtCard"
import styles from "../../styles/artists.module.css"
import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = url => fetch(url).then(r => r.json())
function Artist() {
  const router = useRouter();
  const {id} = router.query
  const {data,error} = useSWR(`/api/artist/${id}`,fetcher)
  if (!data) return <></>
  else if (error) return <p>Error</p>
  else {
    return (
      <div style={{padding:"20px"}}>
        <Link href={"/artists"}>Go back</Link><br />
        <br />
        
        <div>
          <Image src={`/artist/${data.image}.jpg`} width={"120px"} height={"120px"} alt='name'/>
        </div>
        <br />
        <h1>Name: {data.name}</h1>
        <p>About: {data.description}</p>
        <br/>
      </div>
    )
  }
}

export default Artist