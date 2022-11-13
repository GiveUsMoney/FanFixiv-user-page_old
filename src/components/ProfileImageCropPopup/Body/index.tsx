import 'cropperjs/dist/cropper.css';

import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { uploadApi } from '@src/apis/uploadApi';
import { useProfileImageCrop } from '@src/data-binding/model/ProfileImageCrop';
import CropperType from 'cropperjs';
import { useRef } from 'react';
import Cropper from 'react-cropper';

const Root = styled.div``;

const CropButton = styled(Button)`
  width: 100%;
  height: 75px;
`;

export default function Body() {
  const cropperRef = useRef<HTMLImageElement>(null);
  const model = useProfileImageCrop();

  return (
    <Root>
      <Cropper
        src={model.src}
        style={{ height: '500px', width: '500px' }}
        aspectRatio={1}
        ref={cropperRef}
        viewMode={1}
      />
      <CropButton
        onClick={async () => {
          const cropper: CropperType = (cropperRef.current! as any).cropper;
          cropper.getCroppedCanvas().toBlob(async (blob) => {
            const form = new FormData();
            form.append('images', blob!);
            const res = await uploadApi.profileImgTemp(form);
            model.endCrop(res.location);
          });
        }}
      >
        적용
      </CropButton>
    </Root>
  );
}
