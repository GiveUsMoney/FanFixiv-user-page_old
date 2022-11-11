import Action from '@src/action';
import { LoginResponseDto } from '@src/apis/dtos';

export default class EmptyAction extends Action<LoginResponseDto> {
  async doAction() {}
}
