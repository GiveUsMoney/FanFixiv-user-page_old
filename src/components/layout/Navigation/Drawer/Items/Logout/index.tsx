import styled from '@emotion/styled';
import { LogoutIcon } from '@icons';
import { SvgIcon } from '@mui/material';
import { userApi } from '@src/apis';
import loginState from '@src/states/login';
import { useRecoilState } from 'recoil';

import Item from '..';
import Action from './action';

const Root = styled.div``;

export default function Logout() {
  const [_, setLogin] = useRecoilState(loginState);

  const action = new Action(setLogin);

  return (
    <Root onClick={() => action.doAction()}>
      <Item
        icon={<SvgIcon viewBox="0 0 16 16" component={LogoutIcon} />}
        text="로그아웃"
      />
    </Root>
  );
}
