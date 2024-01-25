import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  `}
`;

export const Score = styled.div`
  ${({ theme }) => css`
  position: relative;
  top: -5rem;
  `}
`;
