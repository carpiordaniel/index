export interface ServicioData {
  icon: string
  alt: string
  title: string
  description: string
  ctaText: string
}

export const servicios: ServicioData[] = [
  {
    icon: '/icon/desarrollo-web.png',
    alt: 'icono desarrollo de software',
    title: 'Desarrollo de Software a Medida',
    description: 'Si tienes una idea o necesitas una herramienta digital, la construyo desde cero: tu web, tu app móvil o cualquier sistema personalizado para tu negocio.',
    ctaText: '¡Contáctame ahora!',
  },
  {
    icon: '/icon/mantenimiento-web.png',
    alt: 'icono automatización con IA',
    title: 'Automatización con Inteligencia Artificial',
    description: '¿Hay tareas que tu equipo repite todos los días? Las automatizo usando IA para que tu operación avance sola, ahorrando tiempo y dinero.',
    ctaText: '¡Cuéntame tu caso!',
  },
  {
    icon: '/icon/automatizacion-web.png',
    alt: 'icono consultoría tecnológica',
    title: 'Consultoría Tecnológica',
    description: 'Si no sabes por dónde empezar o tienes un proyecto estancado, te ayudo a aclarar el camino y tomar las decisiones correctas sin perder tiempo ni dinero.',
    ctaText: '¡Contáctame ahora!',
  },
]
