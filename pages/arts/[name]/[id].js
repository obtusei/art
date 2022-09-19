import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function Art() {
  return (
    <div>
      <h1>The Lady Finger</h1>
      <Image src='https://www.w3schools.com/howto/img_nature.jpg' alt='image'/>
      <br/>
      <hr/>
      <p><span>Title: </span>Lady Finger</p>
      <p><span>Artist: </span><Link href={`/artists/abhi`}>Abhishek Bhatta</Link></p>
      <p><span>Musuems: </span><Link href={`/museums/abhi`}>Abhishek Bhatta</Link></p>
      <p><span>Descriptions: </span>lOREM iPSUM</p>

    </div>
  )
}

export default Art