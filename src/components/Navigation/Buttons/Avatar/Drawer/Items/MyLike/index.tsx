import heartSvg from '../../../../../../../assets/svgs/navigation/heart.svg';
import { Root } from '..';

export default function MyLike() {
  return (
    <Root>
      <img alt="heart" src={heartSvg} />
      <div>나의 좋아요</div>
    </Root>
  );
}
