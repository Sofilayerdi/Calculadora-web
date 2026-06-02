import './Button.css'

type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'number' | 'operator' | 'action'
  className?: string
}

const Button = ({
  label,
  onClick,
  variant = 'number',
  className = '',
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  )
}

export default Button