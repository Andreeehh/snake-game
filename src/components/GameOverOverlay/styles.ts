import styled, { css } from 'styled-components';

interface GameOverOverlayProps {
  isGameOver: boolean;
}

export const Wrapper = styled.div<GameOverOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ isGameOver }) => (isGameOver ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: white;
  font-size: 2em;
  flex-direction: column;
`;
