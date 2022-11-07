import Action from '@src/action';
import { userApi } from '@src/apis';

export default class ClearHeaderAuthorization extends Action {
  async doAction() {
    userApi.setDefaultCommonHeader('Authorization', false);
  }
}
