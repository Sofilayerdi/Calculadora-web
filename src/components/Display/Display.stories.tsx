import Display from './Display'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    value: { control: 'text' },
  },
}

export const Inicial = {
  args: { value: '0' },
}

export const ConNumero = {
  args: { value: '42' },
}

export const NumeroLargo = {
  args: { value: '123456789' },
}

export const Error = {
  args: { value: 'ERROR' },
}