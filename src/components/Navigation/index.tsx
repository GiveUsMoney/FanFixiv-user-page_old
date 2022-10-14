import styled from '@emotion/styled';
import avatarDrawerState from '@src/states/avatarDrawer';
import { useRecoilState } from 'recoil';

import theme from '../../assets/theme/theme';
import Buttons from './Buttons';
import Drawer from './Drawer';
import Logo from './Logo';
import Search from './Search';

const Root = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${theme.palette.cta.main};
  z-index: 100;
`;

const Main = styled.div`
  margin-left: 320px;
  width: calc(100% - 640px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AvatarDrawer = styled(Drawer)``;

export default function Navigation() {
  const [avatarDrawer, setAvatarDrawer] = useRecoilState(avatarDrawerState);
  return (
    <Root>
      <Main>
        <Logo />
        <Search />
        <Buttons />
      </Main>
      {avatarDrawer ? <AvatarDrawer /> : false}
    </Root>
  );
}
