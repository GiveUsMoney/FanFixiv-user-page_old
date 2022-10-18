import { PencilIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function ProfileEdit() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 16 16" component={PencilIcon} />}
      text="프로필 수정"
    />
  );
}
