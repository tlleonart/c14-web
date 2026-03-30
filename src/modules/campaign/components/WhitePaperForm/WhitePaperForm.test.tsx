import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WhitePaperForm } from './WhitePaperForm'

const mockMutate = vi.fn()
const mockPush = vi.fn()

vi.mock('@/trpc/client', () => ({
  trpc: {
    lead: {
      captureWhitePaper: {
        useMutation: () => ({
          mutate: mockMutate,
          isPending: false,
        }),
      },
    },
  },
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

describe('WhitePaperForm', () => {
  it('renders exactly 4 form fields', () => {
    render(<WhitePaperForm />)
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email corporativo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Empresa/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Cargo/i)).toBeInTheDocument()
  })

  it('renders the submit button with CTA text', () => {
    render(<WhitePaperForm />)
    expect(screen.getByRole('button', { name: /Quiero la guía/i })).toBeInTheDocument()
  })

  it('renders the card title', () => {
    render(<WhitePaperForm />)
    expect(screen.getByText('Descargá la guía gratis')).toBeInTheDocument()
  })

  it('renders the microcopy below submit', () => {
    render(<WhitePaperForm />)
    expect(screen.getByText(/Gratis\. Sin compromiso\./i)).toBeInTheDocument()
  })

  it('renders trust signals', () => {
    render(<WhitePaperForm />)
    expect(screen.getByText(/Descarga inmediata por email/i)).toBeInTheDocument()
    expect(screen.getByText(/Sin spam/i)).toBeInTheDocument()
    expect(screen.getByText(/Solo emails corporativos/i)).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    render(<WhitePaperForm />)
    await userEvent.click(screen.getByRole('button', { name: /Quiero la guía/i }))
    expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument()
    expect(screen.getByText(/Ingresá un email válido/i)).toBeInTheDocument()
    expect(screen.getByText(/La empresa es obligatoria/i)).toBeInTheDocument()
    expect(screen.getByText(/El cargo es obligatorio/i)).toBeInTheDocument()
    expect(mockMutate).not.toHaveBeenCalled()
  })

  it('calls mutation with correct data on valid submit', async () => {
    render(<WhitePaperForm />)
    await userEvent.type(screen.getByLabelText(/Nombre completo/i), 'Ana López')
    await userEvent.type(screen.getByLabelText(/Email corporativo/i), 'ana@empresa.com')
    await userEvent.type(screen.getByLabelText(/Empresa/i), 'Empresa SA')
    await userEvent.type(screen.getByLabelText(/Cargo/i), 'CTO')
    await userEvent.click(screen.getByRole('button', { name: /Quiero la guía/i }))
    expect(mockMutate).toHaveBeenCalledWith({
      fullName: 'Ana López',
      email: 'ana@empresa.com',
      company: 'Empresa SA',
      role: 'CTO',
    })
  })

  it('has data-cta attribute on submit button', () => {
    render(<WhitePaperForm />)
    const btn = screen.getByRole('button', { name: /Quiero la guía/i })
    expect(btn).toHaveAttribute('data-cta', 'white-paper-form-submit')
  })
})
