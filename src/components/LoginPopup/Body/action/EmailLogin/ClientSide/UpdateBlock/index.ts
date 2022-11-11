import Action from '@src/action';
import { LoginResponseDto } from '@src/apis/dtos';

export type ConstructorParam = {
  setBlock: (value: boolean) => void;
};

export default class UpdateBlock extends Action<LoginResponseDto> {
  setBlock: (value: boolean) => void;

  constructor(payload: ConstructorParam) {
    super();
    this.setBlock = payload.setBlock;
  }
  async doAction(payload: LoginResponseDto) {
    this.setBlock(true);
  }
}
