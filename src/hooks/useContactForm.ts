import { useState } from 'react'

export interface FormState {
  nombre: string
  correo: string
  mensaje: string
}

export interface FormErrors {
  nombre?: string
  correo?: string
  mensaje?: string
}

export type SendStatus = 'idle' | 'loading' | 'success' | 'error'

const INITIAL_FORM: FormState = { nombre: '', correo: '', mensaje: '' }

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.nombre.trim()) errors.nombre = 'Ingresa tu nombre'
  if (!form.correo.trim()) errors.correo = 'Ingresa tu correo'
  if (!form.mensaje.trim()) errors.mensaje = 'Escribe tu mensaje'
  return errors
}

export function useContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validation = validate(form)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setSendStatus('loading')
    const mensajeFinal = `Hola Daniel, te saluda ${form.nombre}\nTe escribo porque: ${form.mensaje}\n\nMi correo de contacto es: ${form.correo}`

    try {
      const res = await fetch('https://formsubmit.co/ajax/carpiordaniel@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: 'Correo desde el portafolio', message: mensajeFinal }),
      })
      const data = await res.json()
      setSendStatus(data.success ? 'success' : 'error')
    } catch {
      setSendStatus('error')
    }
  }

  function reset() {
    setForm(INITIAL_FORM)
    setErrors({})
    setSendStatus('idle')
  }

  return { form, errors, sendStatus, handleChange, handleSubmit, reset }
}
