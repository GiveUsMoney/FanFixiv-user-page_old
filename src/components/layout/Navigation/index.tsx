import theme from '@assets/theme/theme';
import styled from '@emotion/styled';

import Buttons from './Buttons';
import Logo from './Logo';
import Search from './Search';

const Root = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${theme.palette.cta.main};
`;

const Main = styled.div`
  margin-left: 320px;
  width: calc(100% - 640px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Navigation() {
  return (
    <Root>
      <Main>
        <Logo />
        <Search />
        <Buttons />
      </Main>
    </Root>
  );
}
