import Action from '@src/action';
import Account, { useAccount } from '@src/data-binding/model/Account';

export default class UpdateLoginState extends Action<void> {
  accountModel: Account;

  constructor() {
    super();
    this.accountModel = useAccount();
  }
  async doAction() {
    this.accountModel.notify(false);
  }
}
