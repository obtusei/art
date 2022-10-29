import Link from "next/link"
import Image from "next/link"
import styles from "../styles/artcard.module.css"
export default function ArtCard({h,p,topHidden=false,botHidden=false,href,image}){
    return (
        <Link href={href}>
            <div className={styles.card}>
                <img src={`./${image}`} alt="iamge" width={"250px"} height={"100%"} style={{objectFit:"cover"}}/>        
                <h3 style={{display:botHidden ? "none":"block", fontSize:"18px",fontWeight:"bold"}}>{p}</h3>
            </div>
        </Link>
    )
}