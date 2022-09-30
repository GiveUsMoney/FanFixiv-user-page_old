import drawerHashSvg from '../../../../../../../assets/svgs/navigation/drawer-hash.svg';
import { Root } from '..';

export default function TagList() {
  return (
    <Root>
      <img alt="tagList" src={drawerHashSvg} />
      <div>태그 목록</div>
    </Root>
  );
}
