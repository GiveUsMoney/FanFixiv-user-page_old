import theme from '@assets/theme/theme';
import styled from '@emotion/styled';

import Alarm from './Items/Alarm';
import Empty from './Items/Empty';
import Logout from './Items/Logout';
import MyLike from './Items/MyLike';
import ProfileEdit from './Items/ProfileEdit';
import Settings from './Items/Settings';
import TagList from './Items/TagList';
import Translate from './Items/Translate';

const Root = styled.div`
  width: 165px;
  border-radius: 10px;
  background-color: ${theme.palette.secondary.main};
  padding-top: 10px;
  padding-bottom: 10px;
  user-select: none;
`;

export default function Drawer() {
  return (
    <Root>
      <ProfileEdit />
      <Alarm />
      <TagList />
      <Translate />
      <MyLike />
      <Empty />
      <Settings />
      <Logout />
    </Root>
  );
}
