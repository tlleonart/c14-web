import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuditoriaForm } from './AuditoriaForm'

const mockMutate = vi.fn()
const mockPush = vi.fn()

vi.mock('@/trpc/client', () => ({
  trpc: {
    lead: {
      captureAuditoria: {
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

describe('AuditoriaForm', () => {
  it('renders exactly 3 form fields', () => {
    render(<AuditoriaForm />)
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email corporativo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Empresa/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/Rol/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/Industria/i)).not.toBeInTheDocument()
  })

  it('renders the submit button with CTA text', () => {
    render(<AuditoriaForm />)
    expect(
      screen.getByRole('button', { name: /Quiero mi auditoría gratuita/i }),
    ).toBeInTheDocument()
  })

  it('renders the card title', () => {
    render(<AuditoriaForm />)
    expect(screen.getByText('Pedí tu auditoría')).toBeInTheDocument()
  })

  it('renders the microcopy below submit', () => {
    render(<AuditoriaForm />)
    expect(screen.getByText(/Respondemos en menos de 48 horas/i)).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    render(<AuditoriaForm />)
    await userEvent.click(screen.getByRole('button', { name: /Quiero mi auditoría gratuita/i }))
    expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument()
    expect(screen.getByText(/Ingresá un email válido/i)).toBeInTheDocument()
    expect(screen.getByText(/La empresa es obligatoria/i)).toBeInTheDocument()
    expect(mockMutate).not.toHaveBeenCalled()
  })

  it('calls mutation with correct data on valid submit', async () => {
    render(<AuditoriaForm />)
    await userEvent.type(screen.getByLabelText(/Nombre completo/i), 'Juan García')
    await userEvent.type(screen.getByLabelText(/Email corporativo/i), 'juan@empresa.com')
    await userEvent.type(screen.getByLabelText(/Empresa/i), 'Empresa SA')
    await userEvent.click(screen.getByRole('button', { name: /Quiero mi auditoría gratuita/i }))
    expect(mockMutate).toHaveBeenCalledWith({
      fullName: 'Juan García',
      email: 'juan@empresa.com',
      company: 'Empresa SA',
    })
  })

  it('has data-cta attribute on submit button', () => {
    render(<AuditoriaForm />)
    const btn = screen.getByRole('button', { name: /Quiero mi auditoría gratuita/i })
    expect(btn).toHaveAttribute('data-cta', 'auditoria-form-submit')
  })
})
