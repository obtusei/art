import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Home() {
  const subline = "Nepali art is a reflection of the country’s culture and soul, with an artistic history spanning over two millennia.  Art History Tracker occupies a unique position in a web-based platform because of its focus on Nepali artistic practices and traditions.  Here we house a collection of Nepali art that covers both its religious traditions and more recent secular manifestations. "
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.main}>
        <p className={styles.caption}>Explore Nepali Art</p>
        <h1 className={styles.headline}>The largest collection of Nepali Art</h1>
        <p className={styles.subheadline}>{subline}</p>
        <div>
          <Link href="/about">Read more about us</Link> <br/><br/>
          <Link href="/arts" className={styles.mainButton}>Discover Arts</Link>
        </div>
      </div>
      </div>
    </div>
  )
}
