'use client'

import { useState } from 'react'
import { trpc } from '@/trpc/client'
import type { ContactInput } from '@/server/api/routers/contact'

export type FormErrors = Partial<Record<keyof ContactInput, string>>

export interface UseContactFormReturn {
  formData: ContactInput
  errors: FormErrors
  isSubmitting: boolean
  isSuccess: boolean
  submitError: string | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  resetForm: () => void
}

const initialFormData: ContactInput = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  service: undefined,
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactInput>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const mutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setIsSuccess(true)
      setSubmitError(null)
      setFormData(initialFormData)
    },
    onError: (error) => {
      setSubmitError(error.message || 'Ocurrió un error. Por favor, intentá de nuevo.')
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
        if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres'
        break
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email inválido'
        break
      case 'message':
        if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres'
        break
    }
    return undefined
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value || undefined }))

    // Clear error on change
    if (errors[name as keyof ContactInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    // Clear success/error state on new input
    if (isSuccess) setIsSuccess(false)
    if (submitError) setSubmitError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all required fields
    const newErrors: FormErrors = {}
    const nameError = validateField('name', formData.name)
    const emailError = validateField('email', formData.email)
    const messageError = validateField('message', formData.message)

    if (nameError) newErrors.name = nameError
    if (emailError) newErrors.email = emailError
    if (messageError) newErrors.message = messageError

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    mutation.mutate(formData)
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setErrors({})
    setIsSuccess(false)
    setSubmitError(null)
  }

  return {
    formData,
    errors,
    isSubmitting: mutation.isPending,
    isSuccess,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
