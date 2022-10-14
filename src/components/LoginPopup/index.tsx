import { Dialog, styled } from '@mui/material';
import theme from '@src/assets/theme/theme';
import loginPopupState from '@src/states/loginPopup';
import { useRecoilState } from 'recoil';

import Body from './Body';

const Root = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    border-color: ${theme.palette.cta.main};
    border-width: 2px;
    border-style: solid;
  }
`;

export default function LoginPopup() {
  const [loginPopup, setLoginPopup] = useRecoilState(loginPopupState);

  return (
    <Root open={loginPopup} onClose={() => setLoginPopup(!loginPopup)}>
      <Body />
    </Root>
  );
}
