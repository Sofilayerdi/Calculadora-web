import './Button.css'

type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'number' | 'operator' | 'action'
}

const Button = ({ label, onClick, variant = 'number' }: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  )
}

export default Button