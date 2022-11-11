import Action from '@src/action';
import { LoginResponseDto } from '@src/apis/dtos';

export default class UpdateAccessTokenInLocalStorage extends Action<LoginResponseDto> {
  async doAction(payload: LoginResponseDto) {
    window.localStorage.setItem('access-token', payload.token);
  }
}
