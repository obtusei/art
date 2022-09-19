import Link from 'next/link'
import React from 'react'
import safeJsonStringify from 'safe-json-stringify'
import prisma from "../../libs/prisma"
import {getSession} from "next-auth/react"

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const user = await prisma.user.findUnique({
    where:{
      email:session.user.email
    }
  })
  const userData = JSON.parse(safeJsonStringify(user))
  return {
    props: {
      role:userData.role
    }, // will be passed to the page component as props
  }
}

function Admin({role}) {
  
  if (role === "USER"){
    return (
      <div>
        <p>You are not an admin</p>
      </div>
    )
  }
  return (
    <div style={{padding:"20px"}}>
      <h1>Admin | {role}</h1>
      <hr />
      <div>
        <h3><Link href={"/admin/museum"}>Add Museums</Link></h3> <br />
        <h3><Link href={"/admin/artist"}>Add Artists</Link></h3><br />
        <h3><Link href={"/admin/art"}>Add Arts</Link></h3><br />
        <h3><Link href={"/admin/users"}>See Users</Link></h3><br />
      </div>
      
    </div>
  )
}

export default Admin