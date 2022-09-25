import { Tag } from '.';
import { BaseDto } from './common';

export class Content extends BaseDto {
  title!: string;
  thumbnail!: string;
  translate_review!: string;
  like!: number;
  tags!: Tag[];

  constructor(partial?: Partial<Content>) {
    super();
    Object.assign(this, partial);
  }
}
