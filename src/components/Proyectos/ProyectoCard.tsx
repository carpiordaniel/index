import styles from './Proyectos.module.css'
import type { ClienteData } from '../../data/proyectos'

export default function ClienteCard({ imgSrc, alt, bgColor, name, industry }: ClienteData) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLogo} style={{ backgroundColor: bgColor }}>
        <img src={imgSrc} alt={alt} />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardIndustry}>{industry}</p>
      </div>
    </div>
  )
}
