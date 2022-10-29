import React from 'react'
import { useSession, signOut, getSession } from "next-auth/react"
import { Button, Container } from 'react-bootstrap'
import styles from "../styles/artists.module.css"
import bstyles from "../styles/components/Button.module.css"
import useSWR from 'swr'
import ArtCard from '../components/ArtCard'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
const fetcher = url => fetch(url).then(r => r.json())

export const getStaticPaths = async () => {
  const response = await axios.get("http://localhost:3000/api/users/all")
  const users = response.data
  const paths = users.map((user) => ({
    params: {
      username:user.username.toString().toLowerCase()
    }
  }))
  
  return{
    paths:paths,
    fallback:false
  }
}

export const getStaticProps = async (context) => {
  const username = context.params?.username
  const session = await getSession(context)
  const response = await axios.get(`http://localhost:3000/api/users/${username}`)
  const user = response.data
  return {
    props: { 
      user:user,
    },
  }
}

function Profile({user}) {
  const { data, error } = useSWR('/api/art', fetcher)
  const {data:session} = useSession()
  const isNative = session ? (user.email === session.user.email ? true:false):false
  const router = useRouter()
  return (
    <Container>
      <h1>User Profile</h1>
      <hr />
      <div
      style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-between",
        fontFamily: 'Inria Sans, sans-serif'
      }}
      >
        <div
      style={{
        display:"flex",
        flexDirection:"row",
        gap:"20px"
        
      }}
      >
        <Image src={user.image} alt='image' width={"120px"} height={"120px"} style={{borderRadius:"100px"}}/>
      <div>
        <div style={{
          display:"flex",
          flexDirection:"column",
          
        }}>
          <h3>{user.name}</h3>
          <p><b>@{user.username}</b></p>
        </div>
        <p>If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced.</p>
      </div>
      </div>
      <div>   
        {isNative ? <Button className={bstyles.outlineDark} onClick={() => router.push("/profile/edit")}>Edit Profile</Button>:<></>}
      </div>
      </div>
      <br />
      <hr />
      <h5>My Favorites</h5>
            <div className={styles.artgrid}>
    {
      data ? data.map((museum,index) => (
        <div key={index} className={styles.card}>
          <ArtCard topHidden p={museum.name} href={`/painting/${museum.id}`} image={`/painting/${museum.image}.jpg`}/>
        </div>
      )): error ? <>Error</>:<></>
    }
    </div>

    </Container>
  )
}

export default Profile