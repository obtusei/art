import axios from "axios"
import Link from "next/link"
import Image from "next/link"
import { Button,Card } from "react-bootstrap"
import useSWR, { mutate } from "swr"
import styles from "../styles/artcard.module.css"
import bstyles from "../styles/components/Button.module.css"
import { useSession } from "next-auth/react"
import { HeartIcon, SaveIcon } from "./Icons"

const fetcher = url => fetch(url).then(r => r.json())
export default function ArtCard({name,id,image,pathname}){

    const savedURL = `/api/users/saved/isSaved?check=${pathname}&id=${id}`
    const favURL = `/api/users/fav/isFav?check=${pathname}&id=${id}`
    const {data:isSaved} = useSWR(savedURL,fetcher)
    const {data:isFav} = useSWR(favURL,fetcher)
    const {data:session} = useSession()
    const handleFav = (e) => {
        e.preventDefault()
        if (isFav && isFav.didFav){
            
            axios.delete(`/api/users/fav/${pathname}?id=${id}`,{withCredentials:true})
            .then((res) => {
                mutate(favURL)
                mutate(`/api/users/fav/${pathname}`)
            })
            .catch((err) => {
                alert("ERRORO")
            })

        }else{
            axios.post(`/api/users/fav/${pathname}`,{id:id},{withCredentials:true})
            .then((res) => {
                mutate(favURL)
                mutate(`/api/users/fav/${pathname}`)
            })
            .catch((err) => {
                alert("ERRORO")
            })
        }
    }
    
    const handleSave = (e) => {
        e.preventDefault()
        if (isSaved && isSaved.didSave){

            axios.delete(`/api/users/saved/${pathname}?id=${id}`,{withCredentials:true})
            .then((res) => {
                mutate(savedURL)
                mutate(`/api/users/saved/${pathname}`)
            })
            .catch((err) => {
                alert("ERRORO")
            })
        }else{
            axios.post(`/api/users/saved/${pathname}`,{id:id},{withCredentials:true})
            .then((res) => {
                mutate(savedURL)
                mutate(`/api/users/saved/${pathname}`)
            })
            .catch((err) => {
                alert("ERRORO")
            })
        }
    }

    return (
        <Link href={`/${pathname}s/${id}`}>
        <Card style={{ width: '250px',textAlign:"left" }}>
            <Card.Img variant="top" src={image != null ? `./${image}`:"./img1.jpg"} height={"250px"} style={{objectFit:"cover"}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {
                    session ? <><Button className={bstyles.defaultDark} onClick={handleFav}><HeartIcon isDark={isFav ? !isFav.didFav:false}/></Button>
                    <Button className={bstyles.defaultDark} onClick={handleSave}><SaveIcon isDark={isSaved ? !isSaved.didSave:false}/></Button></>:
                    <></>
                }
            </Card.Body>
        </Card>
        </Link>
    )
}