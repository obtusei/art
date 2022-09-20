import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { useRouter } from 'next/router'
const fetcher = url => fetch(url).then(r => r.json())
function Art() {
  const router = useRouter();
  const { id } = router.query;
  const {data,error} = useSWR(`/api/art/${id}`,fetcher)
  if (!data){
    return <></>
  }
  else if (error){
    return <>Error</>
  }
  else{
    return (
    <div>
      <h1>{data.name}</h1>
      <Image src={`/painting/${data.image}.jpg`} width="500px" height="500px" alt='image'/>
      <br/>
      <hr/>
      <p><span>Title: </span>{data.name}</p>
      <p><span>Artist: </span><Link href={`/artists/${data.artist.id}`}>{data.artist.name}</Link></p>
      <p><span>Musuems: </span><Link href={`/museums/${data.museum.id}`}>{data.museum.name}</Link></p>
      <p><span>Descriptions: </span>{data.description}</p>

    </div>
  )
  }
}

export default Art