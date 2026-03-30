import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IaOperativaForm } from './IaOperativaForm'

const mockMutate = vi.fn()
const mockPush = vi.fn()

vi.mock('@/trpc/client', () => ({
  trpc: {
    lead: {
      captureIaOperativa: {
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

describe('IaOperativaForm', () => {
  it('renders 6 form fields', () => {
    render(<IaOperativaForm />)
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email corporativo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Empresa/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Rol \/ Cargo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Industria/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Descripción del proceso/i)).toBeInTheDocument()
  })

  it('renders the submit button with CTA text', () => {
    render(<IaOperativaForm />)
    expect(
      screen.getByRole('button', { name: /Validá tu proceso — es gratis/i }),
    ).toBeInTheDocument()
  })

  it('renders the industry select with options', () => {
    render(<IaOperativaForm />)
    const select = screen.getByLabelText(/Industria/i)
    expect(select.tagName.toLowerCase()).toBe('select')
    expect(screen.getByRole('option', { name: 'Finanzas' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Logística' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Salud' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Seguros' })).toBeInTheDocument()
  })

  it('renders the privacy note', () => {
    render(<IaOperativaForm />)
    expect(screen.getByText(/Solo usamos tu email para responderte/i)).toBeInTheDocument()
  })

  it('shows validation errors on empty submit', async () => {
    render(<IaOperativaForm />)
    await userEvent.click(
      screen.getByRole('button', { name: /Validá tu proceso — es gratis/i }),
    )
    expect(screen.getByText(/El nombre es obligatorio/i)).toBeInTheDocument()
    expect(screen.getByText(/Ingresá un email válido/i)).toBeInTheDocument()
    expect(screen.getByText(/La empresa es obligatoria/i)).toBeInTheDocument()
    expect(mockMutate).not.toHaveBeenCalled()
  })

  it('calls mutation with required fields on valid submit', async () => {
    render(<IaOperativaForm />)
    await userEvent.type(screen.getByLabelText(/Nombre completo/i), 'Ana López')
    await userEvent.type(screen.getByLabelText(/Email corporativo/i), 'ana@corp.com')
    await userEvent.type(screen.getByLabelText(/Empresa/i), 'Corp SRL')
    await userEvent.click(
      screen.getByRole('button', { name: /Validá tu proceso — es gratis/i }),
    )
    expect(mockMutate).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'Ana López',
        email: 'ana@corp.com',
        company: 'Corp SRL',
      }),
    )
  })

  it('has data-cta attribute on submit button', () => {
    render(<IaOperativaForm />)
    const btn = screen.getByRole('button', { name: /Validá tu proceso — es gratis/i })
    expect(btn).toHaveAttribute('data-cta', 'ia-operativa-form-submit')
  })

  it('process description accepts text up to 500 chars', () => {
    render(<IaOperativaForm />)
    const textarea = screen.getByLabelText(/Descripción del proceso/i)
    expect(textarea).toHaveAttribute('maxLength', '500')
  })
})
