import { GetProfileResponseDto } from '@src/apis/dtos';

import Notifier from '../../notifier';
import { useIsLogin } from './IsLogin';
import { useUser } from './User';

export default class Account extends Notifier<GetProfileResponseDto | false> {
  constructor() {
    super({ observers: [] });
    this.addObserver(useIsLogin());
    this.addObserver(useUser());
  }
}

export function useAccount() {
  return new Account();
}
