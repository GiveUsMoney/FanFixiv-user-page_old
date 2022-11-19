import Action from '@src/action';
import { userApi } from '@src/apis';

export default class ClearHeaderAuthorization extends Action<void> {
  async doAction() {
    userApi.setDefaultCommonHeader('Authorization', false);
  }
}
