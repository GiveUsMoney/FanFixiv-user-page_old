import { Dialog, styled } from '@mui/material';
import theme from '@src/assets/theme/theme';
import signupPopupState from '@src/states/SignupPopup';
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

export default function SignupPopup() {
  const [signupPopup, setSignupPopup] = useRecoilState(signupPopupState);

  return (
    <Root open={signupPopup} onClose={() => setSignupPopup(!signupPopup)}>
      <Body />
    </Root>
  );
}
