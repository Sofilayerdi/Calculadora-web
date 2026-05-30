import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Display from './Display'

describe('Display', () => {
  it('muestra el valor recibido por props', () => {
    render(<Display value="123" />)
    expect(screen.getByText('123')).toBeInTheDocument()
  })

  it('muestra ERROR cuando el valor es ERROR', () => {
    render(<Display value="ERROR" />)
    expect(screen.getByText('ERROR')).toBeInTheDocument()
  })

  it('muestra 0 como valor inicial', () => {
    render(<Display value="0" />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('puede mostrar hasta 9 caracteres', () => {
    render(<Display value="123456789" />)
    expect(screen.getByText('123456789')).toBeInTheDocument()
  })
})