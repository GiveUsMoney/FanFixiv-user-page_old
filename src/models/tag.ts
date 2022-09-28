import { TagType } from '../constants';
import { BaseDto } from '.';

export class Tag extends BaseDto {
  type!: TagType;
  name!: string;
  describe!: string;
  using!: boolean;

  constructor(partial?: Partial<Tag>) {
    super();
    Object.assign(this, partial);
  }
}
