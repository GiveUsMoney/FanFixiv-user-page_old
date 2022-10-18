import { Tag } from '.';

export interface Content {
  seq: number;
  title: string;
  thumbnail: string;
  translate_review?: string;
  like: number;
  tags: Tag[];
}
