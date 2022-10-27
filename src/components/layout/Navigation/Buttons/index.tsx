import theme from '@assets/theme/theme';
import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import { userApi } from '@src/apis';
import loginState from '@src/states/login';
import loginPopupState from '@src/states/loginPopup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

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

const Button = styled(MuiButton)`
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
  const [loginPopup, setLoginPopup] = useRecoilState(loginPopupState);
  const [login, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        console.log(await userApi.getProfile());
        return true;
      } catch (e) {
        return false;
      }
    };
    const validateLogin = async () => {
      setLogin(await checkLogin());
    };
    validateLogin();
  }, []);

  return (
    <Root>
      {!login ? (
        <div>
          <Button variant="text" onClick={() => setLoginPopup(!loginPopup)}>
            Login
          </Button>
          <Button variant="text">Join</Button>
        </div>
      ) : (
        <MarginWrapper>
          <Avatar />
        </MarginWrapper>
      )}
      {login ? (
        <MarginWrapper>
          <AdultSwitch />
        </MarginWrapper>
      ) : (
        false
      )}
    </Root>
  );
}
