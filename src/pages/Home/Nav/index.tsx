/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import theme from '../../../assets/theme/theme';
import Buttons from './Buttons';
import Logo from './Logo';
import Search from './Search';

const rootStyle = css`
  width: 100%;
  height: 64px;
  background-color: ${theme.palette.cta.main};
`;

const mainStyle = css`
  margin-left: 320px;
  width: calc(100% - 640px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Nav() {
  return (
    <div css={rootStyle}>
      <div css={mainStyle}>
        <Logo />
        <Search />
        <Buttons />
      </div>
    </div>
  );
}
