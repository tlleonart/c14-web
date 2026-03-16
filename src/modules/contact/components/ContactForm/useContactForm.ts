'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import type { ContactInput } from '@/server/api/routers/contact'

export type FormErrors = Partial<Record<keyof ContactInput | 'honeypot', string>>

export interface UseContactFormReturn {
  formData: ContactInput
  honeypot: string
  errors: FormErrors
  isSubmitting: boolean
  isSuccess: boolean
  submitError: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  resetForm: () => void
}

const initialFormData: ContactInput = {
  name: '',
  lastName: '',
  email: '',
  company: '',
  position: '',
  phone: '',
  message: '',
  source: '',
}

interface UseContactFormOptions {
  initialSource?: string
}

export function useContactForm(options: UseContactFormOptions = {}): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactInput>({
    ...initialFormData,
    source: options.initialSource || '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const mutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setIsSuccess(true)
      setSubmitError(null)
      setFormData({ ...initialFormData })
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'contact_form',
        })
      }
    },
    onError: (error) => {
      setSubmitError(
        'No pudimos enviar tu mensaje. Intentá de nuevo o escribinos a info@carbono-14.net.'
      )
      if (error.data?.zodError?.fieldErrors) {
        const fieldErrors = error.data.zodError.fieldErrors as Record<string, string[]>
        const newErrors: FormErrors = {}
        for (const [field, messages] of Object.entries(fieldErrors)) {
          if (messages && messages.length > 0) {
            newErrors[field as keyof ContactInput] = messages[0]
          }
        }
        setErrors(newErrors)
      }
    },
  })

  const validateField = (name: keyof ContactInput, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value || value.length < 2) return 'El nombre es obligatorio'
        break
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido'
        break
      case 'company':
        if (!value || value.length < 2) return 'La empresa es obligatoria'
        break
      case 'message':
        if (!value || value.length < 10) return 'El mensaje debe tener al menos 10 caracteres'
        break
    }
    return undefined
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    if (name === 'website') {
      setHoneypot(value)
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value || undefined }))

    if (errors[name as keyof ContactInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    if (isSuccess) setIsSuccess(false)
    if (submitError) setSubmitError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (honeypot) {
      setIsSuccess(true)
      return
    }

    const newErrors: FormErrors = {}
    const nameError = validateField('name', formData.name)
    const emailError = validateField('email', formData.email)
    const companyError = validateField('company', formData.company || '')
    const messageError = validateField('message', formData.message)

    if (nameError) newErrors.name = nameError
    if (emailError) newErrors.email = emailError
    if (companyError) newErrors.company = companyError
    if (messageError) newErrors.message = messageError

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    mutation.mutate(formData)
  }

  const resetForm = () => {
    setFormData({ ...initialFormData })
    setHoneypot('')
    setErrors({})
    setIsSuccess(false)
    setSubmitError(null)
  }

  return {
    formData,
    honeypot,
    errors,
    isSubmitting: mutation.isPending,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
