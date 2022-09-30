import bellSvg from '../../../../../../../assets/svgs/navigation/bell.svg';
import { Root } from '..';

export default function Alarm() {
  return (
    <Root>
      <img alt="bell" src={bellSvg} />
      <div>알람</div>
    </Root>
  );
}
