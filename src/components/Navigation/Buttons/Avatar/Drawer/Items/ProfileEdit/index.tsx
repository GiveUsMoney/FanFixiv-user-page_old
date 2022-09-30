import pencilSvg from '../../../../../../../assets/svgs/navigation/pencil-create.svg';
import { Root } from '..';

export default function ProfileEdit() {
  return (
    <Root>
      <img alt="pencil" src={pencilSvg} />
      <div>프로필 수정</div>
    </Root>
  );
}
