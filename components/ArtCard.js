import Link from "next/link"
import styles from "../styles/artcard.module.css"
export default function ArtCard({h,p,topHidden=false,botHidden=false,href,image}){
    return (
        <Link href={href}>
            <div className={styles.card} style={{backgroundImage:`url('./${image}')`}}>
            <div className={styles.contents}>
                <h4>{h}{"→"}</h4> <br />
                <p style={{display:botHidden ? "none":"block", fontSize:"24px"}}>{p}</p>
            </div>
            </div>
        </Link>
    )
}