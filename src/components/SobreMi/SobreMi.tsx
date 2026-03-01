import styles from './SobreMi.module.css'

export default function SobreMi() {
  return (
    <section className={styles.sectionSobreMi}>
      <div id="sobre-mi" className={styles.sobreMi}>
        <div className={styles.tituloSobreMi}>
          <p>Acerca de mi</p>
        </div>
        <div className={styles.textoSobreMi}>
          <p>Soy Daniel, Ingeniero de Software con más de 3 años ayudando a empresas y emprendedores a convertir sus ideas en productos digitales: sitios web, aplicaciones móviles y sistemas que automatizan tareas usando inteligencia artificial.</p>
          <p>Me encargo de todo el proceso — de cómo se verá hasta que funcione y esté disponible para tus usuarios. No necesitas saber de tecnología para trabajar conmigo; me adapto a ti y te explico cada paso con claridad.</p>
          <p>Lo que más me apasiona es entender el problema real antes de proponer cualquier solución. No entrego tecnología por entregar: entrego resultados — más ventas, menos tiempo perdido, procesos que fluyen solos.</p>
          <p>Me mantengo actualizado en inteligencia artificial y automatización para que tú tengas acceso a herramientas de última generación, sin necesitar entenderlas por dentro.</p>
        </div>
      </div>
    </section>
  )
}
