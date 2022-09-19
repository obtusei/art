import { useRouter } from 'next/router'
import React from 'react'

function Users() {
  const router = useRouter()
  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Users</h1>
      <hr />
      {/* <table>
        <thead>
          <th>SN</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  )
}

export default Users