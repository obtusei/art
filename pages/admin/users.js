import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
const fetcher = url => fetch(url).then(r => r.json())
function Users() {
  const router = useRouter()
  const { data, error } = useSWR('/api/jpt', fetcher)

  const deleteUser = async (e) =>{
    
  }
  if (!data) return <></>
  else if (error) return <p>ERROR</p>
  else{
  return (
    <div style={{padding:"20px"}}>
      <button onClick={() => router.back()} style={{backgroundColor:"transparent",color:"red"}}>Go back</button>
      <h1>Users</h1>
      <hr />
      <table>
        <thead>
          <th>SN</th>
          <th>Username</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {
            data.map((user,index) => (
              <tr key={index} >
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button onClick={
                  async () => {
                    const data = {id:user.id}
                    try{
                      const response = await fetch("/api/jpt",{
                        method:"DELETE",
                        body:JSON.stringify(data),
                        headers:{
                          "Content-Type":"application/json"
                        }
                      })
                      const json = await response.json();
                      if(json.error){
                        alert(json.error);
                      }
                      else{
                        alert("Delete successfully");
                        router.reload();
                      }
                    }
                    catch{
                      alert("ERROR aayo")
                    }
                  }
                }>delete</button></td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
    }
}

export default Users