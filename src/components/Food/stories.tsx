import { Meta, Story } from '@storybook/react/types-6-0';
import { Food, FoodProps } from '.';

export default {
  title: 'Food',
  component: Food,
  args: {
    x: 5,
    y: 10,
  },
} as Meta<FoodProps>;

export const Template: Story<FoodProps> = (args) => {
  return (
    <div>
      <Food {...args} />
    </div>
  );
};
