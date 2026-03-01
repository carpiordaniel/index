import styles from './Servicios.module.css'
import type { ServicioData } from '../../data/servicios'

type ServicioCardProps = ServicioData & { onContactClick: () => void }

export default function ServicioCard({ icon, alt, title, description, ctaText, onContactClick }: ServicioCardProps) {
  return (
    <div className={styles.detalleServicio}>
      <figure>
        <img src={icon} alt={alt} />
      </figure>
      <div className={styles.titulo}>
        <h3>{title}</h3>
      </div>
      <div className={styles.texto}>
        <p>
          {description}{' '}
          <button className={styles.ctaInline} onClick={onContactClick}>{ctaText}</button>
        </p>
      </div>
    </div>
  )
}
