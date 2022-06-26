import { Story, Meta } from '@storybook/html';
import { render } from 'solid-js/web';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    count: { control: 'number' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  const div = document.createElement('div');
  render(() => <Button {...args} />, div);
  return div;
};

export const OneButton = Template.bind({});
OneButton.args = { children: <p>hello world</p> };
