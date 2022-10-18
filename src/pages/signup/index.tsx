import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import SignUpForm from './components/SignUpForm';

export default function SignUpPage() {
  return (
    <SignUpPageContainer>
      <SignUpPageBox>
        <SignUpPageTitle>회원 가입</SignUpPageTitle>
        <SignUpForm />
      </SignUpPageBox>
    </SignUpPageContainer>
  );
}

const SignUpPageContainer = styled(Container)`
  margin-top: 48px;
  margin-bottom: 48px;
`;

const SignUpPageBox = styled(Box)(
  ({ theme }) => `
    margin: 0 auto;
    padding: 24px 48px;
    width: 520px;
    border: 2px solid ${theme.palette.cta.main};
    border-radius: 10px;
  `,
);

const SignUpPageTitle = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    font-size: 20px;
    line-height: 27px;
    font-weight: bold;
  `,
);
