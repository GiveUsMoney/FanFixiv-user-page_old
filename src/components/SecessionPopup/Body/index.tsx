import { Button, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

import { usePasswordModel } from './PasswordModel';
import { usePasswordValidator } from './PasswordValidator';
import { useSecessionCheckModel } from './SecessionCheckModel';
import { useSecessionCheckValidator } from './SecessionCheckValidator';

export default function Body() {
  const secessionCheckModel = useSecessionCheckModel();
  const secessionCheckValidator = useSecessionCheckValidator();
  const passwordModel = usePasswordModel();
  const passwordValidator = usePasswordValidator();

  return (
    <Root>
      <Title>계정 탈퇴</Title>
      <Description>
        정말로 FanFixiv를 탈퇴하시겠습니까?
        <br />
        만약 정말로 탈퇴를 원하신다면 아래의 입력창에 탈퇴를 입력해주세요.
      </Description>
      <SecessionCheckLabel>탈퇴를 입력해주세요</SecessionCheckLabel>
      <SecessionCheckInput
        onChange={(e) => {
          secessionCheckModel.handleChange(e);
        }}
        onBlur={() => {
          secessionCheckValidator.validate(secessionCheckModel.check);
        }}
      />
      {!secessionCheckValidator.valid && (
        <ErrorMessage>&quot;탈퇴&quot;을 입력해 주세요</ErrorMessage>
      )}
      <PasswordLabel>비밀번호 입력</PasswordLabel>
      <PasswordInput
        type="password"
        onChange={(e) => passwordModel.handleChange(e)}
      />
      {!passwordValidator.valid && (
        <ErrorMessage>비밀번호를 확인해주세요.</ErrorMessage>
      )}
      <ApproveButton
        onClick={async () => {
          secessionCheckValidator.validate(secessionCheckModel.check);
          await passwordValidator.validate(passwordModel.pw);
          location.href = process.env.REACT_APP_PUBLIC_URL;
        }}
      >
        탈퇴하기
      </ApproveButton>
    </Root>
  );
}

const Root = styled('div')`
  padding: 24px 48px;
  width: 520px;
`;

const Title = styled('div')`
  color: ${({ theme }) => theme.palette.tMain.main};
  font-size: 20px;
`;

const Description = styled('div')`
  font-size: 12px;
  margin-top: 20px;
`;

const SecessionCheckLabel = styled('div')`
  font-family: MinSans;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const SecessionCheckInput = styled(OutlinedInput)`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  &:hover .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const ErrorMessage = styled('div')`
  font-size: 14px;
  color: red;
  margin-top: 2px;
`;

const PasswordLabel = styled('div')`
  font-family: MinSans;
  font-size: 16px;
  font-weight: bold;
  margin-top: 25px;
`;

const PasswordInput = styled(OutlinedInput)`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  &:hover .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const ApproveButton = styled(Button)`
  width: 100%;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: white;
  }
`;
