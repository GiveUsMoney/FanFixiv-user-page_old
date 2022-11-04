import styled from '@emotion/styled';
import { LogoutIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';
import Action from './action';

const Root = styled.div``;

export default function Logout() {
  const action = new Action();

  return (
    <Root onClick={() => action.doAction()}>
      <Item
        icon={<SvgIcon viewBox="0 0 16 16" component={LogoutIcon} />}
        text="로그아웃"
      />
    </Root>
  );
}
