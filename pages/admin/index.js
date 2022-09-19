import Link from 'next/link'
import React from 'react'

function Admin() {
  return (
    <div style={{padding:"20px"}}>
      <h1>Admin</h1>
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