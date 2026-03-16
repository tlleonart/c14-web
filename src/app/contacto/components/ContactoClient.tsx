'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { ContactForm } from '@/modules/contact/components/ContactForm'

function ContactoForm() {
  const searchParams = useSearchParams()
  const defaultSource = searchParams.get('source') || undefined

  return <ContactForm defaultSource={defaultSource} />
}

export function ContactoClient() {
  return (
    <Suspense fallback={<ContactForm />}>
      <ContactoForm />
    </Suspense>
  )
}
