import { atom } from 'recoil';

const signupPopup = atom({
  key: 'signupPopupState',
  default: false,
});

export default signupPopup;
