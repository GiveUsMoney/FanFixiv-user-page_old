import ContainerAction from '@src/action/ContainerAction';
import { LoginResponseDto } from '@src/apis/dtos';

import GotoHome from './GotoHome';
import UpdateAccessTokenInLocalStorage from './UpdateAccessTokenInLocalStorage';
import UpdateBlock from './UpdateBlock';

export type ConstructorParam = {
  setBlock: (value: boolean) => void;
};

export default class ClientSide extends ContainerAction<LoginResponseDto> {
  constructor(payload: ConstructorParam) {
    super({
      actions: [
        new GotoHome(),
        new UpdateAccessTokenInLocalStorage(),
        new UpdateBlock({ ...payload }),
      ],
    });
  }
}
