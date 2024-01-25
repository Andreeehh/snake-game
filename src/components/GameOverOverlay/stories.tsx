import { Meta, Story } from '@storybook/react/types-6-0';
import { GameOverOverlay, GameOverOverlayProps } from '.';

export default {
  title: 'GameOverOverlay',
  component: GameOverOverlay,
} as Meta<GameOverOverlayProps>;

export const Template: Story<GameOverOverlayProps> = (args) => {
  return (
    <div>
      <GameOverOverlay {...args} />
    </div>
  );
};
