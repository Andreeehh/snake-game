import React from 'react';
import * as Styled from './styles';

interface Segment {
  x: number;
  y: number;
}

export type SnakeProps = {
  snake: Segment[];
};

export const Snake = ({ snake }: SnakeProps) => {
  return (
    <Styled.Wrapper>
      {snake.map((segment, index) => (
        <React.Fragment key={index}>
          <Styled.Segment
            style={{ left: `${segment.x * 20}px`, top: `${segment.y * 20}px` }}
          />
          {index === 0 && (
            <Styled.Eye
              style={{
                left: `${segment.x * 20}px`,
                top: `${segment.y * 20}px`,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Styled.Wrapper>
  );
};
