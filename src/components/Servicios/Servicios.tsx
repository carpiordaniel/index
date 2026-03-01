import ServicioCard from './ServicioCard'
import styles from './Servicios.module.css'
import { servicios } from '../../data/servicios'

interface ServiciosProps {
  onContactClick: () => void
}

export default function Servicios({ onContactClick }: ServiciosProps) {
  return (
    <section className={styles.servicios} id="servicios">
      <div className={styles.serviciosOfrecidos}>
        <div className={styles.detalleServicioTitulo}>
          <h2>Servicios</h2>
        </div>
        {servicios.map((s) => (
          <ServicioCard key={s.title} {...s} onContactClick={onContactClick} />
        ))}
      </div>
    </section>
  )
}
