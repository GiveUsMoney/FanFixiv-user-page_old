import ContainerAction from '@src/action/ContainerAction';

import ClearAccessToken from './ClearAccessToken';
import ClearHeaderAuthorization from './ClearHeaderAuthorization';
import GotoHome from './GotoHome';
import RequestServerLogout from './RequestServerLogout';
import UpdateLoginState from './UpdateLoginState';

export default class Action extends ContainerAction<void> {
  constructor() {
    super({
      actions: [
        new RequestServerLogout(),
        new ClearAccessToken(),
        new ClearHeaderAuthorization(),
        new UpdateLoginState(),
        new GotoHome(),
      ],
    });
  }
}
