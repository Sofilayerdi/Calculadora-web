import { describe, it, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCalculator } from '../../hooks/useCalculator'


describe('useCalculator', () => {
  it('muestra el número presionado', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => { result.current.handleNumber('5') })

    expect(result.current.display).toBe('5')
  })

  it('suma dos números correctamente', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => { result.current.handleNumber('3') })
    act(() => { result.current.handleOperator('+') })
    act(() => { result.current.handleNumber('4') })
    act(() => { result.current.handleEquals() })

    expect(result.current.display).toBe('7')
  })

  it('muestra ERROR si el resultado es negativo', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => { result.current.handleNumber('3') })
    act(() => { result.current.handleOperator('-') })
    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleEquals() })

    expect(result.current.display).toBe('ERROR')
  })

  it('muestra ERROR si el resultado supera 999999999', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => { result.current.handleNumber('999999999') })
    act(() => { result.current.handleOperator('+') })
    act(() => { result.current.handleNumber('1') })
    act(() => { result.current.handleEquals() })

    expect(result.current.display).toBe('ERROR')
  })

  it('no acepta más de 9 caracteres', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => { '1234567890'.split('').forEach(n => result.current.handleNumber(n)) })

    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('limpia el display con handleClear', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => { result.current.handleNumber('9') })
    act(() => { result.current.handleClear() })

    expect(result.current.display).toBe('0')
  })
})