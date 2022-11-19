import Action from '@src/action';

export default class ClearAccessToken extends Action<void> {
  async doAction() {
    window.localStorage.setItem('access-token', '');
  }
}
