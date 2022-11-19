import Action from '@src/action';
import { LoginResponseDto } from '@src/apis/dtos';

export default class GotoHome extends Action<LoginResponseDto> {
  async doAction(payload: LoginResponseDto) {
    location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
  }
}
