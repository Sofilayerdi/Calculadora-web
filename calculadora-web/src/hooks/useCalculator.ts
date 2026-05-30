import { useState } from 'react'

const MAX_DIGITS = 9
const MAX_VALUE = 999999999

type Operator = '+' | '-' | '*' | '/' | null

export const useCalculator = () => {
  const [display, setDisplay] = useState<string>('0')
  const [firstOperand, setFirstOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator>(null)
  const [waitingForSecond, setWaitingForSecond] = useState<boolean>(false)

  const showError = () => setDisplay('ERROR')

  const handleNumber = (num: string) => {
    if (display === 'ERROR') return
    if (!waitingForSecond && display.length >= MAX_DIGITS) return

    if (waitingForSecond) {
      setDisplay(num)
      setWaitingForSecond(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleOperator = (op: Operator) => {
    if (display === 'ERROR') return
    const current = parseFloat(display)

    if (firstOperand !== null && !waitingForSecond) {
      const result = calculate(firstOperand, current, operator)
      if (result === null) { showError(); return }
      setFirstOperand(result)
      setDisplay(formatResult(result))
    } else {
      setFirstOperand(current)
    }

    setOperator(op)
    setWaitingForSecond(true)
  }

  const calculate = (a: number, b: number, op: Operator): number | null => {
    let result: number
    if (op === '+') result = a + b
    else if (op === '-') result = a - b
    else if (op === '*') result = a * b
    else if (op === '/') result = b === 0 ? NaN : a / b
    else return b

    if (result < 0 || result > MAX_VALUE || isNaN(result)) return null
    return result
  }

  const formatResult = (num: number): string => {
    const str = num.toString()
    return str.length > MAX_DIGITS ? str.slice(0, MAX_DIGITS) : str
  }

  const handleEquals = () => {
    if (firstOperand === null || operator === null) return
    const current = parseFloat(display)
    const result = calculate(firstOperand, current, operator)
    if (result === null) { showError(); return }
    setDisplay(formatResult(result))
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  const handleClear = () => {
    setDisplay('0')
    setFirstOperand(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  return { display, handleNumber, handleOperator, handleEquals, handleClear }
}