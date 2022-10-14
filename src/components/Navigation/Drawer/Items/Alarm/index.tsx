import { BellIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function Alarm() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 16 16" component={BellIcon} />}
      text="알람"
    />
  );
}
