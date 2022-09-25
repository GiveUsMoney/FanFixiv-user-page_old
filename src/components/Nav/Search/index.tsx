/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { IconButton, InputBase } from '@mui/material';

import theme from '../../../assets/theme/theme';

const searchBoxStyle = css`
  width: 605px;
  height: 42px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const searchInputStyle = css`
  margin-left: 18px;
  font-family: MinSans;
  font-size: 16px;
  color: black;
  &::placeholder {
    color: ${theme.palette.gray2.main};
  }
  width: calc(100% - 100px);
`;

const buttonStyle = css`
  width: 24px;
  height: 24px;
`;

const iconButtonStyle = css`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

const iconButtonRightMargin = css`
  margin-right: 18px;
`;

export default function Search() {
  return (
    <div css={searchBoxStyle}>
      <InputBase css={searchInputStyle} placeholder="검색어를 입력해주세요." />
      <div>
        <IconButton type="button" css={iconButtonStyle}>
          <img src="/svgs/hash.svg" alt="hash" css={buttonStyle} />
        </IconButton>
        <IconButton
          type="button"
          css={css`
            ${iconButtonStyle};
            ${iconButtonRightMargin};
          `}
        >
          <img src="/svgs/search.svg" alt="search" css={buttonStyle} />
        </IconButton>
      </div>
    </div>
  );
}
