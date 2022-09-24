/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button } from '@mui/material';

import theme from '../../../../assets/theme/theme';

const logoStyle = css`
  font-family: Impact;
  color: ${theme.palette.button.main};
  font-size: 22px;
  letter-spacing: 10%;
  text-transform: none;
  padding: 0;
  margin: 0;
`;

export default function Logo() {
  return <Button css={logoStyle}>FanFixiv</Button>;
}
