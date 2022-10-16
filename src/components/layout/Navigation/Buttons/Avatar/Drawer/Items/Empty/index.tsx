import theme from '@assets/theme/theme';
import styled from '@emotion/styled';

const Root = styled.div`
  width: 100%;
  height: 40px;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: ${theme.palette.button.main};
`;

export default function Empty() {
  return <Root></Root>;
}
