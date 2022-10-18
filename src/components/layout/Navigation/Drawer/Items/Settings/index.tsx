import { SettingsIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function Settings() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 16 16" component={SettingsIcon} />}
      text="설정"
    />
  );
}
