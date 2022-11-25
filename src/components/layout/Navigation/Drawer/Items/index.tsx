import styled from '@emotion/styled';
import { Button, ButtonProps } from '@mui/material';

import { ItemsProps } from './interface';

const Root = styled(Button)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  color: black;
  font-family: MinSans;
  font-weight: normal;
  font-size: 16px;
  padding: 0;
  .MuiButtonBase-root {
    padding: 0;
  }
`;

const IconWrapper = styled.div`
  margin-left: 15px;
`;

const TextWrapper = styled.div`
  margin-left: 8px;
`;

export default function Item(props: ItemsProps & ButtonProps) {
  return (
    <Root onClick={props.onClick}>
      <IconWrapper>{props.icon}</IconWrapper>
      <TextWrapper>{props.text}</TextWrapper>
    </Root>
  );
}
