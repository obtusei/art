import Link from "next/link"
import styles from "../styles/artcard.module.css"
export default function ArtCard({topHidden=false,href}){
    return (
        <Link href={href}>
            <div className={styles.card}>
            <div className={styles.contents}>
            <h4 style={{display:topHidden ? "block":"block"}}>Mandala</h4> <br />
            <p>1200 items</p>
            </div>
            </div>
        </Link>
    )
}