import styles from "../styles/artcard.module.css"
export default function ArtCard(){
    return (
        <div>
            <div className={styles.card}>
            <div className={styles.contents}>
            <div>Mandala</div>
            <div>1200 items</div>
            </div>
            </div>
        </div>
    )
}