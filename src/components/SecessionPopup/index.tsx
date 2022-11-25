import { Dialog, styled } from '@mui/material';
import theme from '@src/assets/theme/theme';
import secessionPopupState from '@src/states/secessionPopup';
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

export default function SecessionPopup() {
  const [secessionPopup, setSecessionPopup] =
    useRecoilState(secessionPopupState);

  return (
    <Root
      open={secessionPopup}
      onClose={() => setSecessionPopup(!secessionPopup)}
    >
      <Body />
    </Root>
  );
}
