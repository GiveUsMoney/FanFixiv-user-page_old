import { TranslateIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function Translate() {
  return (
    <Item
      icon={<SvgIcon viewBox="0 0 16 16" component={TranslateIcon} />}
      text="번역요청"
    />
  );
}
