import { GetProfileResponseDto } from '@src/apis/dtos';
import Observer from '@src/data-binding/observer';
import { atom, useRecoilState } from 'recoil';

export default class IsLogin extends Observer<GetProfileResponseDto | false> {
  readonly isLogin: ReturnType<typeof useRecoilState<boolean>>[0];
  private setIsLogin: ReturnType<typeof useRecoilState<boolean>>[1];

  private static isLoginAtom = atom<boolean>({
    key: 'isLoginState',
    default: false,
  });

  constructor() {
    super();
    [this.isLogin, this.setIsLogin] = useRecoilState<boolean>(
      IsLogin.isLoginAtom,
    );
  }

  async update(payload: GetProfileResponseDto | false) {
    this.setIsLogin(payload !== false);
  }
}

export function useIsLogin() {
  return new IsLogin();
}
