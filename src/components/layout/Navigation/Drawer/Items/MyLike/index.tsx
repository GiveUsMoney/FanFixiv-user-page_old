import { HeartIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function MyLike() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 16 16" component={HeartIcon} />}
      text="나의 좋아요"
    />
  );
}
