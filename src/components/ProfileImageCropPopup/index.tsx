import styled from '@emotion/styled';
import { Dialog } from '@mui/material';
import theme from '@src/assets/theme/theme';
import { useProfileImageCrop } from '@src/data-binding/model/ProfileImageCrop';
import { useProfileImageCropPopup } from '@src/data-binding/model/ProfileImageCrop/ProfileImageCropPopup';

import Body from './Body';

const Root = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 10px;
    border-color: ${theme.palette.cta.main};
    border-width: 2px;
    border-style: solid;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default function ProfileImageCropPopup() {
  const profileImageCrop = useProfileImageCrop();
  const popup = useProfileImageCropPopup();

  return (
    <Root
      open={popup.popup}
      onClose={() => {
        profileImageCrop.endCrop(profileImageCrop.croppedSrc);
      }}
    >
      <Body />
    </Root>
  );
}
