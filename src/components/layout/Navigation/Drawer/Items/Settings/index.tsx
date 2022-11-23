import { SettingsIcon } from '@icons';
import { SvgIcon } from '@mui/material';
import secessionPopupState from '@src/states/secessionPopup';
import { useRecoilState } from 'recoil';

import Item from '..';

export default function Settings() {
  const [secessionPopup, setSecessionPopup] =
    useRecoilState(secessionPopupState);

  return (
    <Item
      onClick={() => setSecessionPopup(!secessionPopup)}
      icon={<SvgIcon viewBox="0 0 16 16" component={SettingsIcon} />}
      text="설정"
    />
  );
}
