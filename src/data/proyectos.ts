export interface ClienteData {
  imgSrc: string
  alt: string
  bgColor: string
  name: string
  industry: string
  href: string
}

const base = import.meta.env.BASE_URL

export const clientes: ClienteData[] = [
  {
    href: 'https://www.instagram.com/yogurtpersa/',
    imgSrc: `${base}img/yogurtpersa.jpg`,
    alt: 'Yogurt Persa',
    bgColor: '#FCE4EC',
    name: 'Yogurt Persa',
    industry: 'Alimentos & Franquicia',
  },
  {
    href: 'https://tecnologicoargos.edu.ec/',
    imgSrc: `${base}img/argos.svg`,
    alt: 'Tecnológico Argos',
    bgColor: '#F0F4FF',
    name: 'Tecnológico Argos',
    industry: 'Educación Superior',
  },
  {
    href: 'https://www.gizlocorp.com/',
    imgSrc: `${base}img/gizlo.svg`,
    alt: 'Gizlo',
    bgColor: '#0A2540',
    name: 'Gizlo',
    industry: 'Tecnología & Software',
  },
  {
    href: 'https://comisariatodelconstructor.com/',
    imgSrc: `${base}img/comisariato.webp`,
    alt: 'Comisariato del Constructor',
    bgColor: '#1C1C1C',
    name: 'Comisariato del Constructor',
    industry: 'Materiales de Construcción',
  },
  {
    href: 'https://web.apptelink.com/',
    imgSrc: `${base}img/apptelink.png`,
    alt: 'Apptelink',
    bgColor: '#0D0D0D',
    name: 'Apptelink',
    industry: 'Desarrollo de Apps',
  },
  {
    href: 'https://www.prirodagreen.com/',
    imgSrc: `${base}img/prirodagreen.png`,
    alt: 'Priroda Green',
    bgColor: '#D56853',
    name: 'Priroda Green',
    industry: 'Sostenibilidad & Medio Ambiente',
  },
  {
    href: 'https://www.dlaury.com/',
    imgSrc: `${base}img/logo_dlaury.png`,
    alt: "D'Laury",
    bgColor: '#141C3A',
    name: "D'Laury",
    industry: 'Moda & E-commerce',
  },
  {
    href: 'https://artemiamarina.com/',
    imgSrc: `${base}img/artemiamarina.png`,
    alt: 'Artemia Marina',
    bgColor: '#5850C5',
    name: 'Artemia Marina',
    industry: 'Acuicultura & Biotecnología',
  },
  {
    href: 'https://telmefast.com/',
    imgSrc: `${base}img/telmefast.png`,
    alt: 'TelmeFast',
    bgColor: '#1AA6AB',
    name: 'TelmeFast',
    industry: 'Telecomunicaciones',
  },
  {
    href: 'https://www.dimongreen.com.ec/',
    imgSrc: `${base}img/dimongreen.png`,
    alt: 'Dimon Green',
    bgColor: '#36393D',
    name: 'Dimon Green',
    industry: 'Agricultura & Exportación',
  },
  {
    href: 'https://www.kamilnova.com/',
    imgSrc: `${base}img/kamilnova.png`,
    alt: 'Kamil Nova',
    bgColor: '#246038',
    name: 'Kamil Nova',
    industry: 'Moda & Lifestyle',
  },
]
