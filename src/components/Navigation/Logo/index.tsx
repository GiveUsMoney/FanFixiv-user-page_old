import { Button } from '@mui/material';
import muiStyled from '@mui/system/styled';

import theme from '../../../assets/theme/theme';

const LogoButton = muiStyled(Button)`
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
