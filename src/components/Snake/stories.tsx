import { Meta, Story } from '@storybook/react/types-6-0';
import { Snake, SnakeProps } from '.';

export default {
  title: 'Snake',
  component: Snake,
  args: {
    snake: [
      { x: 5, y: 5 },
      { x: 5, y: 6 },
      { x: 5, y: 7 },
      { x: 6, y: 7 },
      { x: 7, y: 7 },
    ],
  },
} as Meta<SnakeProps>;

export const Template: Story<SnakeProps> = (args) => {
  return (
    <div>
      <Snake {...args} />
    </div>
  );
};
