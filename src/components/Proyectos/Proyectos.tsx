import { useState, useRef, useEffect } from 'react'
import ClienteCard from './ProyectoCard'
import styles from './Proyectos.module.css'
import { clientes } from '../../data/proyectos'

const GAP = 20
const INTERVAL_MS = 1000

export default function Clientes() {
  const [index, setIndex] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [visible, setVisible] = useState(3)
  const [paused, setPaused] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)
  const maxIndexRef = useRef(0)

  useEffect(() => {
    function measure() {
      const v = window.innerWidth <= 680 ? 1 : window.innerWidth <= 900 ? 2 : 3
      setVisible(v)
      if (!viewportRef.current) return
      const vpWidth = viewportRef.current.offsetWidth
      setItemWidth((vpWidth - GAP * (v - 1)) / v)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const maxIndex = Math.max(clientes.length - visible, 0)
  maxIndexRef.current = maxIndex

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  // Auto-scroll: el ref siempre tiene el maxIndex más reciente,
  // así el interval no necesita reiniciarse cuando cambia visible.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndexRef.current ? 0 : i + 1))
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused])

  function goTo(i: number) {
    setIndex(i)
    setPaused(true)
    setTimeout(() => setPaused(false), INTERVAL_MS * 4)
  }

  function prev() { goTo(index <= 0 ? maxIndexRef.current : index - 1) }
  function next() { goTo(index >= maxIndexRef.current ? 0 : index + 1) }

  return (
    <section className={styles.misProyectos} id="clientes">
      <div className={styles.titulo}>
        <h2>Empresas para las que he trabajado</h2>
      </div>

      <div
        className={styles.carruselWrapper}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className={styles.navBtn} onClick={prev} aria-label="Anterior">‹</button>

        <div className={styles.carruselViewport} ref={viewportRef}>
          <div
            className={styles.carruselTrack}
            style={{ transform: `translateX(${-index * (itemWidth + GAP)}px)` }}
          >
            {clientes.map((c) => (
              <div
                key={c.href}
                className={styles.carruselItem}
                style={{ width: itemWidth > 0 ? itemWidth : undefined }}
              >
                <ClienteCard {...c} />
              </div>
            ))}
          </div>
        </div>

        <button className={styles.navBtn} onClick={next} aria-label="Siguiente">›</button>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a grupo ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
