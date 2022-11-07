import { GetProfileResponseDto } from '@src/apis/dtos';
import Observer from '@src/data-binding/observer';
import { atom, useRecoilState } from 'recoil';

export default class User extends Observer<GetProfileResponseDto | false> {
  readonly user: ReturnType<
    typeof useRecoilState<GetProfileResponseDto | false>
  >[0];
  private setUser: ReturnType<
    typeof useRecoilState<GetProfileResponseDto | false>
  >[1];

  private static userAtom = atom<GetProfileResponseDto | false>({
    key: 'userState',
    default: false,
  });

  constructor() {
    super();
    [this.user, this.setUser] = useRecoilState<GetProfileResponseDto | false>(
      User.userAtom,
    );
  }

  async update(payload: GetProfileResponseDto | false) {
    if (payload !== false) {
      this.setUser(payload);
    }
  }
}

export function useUser() {
  return new User();
}
