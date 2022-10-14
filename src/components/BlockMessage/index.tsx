import styled from '@emotion/styled';
import { SvgIcon } from '@mui/material';
import { ExclamationIcon } from '@src/assets/icons';
import theme from '@src/assets/theme/theme';

export type PropsType = {
  message: string;
};

const Root = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: MinSans;
  color: ${theme.palette.button.main};
  font-size: 10px;
  margin-top: 4px;
`;

const IconWrapper = styled.div`
  width: 12px;
  height: 12px;
  & .MuiSvgIcon-root {
    width: 100%;
    height: 100%;
  }
`;

const TextMessage = styled.div`
  margin-left: 4px;
`;

export default function BlockMessage(props: PropsType) {
  return (
    <Root>
      <IconWrapper>
        <SvgIcon viewBox="0 0 12 12" component={ExclamationIcon} />
      </IconWrapper>
      <TextMessage>{props.message}</TextMessage>
    </Root>
  );
}
