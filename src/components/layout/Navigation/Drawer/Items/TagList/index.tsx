import { DrawerHashIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function TagList() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 16 16" component={DrawerHashIcon} />}
      text="태그 목적"
    />
  );
}
