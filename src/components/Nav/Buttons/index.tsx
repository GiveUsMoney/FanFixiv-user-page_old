/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button } from '@mui/material';

import theme from '../../../assets/theme/theme';
import AdultSwitch from './AdultSwitch';

const rootStyle = css`
  font-weight: bold;
  font-size: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonStyle = css`
  color: ${theme.palette.button.main};
  padding: 0;
  margin: 0;
  margin-left: 16px;
  text-transform: none;
`;

const adultSwitchStyle = css`
  margin-left: 16px;
`;

export default function Buttons() {
  return (
    <div css={rootStyle}>
      <Button variant="text" css={buttonStyle}>
        Login
      </Button>
      <Button variant="text" css={buttonStyle}>
        Join
      </Button>
      <div css={adultSwitchStyle}>
        <AdultSwitch />
      </div>
    </div>
  );
}
