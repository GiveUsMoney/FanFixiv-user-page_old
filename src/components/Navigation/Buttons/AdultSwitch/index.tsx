/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import theme from '../../../../assets/theme/theme';

const Root = styled.div`
  width: 46px;
  height: 26px;
  position: relative;
  border-radius: 13px;
  &:hover {
    cursor: pointer;
  }
  border: none;
  display: block;
  background-color: white;
  user-select: none;
`;

const OnText = styled.div`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.palette.button.main};
  font-size: 12px;
  font-weight: bold;
`;

const OffText = styled.div`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.palette.gray1.main};
  font-size: 12px;
  font-weight: bold;
`;

export default function AdultSwitch() {
  const [active, setActive] = useState(false);

  const trackStyle = css`
    width: 100%;
    height: 100%;
    background-color: ${active
      ? theme.palette.button.main
      : theme.palette.gray2.main};
    opacity: ${active ? 0.5 : 1};
    position: absolute;
    border-radius: 13px;
    left: 0;
    top: 0;
  `;

  const thumbStyle = css`
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background-color: ${active ? '#cc0000' : 'white'};
    position: absolute;
    left: 2px;
    top: 2px;
    ${active ? 'transform: translateX(20px);' : ''}
    transition-duration: 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: MinSans;
    font-weight: bold;
    color: ${active ? theme.palette.cta.main : theme.palette.gray2.main};
    z-index: 1;
  `;

  return (
    <Root onClick={() => setActive(!active)}>
      <div css={trackStyle}></div>
      <div css={thumbStyle}>
        <div>19</div>
      </div>
      <OnText>On</OnText>
      <OffText>Off</OffText>
    </Root>
  );
}
