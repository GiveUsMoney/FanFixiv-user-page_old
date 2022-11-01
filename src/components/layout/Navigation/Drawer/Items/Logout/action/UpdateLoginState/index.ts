import Action from '@src/action';
import { useRecoilState } from 'recoil';

export default class UpdateLoginState extends Action {
  setLogin: ReturnType<typeof useRecoilState<boolean>>[1];

  constructor(setLogin: ReturnType<typeof useRecoilState<boolean>>[1]) {
    super();
    this.setLogin = setLogin;
  }
  async doAction() {
    this.setLogin(false);
  }
}
