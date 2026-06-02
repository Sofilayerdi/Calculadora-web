import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('muestra el label correctamente', () => {
    render(<Button label="7" onClick={() => {}} />)
    expect(screen.getByRole('button', { name: '7' })).toBeInTheDocument()
  })

  it('llama onClick al hacer click', async () => {
    const onClick = vi.fn()
    render(<Button label="+" onClick={onClick} />)

    await userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('aplica la clase correcta según el variant', () => {
    render(<Button label="+" onClick={() => {}} variant="operator" />)
    const btn = screen.getByRole('button')
    expect(btn.className).toMatch(/operator/)
  })

  it('tiene aria-label para accesibilidad', () => {
    render(<Button label="=" onClick={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', '=')
  })
})