import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['number', 'operator', 'action'],
    },
    label: { control: 'text' }
  }
}

export const Numero = {
  args: {
    label: '7',
    variant: 'number',
    onClick: () => {},
  },
}

export const Accion = {
  args: { 
    label: 'C', 
    variant: 'action', 
    onClick: () => {} 
},
}

export const Igual = {
  args: { 
    label: '=', 
    variant: 'action', 
    onClick: () => {} },
}

export const TodosLosVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button label="5" variant="number" onClick={() => {}} />
      <Button label="+" variant="operator" onClick={() => {}} />
      <Button label="C" variant="action" onClick={() => {}} />
    </div>
  ),
}
