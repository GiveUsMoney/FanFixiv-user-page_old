import Action from '@src/action';
import { userApi } from '@src/apis';

export default class RequestServerLogout extends Action {
  async doAction() {
    console.log(window.localStorage);
    const response = await userApi.logout();
    if (!response.success) {
      throw 'logout에 실패했습니다.';
    }
  }
}
