import { Content, Tag } from '../../apis/dtos';
import { TagType } from '../../constants';

export const dummyContents = Array.from(
  Array(5),
  (_, n): Content => ({
    seq: n,
    title: '도쿄 리벤져스',
    thumbnail: 'https://i.ibb.co/mvQh00H/sample.png',
    like: 0,
    tags: [
      {
        seq: 1,
        type: TagType.시리즈,
        name: '바지케이스케',
        using: true,
      },
      {
        seq: 2,
        type: TagType.시리즈,
        name: '의리',
        using: true,
      },
      {
        seq: 3,
        type: TagType.시리즈,
        name: '양키',
        using: true,
      },
    ],
  }),
);
