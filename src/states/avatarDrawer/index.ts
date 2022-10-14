import { atom } from 'recoil';

const avatarDrawer = atom<boolean>({
  key: 'avatarDrawerState',
  default: false,
});

export default avatarDrawer;
