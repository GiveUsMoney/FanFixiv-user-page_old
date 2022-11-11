import Action from '@src/action';
import { userApi } from '@src/apis';
import Account, { useAccount } from '@src/data-binding/model/Account';

export default class ValidateLoginOnce extends Action<void> {
  accountModel: Account;

  constructor() {
    super();
    this.accountModel = useAccount();
  }

  async doAction() {
    this.accountModel.notify(await userApi.getProfile());
  }
}
