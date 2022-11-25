import { UploadIcon } from '@icons';
import { SvgIcon } from '@mui/material';

import Item from '..';

export default function Upload() {
  return (
    <Item
      onClick={() => {
        location.href = `${process.env.REACT_APP_PUBLIC_URL}/regist-post`;
      }}
      icon={<SvgIcon viewBox="0 0 48 48" component={UploadIcon} />}
      text="만화 등록"
    />
  );
}
