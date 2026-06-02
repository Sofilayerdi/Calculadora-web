import Keyboard from './Keyboard'

export default {
  title: 'Components/Keyboard',
  component: Keyboard,
  argTypes: {
    onNumber: { action: 'number pressed' },
    onOperator: { action: 'operator pressed' },
    onEquals: { action: 'equals pressed' },
    onClear: { action: 'clear pressed' },
  },
}

export const Default = {
  args: {},
}