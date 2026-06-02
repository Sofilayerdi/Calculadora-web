import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Keyboard from './Keyboard'

const defaultProps = {
  onNumber: vi.fn(),
  onOperator: vi.fn(),
  onEquals: vi.fn(),
  onClear: vi.fn(),
  onDecimal: vi.fn(),
}

describe('Keyboard', () => {
  it('renderiza los botones del 0 al 9', () => {
    render(<Keyboard {...defaultProps} />)
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByRole('button', { name: String(i) })).toBeInTheDocument()
    }
  })

  it('llama onNumber al presionar un número', async () => {
    const onNumber = vi.fn()
    render(<Keyboard {...defaultProps} onNumber={onNumber} />)

    await userEvent.click(screen.getByRole('button', { name: '5' }))

    expect(onNumber).toHaveBeenCalledWith('5')
  })

  it('llama onOperator al presionar +', async () => {
    const onOperator = vi.fn()
    render(<Keyboard {...defaultProps} onOperator={onOperator} />)

    await userEvent.click(screen.getByRole('button', { name: '+' }))

    expect(onOperator).toHaveBeenCalledWith('+')
  })

  it('llama onEquals al presionar =', async () => {
    const onEquals = vi.fn()
    render(<Keyboard {...defaultProps} onEquals={onEquals} />)

    await userEvent.click(screen.getByRole('button', { name: '=' }))

    expect(onEquals).toHaveBeenCalledTimes(1)
  })

  it('llama onClear al presionar C', async () => {
    const onClear = vi.fn()
    render(<Keyboard {...defaultProps} onClear={onClear} />)

    await userEvent.click(screen.getByRole('button', { name: 'C' }))

    expect(onClear).toHaveBeenCalledTimes(1)
  })
})