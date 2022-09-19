import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


function Artist() {
  return (
    <div>
      <Link href={"/artists"}>Go back</Link><br />
      <div>
        <img src={'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'} width={"120px"} height={"120px"} alt='name'/>
      </div>
      <h1>Abhishek Bhatta</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, perspiciatis ullam pariatur nobis dicta ab neque repellat, non sapiente delectus eum nulla expedita quidem esse, dolore recusandae optio animi a.</p>
    </div>
  )
}

export default Artist