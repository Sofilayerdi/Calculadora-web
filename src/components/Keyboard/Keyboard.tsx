import Button from '../Button/Button'
import './Keyboard.css'

type KeyboardProps = {
  onNumber: (n: string) => void
  onOperator: (op: '+' | '-' | '*' | '/') => void
  onEquals: () => void
  onClear: () => void
  onDecimal: () => void
}

const buttons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['C', '0', '.', '+'],
  ['=']
]

const operators = ['+', '-', '*', '/']

const Keyboard = ({ onNumber, onOperator, onEquals, onClear, onDecimal }: KeyboardProps) => {
  const handleClick = (value: string) => {
    if (operators.includes(value)) onOperator(value as '+' | '-' | '*' | '/')
    else if (value === '=') onEquals()
    else if (value === 'C') onClear()
    else if (value === '.') onDecimal()
    else onNumber(value)
  }

  return (
    <div className="keyboard">
      {buttons.flat().map((btn) => (
        <Button
        key={btn}
        label={btn}
        onClick={() => handleClick(btn)}
        variant={
          operators.includes(btn)
            ? 'operator'
            : btn === '=' || btn === 'C'
              ? 'action'
              : 'number'
        }
        className={btn === '=' ? 'equals' : ''}
      />
      ))}
    </div>
    
  )
}

export default Keyboard