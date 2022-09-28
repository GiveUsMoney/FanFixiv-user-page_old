import translateSvg from '../../../../../../../assets/svgs/navigation/translate.svg';
import { Root } from '..';

export default function Translate() {
  return (
    <Root>
      <img alt="translate" src={translateSvg} />
      <div>번역 요청</div>
    </Root>
  );
}
