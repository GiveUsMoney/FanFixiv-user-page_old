import { ChevronBottomIcon, ChevronUpIcon } from '@icons';
import { Avatar as MuiAvatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

import Drawer from './Drawer';

const Root = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 4px;
  }
`;

const DrawerWrapper = styled('div')`
  position: absolute;
  right: 0;
  top: 52px;
`;

const AvatarCircle = styled(MuiAvatar)`
  cursor: pointer;
  margin-right: 4px;
`;

export default function Avatar() {
  const [isDrawered, setDrawered] = useState(false);

  return (
    <Root>
      <AvatarCircle onClick={() => setDrawered(!isDrawered)} />
      {!isDrawered ? (
        <ChevronBottomIcon
          sx={{ color: '#AF3030', width: 16, height: 16 }}
          inheritViewBox
        />
      ) : (
        <React.Fragment>
          <ChevronUpIcon
            sx={{ color: '#AF3030', width: 16, height: 16 }}
            inheritViewBox
          />
          <DrawerWrapper>
            <Drawer />
          </DrawerWrapper>
        </React.Fragment>
      )}
    </Root>
  );
}
