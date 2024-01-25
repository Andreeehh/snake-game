import * as Styled from './styles';

export type FoodProps = {
  x: number;
  y: number;
};

export const Food = ({ x, y }: FoodProps) => {
  return <Styled.Wrapper style={{ left: `${x * 20}px`, top: `${y * 20}px` }} />;
};
