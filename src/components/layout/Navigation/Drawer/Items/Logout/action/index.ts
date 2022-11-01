import ContainerAction from '@src/action/ContainerAction';
import { useRecoilState } from 'recoil';

import ClearAccessToken from './ClearAccessToken';
import ClearHeaderAuthorization from './ClearHeaderAuthorization';
import GotoHome from './GotoHome';
import RequestServerLogout from './RequestServerLogout';
import UpdateLoginState from './UpdateLoginState';

export default class Action extends ContainerAction {
  constructor(setLogin: ReturnType<typeof useRecoilState<boolean>>[1]) {
    super({
      actions: [
        new RequestServerLogout(),
        new ClearAccessToken(),
        new ClearHeaderAuthorization(),
        new UpdateLoginState(setLogin),
        new GotoHome(),
      ],
    });
  }
}
