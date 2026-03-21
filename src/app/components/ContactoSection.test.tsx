import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactoSection } from './ContactoSection'

// Mock the useContactForm hook
vi.mock('@/modules/contact/components/ContactForm/useContactForm', () => ({
  useContactForm: () => ({
    formData: { email: '', company: '', message: '' },
    honeypot: '',
    errors: {},
    isSubmitting: false,
    isSuccess: false,
    submitError: null,
    handleChange: vi.fn(),
    handleSubmit: vi.fn((e: { preventDefault: () => void }) => e.preventDefault()),
    resetForm: vi.fn(),
  }),
}))

describe('ContactoSection', () => {
  it('renders section heading', () => {
    render(<ContactoSection />)
    expect(screen.getByText(/Validamos tu proceso/)).toBeInTheDocument()
  })

  it('renders 3 numbered steps', () => {
    render(<ContactoSection />)
    expect(screen.getByText('Completá el formulario')).toBeInTheDocument()
    expect(screen.getByText('Recibís la validación')).toBeInTheDocument()
    expect(screen.getByText('Decidís si continuamos')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<ContactoSection />)
    expect(screen.getByText('info@carbono-14.net')).toBeInTheDocument()
    expect(screen.getByText('Buenos Aires, Argentina')).toBeInTheDocument()
  })

  it('renders form with 3 fields', () => {
    render(<ContactoSection />)
    expect(screen.getByText('Email corporativo')).toBeInTheDocument()
    expect(screen.getByText('Empresa')).toBeInTheDocument()
    expect(screen.getByText(/proceso querés validar/)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactoSection />)
    expect(screen.getByRole('button', { name: /Validar mi proceso/ })).toBeInTheDocument()
  })

  it('has section with id="contacto"', () => {
    render(<ContactoSection />)
    expect(document.getElementById('contacto')).toBeInTheDocument()
  })
})
