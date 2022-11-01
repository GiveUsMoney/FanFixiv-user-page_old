import Action from '@src/action';
import { userApi } from '@src/apis';
import { useRecoilState } from 'recoil';

export default class ValidateLoginOnce extends Action {
  setLogin: ReturnType<typeof useRecoilState<boolean>>[1];

  constructor(setLogin: ReturnType<typeof useRecoilState<boolean>>[1]) {
    super();
    this.setLogin = setLogin;
  }
  async doAction() {
    try {
      await userApi.getProfile();
      this.setLogin(true);
    } catch (e) {
      this.setLogin(false);
    }
  }
}
