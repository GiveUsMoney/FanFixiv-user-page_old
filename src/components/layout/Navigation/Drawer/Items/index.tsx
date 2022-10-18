import styled from '@emotion/styled';
import React from 'react';

const Root = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: MinSans;
  font-size: 16px;
  font-weight: regular;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  margin-left: 15px;
`;

const TextWrapper = styled.div`
  margin-left: 8px;
`;

export type PropsType = {
  icon: React.ReactElement;
  text: string;
};

export default function Item(props: PropsType) {
  return (
    <Root>
      <IconWrapper>{props.icon}</IconWrapper>
      <TextWrapper>{props.text}</TextWrapper>
    </Root>
  );
}
