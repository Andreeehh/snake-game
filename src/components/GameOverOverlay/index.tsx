import * as Styled from './styles';

export type GameOverOverlayProps = {
  isGameOver: boolean;
  onRestart: () => void;
};

export const GameOverOverlay = ({
  isGameOver,
  onRestart,
}: GameOverOverlayProps) => {
  return (
    <Styled.Wrapper isGameOver={isGameOver}>
      <div>Game Over</div>
      <button onClick={onRestart}>Restart</button>
    </Styled.Wrapper>
  );
};
