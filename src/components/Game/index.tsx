import { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import { Snake } from 'components/Snake';
import { Food } from 'components/Food';
import { GameOverOverlay } from 'components/GameOverOverlay';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };

export const Game = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState('RIGHT');
  const [isGameOver, setIsGameOver] = useState(false);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        default:
          break;
      }
    },
    [direction],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    const moveSnake = setInterval(() => {
      if (isGameOver) {
        clearInterval(moveSnake);
        return;
      }
      const newSnake = [...snake];
      const newHead = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          newHead.y -= 1;
          break;
        case 'DOWN':
          newHead.y += 1;
          break;
        case 'LEFT':
          newHead.x -= 1;
          break;
        case 'RIGHT':
          newHead.x += 1;
          break;
        default:
          break;
      }

      // Detectar colisão com as próprias partes da cobra
      for (let i = 1; i < newSnake.length; i++) {
        if (newSnake[i].x === newHead.x && newSnake[i].y === newHead.y) {
          setIsGameOver(true);
          return;
        }
      }

      // Detectar colisão com as laterais do tabuleiro
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setIsGameOver(true);
        return;
      }

      newSnake.unshift(newHead);

      if (newHead.x === food.x && newHead.y === food.y) {
        setFood({
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        });
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    }, 100);

    return () => clearInterval(moveSnake);
  }, [direction, snake, food, isGameOver]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection('RIGHT');
    setIsGameOver(false);
  };

  return (
    <Styled.Wrapper>
      <Snake snake={snake} />
      <Food x={food.x} y={food.y} />
      <GameOverOverlay isGameOver={isGameOver} onRestart={restartGame} />
    </Styled.Wrapper>
  );
};
