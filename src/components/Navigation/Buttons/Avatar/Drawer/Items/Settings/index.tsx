import settingsSvg from '../../../../../../../assets/svgs/navigation/settings.svg';
import { Root } from '..';

export default function Settings() {
  return (
    <Root>
      <img alt="settings" src={settingsSvg} />
      <div>설정</div>
    </Root>
  );
}
