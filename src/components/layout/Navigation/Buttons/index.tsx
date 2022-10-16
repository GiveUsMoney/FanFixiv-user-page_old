import theme from '@assets/theme/theme';
import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import muiStyled from '@mui/system/styled';
import { useState } from 'react';

import AdultSwitch from './AdultSwitch';
import Avatar from './Avatar';

const Root = styled.div`
  font-weight: bold;
  font-size: 16px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = muiStyled(MuiButton)`
  color: ${theme.palette.button.main};
  padding: 0;
  margin: 0;
  margin-left: 16px;
  text-transform: none;
`;

const MarginWrapper = styled.div`
  margin-left: 16px;
`;

export default function Buttons() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Root>
      {!isLoggedIn ? (
        <div>
          <Button variant="text" onClick={() => setLoggedIn(!isLoggedIn)}>
            Login
          </Button>
          <Button variant="text">Join</Button>
        </div>
      ) : (
        <MarginWrapper>
          <Avatar />
        </MarginWrapper>
      )}
      <MarginWrapper>
        <AdultSwitch />
      </MarginWrapper>
    </Root>
  );
}
