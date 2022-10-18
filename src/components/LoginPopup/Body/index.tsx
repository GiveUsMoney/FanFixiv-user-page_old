import styled from '@emotion/styled';
import { Button, OutlinedInput } from '@mui/material';
import { SvgIcon } from '@mui/material';
import { userApi } from '@src/apis';
import { ExclamationIcon, TwitterIcon } from '@src/assets/icons';
import theme from '@src/assets/theme/theme';
import BlockMessage from '@src/components/BlockMessage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FormContainer,
  TextFieldElement,
  useForm,
  useFormState,
} from 'react-hook-form-mui';

const Root = styled.div`
  width: 368px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Main = styled.div`
  margin-left: 24px;
  width: calc(100% - 48px);
`;

const LoginLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.palette.primary.main};
  font-family: MinSans;
  font-size: 20px;
  margin-bottom: 48px;
`;

const IdBoxWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const PwBoxWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const InputBox = styled(TextFieldElement)`
  width: 100%;
  & .MuiInputBase-root {
    width: 100%;
    height: 40px;
  }
  & .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.palette.button.main};
  }
  & :hover.MuiInputBase-root .MuiOutlinedInput-notchedOutline {
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.palette.button.main};
  }
  & .MuiOutlinedInput-notchedOutline {
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${theme.palette.secondary.main};
  }
  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  & input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 8px;
  background-color: ${theme.palette.secondary.main};
  color: white;
  &:hover {
    background-color: ${theme.palette.button.main};
  }
`;

const TwitterLoginButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 8px;
  background-color: #1d9bf0;
  color: white;
  &:hover {
    background-color: #1d9bf0;
  }
  text-transform: none;
`;

const TwitterIconSized = styled(TwitterIcon)``;

const Util = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UtilButton = styled.div`
  height: 16px;
  font-family: MinSans;
  font-size: 12px;
  color: ${theme.palette.gray2.main};
  user-select: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

export type FormType = {
  email: string;
  pw: string;
};

export default function Body() {
  const formContext = useForm<FormType>();

  const [blocked, setBlocked] = useState<boolean>(false);

  const action = async () => {
    try {
      const ret = await userApi.login(
        formContext.getValues().email,
        formContext.getValues().pw,
      );
      window.localStorage.setItem('access-token', ret.token);
      setBlocked(false);
      location.href = `${process.env.REACT_APP_PUBLIC_URL}`;
    } catch (e: any) {
      setBlocked(true);
    }
  };

  return (
    <Root>
      <FormContainer
        formContext={formContext}
        handleSubmit={formContext.handleSubmit(action)}
      >
        <Main>
          <LoginLabelWrapper>
            <div>로그인</div>
          </LoginLabelWrapper>
          <IdBoxWrapper>
            <InputBox name="email" placeholder="email" />
          </IdBoxWrapper>
          <PwBoxWrapper>
            <InputBox name="pw" type="password" placeholder="pw" />
            {blocked ? (
              <BlockMessage message="아이디 패스워드를 확인해주세요." />
            ) : (
              false
            )}
          </PwBoxWrapper>
          <LoginButton type="submit">로그인</LoginButton>
          <TwitterLoginButton
            startIcon={
              <SvgIcon viewBox="0 0 16 13" component={TwitterIconSized} />
            }
          >
            Twitter로 로그인
          </TwitterLoginButton>
          <Util>
            <UtilButton>비밀번호 찾기</UtilButton>
            <UtilButton>회원가입</UtilButton>
          </Util>
        </Main>
      </FormContainer>
    </Root>
  );
}
