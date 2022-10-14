import styled from '@emotion/styled';
import { Button } from '@mui/material';

import theme from '../../../assets/theme/theme';

const LogoButton = styled(Button)`
  font-family: Impact;
  color: ${theme.palette.button.main};
  font-size: 22px;
  letter-spacing: 10%;
  text-transform: none;
  padding: 0;
  margin: 0;
`;

export default function Logo() {
  return <LogoButton>FanFixiv</LogoButton>;
}
