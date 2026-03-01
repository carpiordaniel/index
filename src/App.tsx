import { useState } from 'react'
import Hero from './components/Hero/Hero'
import SobreMi from './components/SobreMi/SobreMi'
import Servicios from './components/Servicios/Servicios'
import Proyectos from './components/Proyectos/Proyectos'
import Footer from './components/Footer/Footer'
import ContactModal from './components/ContactModal/ContactModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="container-general">
      <Hero onContactClick={() => setModalOpen(true)} />
      <SobreMi />
      <Servicios onContactClick={() => setModalOpen(true)} />
      <Proyectos />
      <Footer onContactClick={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
