import { Dialog, styled } from '@mui/material';
import theme from '@src/assets/theme/theme';
import signupPopupState from '@src/states/SignupPopup';
import { useRecoilState } from 'recoil';

import Body from './Body';

const Root = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    ::-webkit-scrollbar {
      width: 0px;
    }
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
