import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.logo}><strong>carpiordaniel</strong></li>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mi</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#clientes">Clientes</a></li>
      </ul>
    </nav>
  )
}
