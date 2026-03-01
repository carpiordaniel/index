import styles from './ContactModal.module.css'
import { useContactForm } from '../../hooks/useContactForm'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { form, errors, sendStatus, handleChange, handleSubmit, reset } = useContactForm()

  function handleClose() {
    reset()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.formulario} role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <div className={styles.form}>
        <button
          type="button"
          className={styles.cerrarForm}
          onClick={handleClose}
          aria-label="Cerrar formulario"
        >
          ✕
        </button>

        <div className={styles.formularioContact}>
          {sendStatus === 'success' ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✓</div>
              <h3>¡Mensaje enviado!</h3>
              <p>Gracias por escribirme. Te responderé en menos de 24 horas.</p>
              <button type="button" className={styles.btnCerrarSuccess} onClick={handleClose}>
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.encabezado}>
                <span className={styles.badge}>Contacto</span>
                <p id="modal-titulo" className={styles.tituloForm}>Hablemos de tu proyecto</p>
                <p className={styles.subtituloForm}>Cuéntame tu idea y te respondo en menos de 24 horas.</p>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                />
                {errors.nombre && <span id="error-nombre" className={styles.errorMsg}>{errors.nombre}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="correo">Correo</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.correo}
                  onChange={handleChange}
                  aria-invalid={!!errors.correo}
                  aria-describedby={errors.correo ? 'error-correo' : undefined}
                />
                {errors.correo && <span id="error-correo" className={styles.errorMsg}>{errors.correo}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="¿En qué puedo ayudarte?"
                  value={form.mensaje}
                  onChange={handleChange}
                  aria-invalid={!!errors.mensaje}
                  aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
                />
                {errors.mensaje && <span id="error-mensaje" className={styles.errorMsg}>{errors.mensaje}</span>}
              </div>

              {sendStatus === 'error' && (
                <p className={styles.errorGeneral}>Error al enviar. Intenta de nuevo.</p>
              )}

              <button type="submit" className={styles.btnEnviar} disabled={sendStatus === 'loading'}>
                {sendStatus === 'loading' ? (
                  'Enviando…'
                ) : (
                  <><img src="/icon/send-message.png" alt="" /> Enviar mensaje</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
