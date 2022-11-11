import theme from '@assets/theme/theme';
import { css } from '@emotion/react';
import { ChevronBottomIcon, ChevronUpIcon } from '@icons';
import { Avatar, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import avatarDrawerState from '@src/states/avatarDrawer';
import React, { useState } from 'react';
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

const StyledBadge = styled(Badge)`
  & .MuiBadge-badge {
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }
`;

const AvatarCircle = styled(Avatar)`
  cursor: pointer;
  width: 42px;
  height: 42px;
  margin-right: 4px;
`;

const StyledBottomIcon = styled(ChevronBottomIcon)`
  cursor: pointer;
`;

const StyledUpIcon = styled(ChevronUpIcon)`
  cursor: pointer;
`;

export default function ProfileAvatar() {
  const [avatarDrawer, setAvatarDrawer] = useRecoilState(avatarDrawerState);
  const [alarm, setAlarm] = useState(true);

  return (
    <Root>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        css={css`
          & .MuiBadge-badge {
            background-color: ${alarm ? '#44b700' : theme.palette.gray2.main};
            color: ${alarm ? '#44b700' : theme.palette.gray2.main};
          }
        `}
      >
        <AvatarCircle onClick={() => setAvatarDrawer(!avatarDrawer)} />
      </StyledBadge>
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
