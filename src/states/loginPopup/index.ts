import { atom } from 'recoil';

const loginPopup = atom<boolean>({
  key: 'loginPopupState',
  default: false,
});

export default loginPopup;
