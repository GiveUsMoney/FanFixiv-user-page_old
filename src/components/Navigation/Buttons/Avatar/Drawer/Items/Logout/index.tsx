import logoutSvg from '../../../../../../../assets/svgs/navigation/logout.svg';
import { Root } from '..';

export default function Logout() {
  return (
    <Root>
      <img alt="logout" src={logoutSvg} />
      <div>로그아웃</div>
    </Root>
  );
}
