import theme from '@/styles/theme';
import { LunchCardProps } from '@/types/lunch/card';
import { css } from '@emotion/react';
import React from 'react';

function LunchCard({ children, col, padding, nopad }: LunchCardProps) {
  return <div css={cardStyles(col, padding, nopad)}>{children}</div>;
}

const cardStyles = (col?: boolean, padding?: number, nopad?: boolean) => css`
  width: 100%;
  display: flex;
  align-self: stretch;
  border-radius: 16px;
  background: ${theme.palette.white};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  flex-direction: ${col ? 'column' : 'row'};
  padding: ${nopad ? '0' : padding ? `${padding}px 16px` : '16px 16px 20px'};
`;

export default LunchCard;
