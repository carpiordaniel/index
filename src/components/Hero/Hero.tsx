import Navbar from '../Navbar/Navbar'
import styles from './Hero.module.css'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="inicio">
      <main className={styles.main}>
        <div className={styles.hero}>
          <Navbar />

          <div className={styles.contentHero}>
            <div className={styles.textoMain}>
              <div className={styles.texto}>
                <p className={styles.subtitulo}>Hola, soy Daniel Carpio</p>
                <p className={styles.titular}><strong>Convierto tus ideas en software que genera resultados</strong></p>
                <p className={styles.especialidad}>Web · Mobile · Automatización con IA</p>
                <button onClick={onContactClick}>Iniciar proyecto</button>
                <div className={styles.credibilidad}>
                  <div className={styles.stat}>
                    <strong>+3</strong>
                    <span>años de experiencia</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <strong>+20</strong>
                    <span>proyectos entregados</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.stat}>
                    <strong>100%</strong>
                    <span>clientes satisfechos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imagenMain}>
              <figure>
                <img src="/img/programmer.png" alt="imagen hero programmer" />
              </figure>
            </div>
          </div>

          <div className={styles.circle} />

          <div className={styles.redesSociales}>
            <div className={styles.redes}>
              <figure>
                <a href="https://www.linkedin.com/in/carpiordaniel/" target="_blank" rel="noopener noreferrer">
                  <img src="/icon/icon_logo-linkedin.png" alt="LinkedIn" />
                </a>
              </figure>
              <figure>
                <button
                  onClick={onContactClick}
                  aria-label="Enviar mensaje"
                  className={styles.btnRed}
                >
                  <img src="/icon/icon-message.png" alt="" />
                </button>
              </figure>
              <figure>
                <a href="https://github.com/carpiordaniel" target="_blank" rel="noopener noreferrer">
                  <img src="/icon/icon_github.png" alt="GitHub" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
