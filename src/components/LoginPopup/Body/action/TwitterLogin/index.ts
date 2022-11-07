import Action from '@src/action';

export default class TwitterLogin extends Action {
  async doAction() {
    location.href = `${process.env.REACT_APP_API_BASE_URL}/auth/oauth2/authorization/twitter`;
  }
}

export const twitterLoginAction = new TwitterLogin();
