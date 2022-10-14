import { atom } from 'recoil';

const login = atom<boolean>({
  key: 'loginState',
  default: false,
});

export default login;
