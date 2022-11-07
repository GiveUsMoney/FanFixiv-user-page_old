import { ChevronBottomIcon, ChevronUpIcon } from '@icons';
import { Avatar as MuiAvatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import avatarDrawerState from '@src/states/avatarDrawer';
import React from 'react';
import { useRecoilState } from 'recoil';

const Root = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left: 4px;
  }
`;

const AvatarCircle = styled(MuiAvatar)`
  cursor: pointer;
  margin-right: 4px;
`;

const StyledBottomIcon = styled(ChevronBottomIcon)`
  cursor: pointer;
`;

const StyledUpIcon = styled(ChevronUpIcon)`
  cursor: pointer;
`;

export default function Avatar() {
  const [avatarDrawer, setAvatarDrawer] = useRecoilState(avatarDrawerState);

  return (
    <Root>
      <AvatarCircle onClick={() => setAvatarDrawer(!avatarDrawer)} />
      {!avatarDrawer ? (
        <StyledBottomIcon
          sx={{ color: '#AF3030', width: 16, height: 16 }}
          inheritViewBox
          onClick={() => setAvatarDrawer(!avatarDrawer)}
        />
      ) : (
        <React.Fragment>
          <StyledUpIcon
            sx={{ color: '#AF3030', width: 16, height: 16 }}
            inheritViewBox
            onClick={() => setAvatarDrawer(!avatarDrawer)}
          />
        </React.Fragment>
      )}
    </Root>
  );
}
