import styles from './Footer.module.css'

interface FooterProps {
  onContactClick: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.footerContacto}>
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Cuéntame tu idea y te respondo en menos de 24 horas. Sin compromiso.</p>
          <div className={styles.botonContacto}>
            <button onClick={onContactClick}>
              <img src={`${import.meta.env.BASE_URL}icon/message.png`} alt="" />
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© {new Date().getFullYear()} carpiordaniel | @carpiordaniel</p>
    </footer>
  )
}
