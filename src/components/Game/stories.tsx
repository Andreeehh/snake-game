import { Meta, Story } from '@storybook/react/types-6-0';
import { Game } from '.';

export default {
  title: 'Game',
  component: Game,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Game {...args} />
    </div>
  );
};
