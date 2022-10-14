import styled from '@emotion/styled';
import { Container } from '@mui/material';
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
  margin-left: calc(100% / 6);
  width: calc(100% - 100% / 3);
  height: 100%;
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AvatarDrawer = styled(Drawer)``;

export default function Navigation() {
  const [avatarDrawer, setAvatarDrawer] = useRecoilState(avatarDrawerState);
  return (
    <Root>
      <Main>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <ButtonsWrapper>
          <Buttons />
        </ButtonsWrapper>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </Main>
      {avatarDrawer ? <AvatarDrawer /> : false}
    </Root>
  );
}
