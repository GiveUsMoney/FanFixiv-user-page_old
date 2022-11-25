import { atom } from 'recoil';

const secessionPopup = atom({
  key: 'secessionPopupState',
  default: false,
});

export default secessionPopup;
