import styled from '@emotion/styled';
import { LogoutIcon } from '@icons';
import { SvgIcon } from '@mui/material';
import { userApi } from '@src/apis';
import loginState from '@src/states/login';
import axios from 'axios';
import { useRecoilState } from 'recoil';

import Item from '..';

const Root = styled.div``;

export default function Logout() {
  const [_, setLogin] = useRecoilState(loginState);

  const handleClick = () => {
    window.localStorage.setItem('access-token', '');
    userApi.logout();
    setLogin(false);

    location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
  };

  return (
    <Root onClick={handleClick}>
      <Item
        icon={<SvgIcon viewBox="0 0 16 16" component={LogoutIcon} />}
        text="로그아웃"
      />
    </Root>
  );
}
