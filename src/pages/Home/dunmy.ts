import { TagType } from '../../constants';
import { Content, Tag } from '../../models';

export const dummyContents = Array.from(
  Array(5),
  (_, n): Content =>
    new Content({
      seq: n,
      title: '도쿄 리벤져스',
      thumbnail: 'https://i.ibb.co/mvQh00H/sample.png',
      like: 0,
      tags: [
        new Tag({
          seq: 1,
          type: TagType.시리즈,
          name: '바지케이스케',
          using: true,
        }),
        new Tag({
          seq: 2,
          type: TagType.시리즈,
          name: '의리',
          using: true,
        }),
        new Tag({
          seq: 3,
          type: TagType.시리즈,
          name: '양키',
          using: true,
        }),
      ],
    }),
);

console.log(dummyContents);
