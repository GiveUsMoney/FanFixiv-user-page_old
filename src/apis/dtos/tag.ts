import { TagType } from '../../constants';

export interface Tag {
  seq: number;
  type: TagType;
  name: string;
  describe?: string;
  using: boolean;
}
