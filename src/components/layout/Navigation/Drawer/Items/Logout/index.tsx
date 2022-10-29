import styled from '@emotion/styled';
import { LogoutIcon } from '@icons';
import { SvgIcon } from '@mui/material';
import { userApi } from '@src/apis';
import loginState from '@src/states/login';
import { useRecoilState } from 'recoil';

import Item from '..';

const Root = styled.div``;

export default function Logout() {
  const [_, setLogin] = useRecoilState(loginState);

  const handleClick = async () => {
    const response = await userApi.logout();
    if (!response.success) {
      throw 'logout에 실패했습니다.';
    }
    window.localStorage.setItem('access-token', '');
    userApi.setDefaultCommonHeader('Authorization', false);
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
