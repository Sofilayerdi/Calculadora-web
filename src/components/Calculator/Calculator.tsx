import Display from "../Display/Display"
import { useCalculator } from "../../hooks/useCalculator"
import Keyboard from "../Keyboard/Keyboard"
import './Calculator.css'

const Calculator = () => {
  const { display, handleNumber, handleOperator, handleEquals, handleClear, handleDecimal } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keyboard
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEquals={handleEquals}
        onClear={handleClear}
        onDecimal={handleDecimal}
      />
    </div>
  )
}

export default Calculator