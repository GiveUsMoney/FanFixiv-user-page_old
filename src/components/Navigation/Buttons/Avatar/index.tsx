import styled from '@emotion/styled';
import { Avatar as MuiAvatar } from '@mui/material';
import { styled as muiStyled } from '@mui/system';
import { useState } from 'react';

import chevronDown from '../../../../assets/svgs/navigation/chevron-down.svg';
import chevronUp from '../../../../assets/svgs/navigation/chevron-up.svg';
import Drawer from './Drawer';

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 4px;
  }
`;

const DrawerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
`;

const AvatarCircle = muiStyled(MuiAvatar)`
  cursor: pointer;
`;

const DrawerHandle = styled.img`
  cursor: pointer;
  user-select: none;
`;

export default function Avatar() {
  const [isDrawered, setDrawered] = useState(false);

  return (
    <Root>
      <AvatarCircle onClick={() => setDrawered(!isDrawered)} />
      {!isDrawered ? (
        <div>
          <DrawerHandle
            alt="down"
            src={chevronDown}
            onClick={() => setDrawered(!isDrawered)}
          />
        </div>
      ) : (
        <div>
          <DrawerHandle
            alt="up"
            src={chevronUp}
            onClick={() => setDrawered(!isDrawered)}
          />
          <DrawerWrapper>
            <Drawer />
          </DrawerWrapper>
        </div>
      )}
    </Root>
  );
}
