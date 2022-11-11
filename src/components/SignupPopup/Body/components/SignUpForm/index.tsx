import {
  Alert,
  Button,
  Grow,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { userApi } from '@src/apis';
import { RegisterRequestDto } from '@src/apis/dtos';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function SignUpForm() {
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [emailAlert, setEmailAlert] = useState(false);
  const [emailConfirmAlert, setEmailConfirmAlert] = useState(false);
  const [nicknameAlert, setNicknameAlert] = useState(false);
  const [uuid, setUuid] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onDateChange = async (newValue: Dayjs | null) => {
    setBirthday(newValue);
  };
  const onCertEmail = async () => {
    if (!(await trigger(['email']))) return;
    const { uuid } = await userApi.certEmail(getValues('email'));
    setUuid(uuid);
    setEmailAlert(true);
  };
  const onCertNumber = async () => {
    try {
      await userApi.certNumber(getValues('emailConfirm'), uuid);
      setEmailConfirmAlert(true);
    } catch (error) {
      return '유효하지 않은 인증번호입니다.';
    }
  };
  const onIsNickDouble = async () => {
    try {
      await userApi.isNickDouble(getValues('nickname'));
      setNicknameAlert(true);
    } catch (error) {
      return '이미 존재하는 닉네임입니다.';
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (
    fieldValues: FieldValues,
  ) => {
    try {
      const formData: RegisterRequestDto = {
        birth: fieldValues.birthday.format('YYYY-MM-DD'),
        nickname: fieldValues.nickname,
        pw: fieldValues.password,
        uuid,
      };
      await userApi.regist(formData);
      location.href = process.env.REACT_APP_PUBLIC_URL!;
      // regist success
    } catch (error) {
      // TODO: 4xx, 5xx
    }
  };

  return (
    <SignUpFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SignUpFormControl>
        <SignUpFormLabel variant="h4">이메일 인증</SignUpFormLabel>
        <SingUpFormTextField
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식으로 입력해주세요.',
            },
          })}
          type="email"
          error={!!errors.email}
          placeholder="이메일을 입력하세요."
          helperText={errors.email?.message as string}
          variant="outlined"
          size="small"
        />
        <SignUpFormButton onClick={onCertEmail}>인증</SignUpFormButton>

        <Grow in={emailAlert}>
          <SignUpAlert
            severity="info"
            sx={{ display: emailAlert ? 'flex' : 'none' }}
          >
            이메일 인증번호가 전송되었습니다. 이메일을 확인해주세요.
          </SignUpAlert>
        </Grow>
      </SignUpFormControl>

      <SignUpFormControl>
        <SignUpFormLabel variant="h4">이메일 인증번호</SignUpFormLabel>
        <SingUpFormTextField
          {...register('emailConfirm', {
            required: '이메일 인증번호를 입력해주세요.',
            valueAsNumber: true,
            validate: onCertNumber,
          })}
          type="number"
          helperText={errors.emailConfirm?.message as string}
          error={!!errors.emailConfirm}
          placeholder="전송된 인증번호를 입력해주세요."
          variant="outlined"
          size="small"
        />
        <SignUpFormButton onClick={() => trigger(['emailConfirm'])}>
          확인
        </SignUpFormButton>
        <Grow in={emailConfirmAlert}>
          <SignUpAlert
            severity="success"
            sx={{ display: emailConfirmAlert ? 'flex' : 'none' }}
          >
            이메일이 인증되었습니다.
          </SignUpAlert>
        </Grow>
      </SignUpFormControl>

      <SignUpFormControl>
        <SignUpFormLabel variant="h4">비밀번호</SignUpFormLabel>
        <SingUpFormTextField
          {...register('password', {
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
              message: '영문, 특수문자를 사용 8자리 이상 입력해주세요.',
            },
          })}
          type="password"
          helperText={errors.password?.message as string}
          error={!!errors.password}
          placeholder="영문, 특수문자 사용 8자리 이상"
          variant="outlined"
          size="small"
        />
      </SignUpFormControl>

      <SignUpFormControl>
        <SignUpFormLabel variant="h4">비밀번호 확인</SignUpFormLabel>
        <SingUpFormTextField
          {...register('passwordConfirm', {
            validate: (val: string) => {
              if (watch('password') !== val) {
                return '비밀번호가 일치하지 않습니다.';
              }
            },
          })}
          type="password"
          helperText={errors.passwordConfirm?.message as string}
          error={!!errors.passwordConfirm}
          placeholder="동일한 비밀번호를 입력해주세요."
          variant="outlined"
          size="small"
        />
      </SignUpFormControl>

      <SignUpFormControl>
        <SignUpFormLabel variant="h4">닉네임</SignUpFormLabel>
        <SingUpFormTextField
          {...register('nickname', {
            required: '닉네임을 입력해주세요.',
            validate: onIsNickDouble,
          })}
          variant="outlined"
          size="small"
          helperText={errors.nickname?.message as string}
          error={!!errors.nickname}
        />
        <SignUpFormButton onClick={onIsNickDouble}>중복확인</SignUpFormButton>

        <Grow in={nicknameAlert}>
          <SignUpAlert
            severity="success"
            sx={{ display: nicknameAlert ? 'flex' : 'none' }}
          >
            사용가능한 닉네임입니다.
          </SignUpAlert>
        </Grow>
      </SignUpFormControl>

      <SignUpFormControl>
        <SignUpFormLabel variant="h4">생년월일</SignUpFormLabel>
        <DesktopDatePicker
          inputFormat="YYYY.MM.DD"
          value={birthday}
          openTo="year"
          onChange={onDateChange}
          renderInput={(props: TextFieldProps) => (
            <SingUpFormTextField
              {...props}
              {...register('birthday', {
                required: '생년월일을 입력해주세요.',
                setValueAs: () => birthday,
              })}
              helperText={errors.birthday?.message as string}
              error={!!errors.birthday}
              variant="outlined"
              size="small"
            />
          )}
        />
      </SignUpFormControl>

      <SignUpButton type="submit">회원가입</SignUpButton>
    </SignUpFormWrapper>
  );
}

const SignUpFormWrapper = styled('form')`
  margin-top: 60px;
`;

const SignUpFormControl = styled('div')`
  display: flex;
  flex-wrap: wrap;
  min-height: 87px;
  margin-bottom: 16px;
  gap: 4px;
  margin-top: 8px;
`;

const SignUpFormLabel = styled(Typography)`
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SingUpFormTextField = styled(TextField)(
  ({ theme }) => `
    flex-grow: 1;

    & .MuiInputBase-root {
      border-radius: 10px;
    }
    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${theme.palette.secondary.main};
    }
  `,
);

const SignUpFormButton = styled(Button)(
  ({ theme }) => `
    width: 100px;
    height: 40px;
    color: white;
    background-color: ${theme.palette.secondary.main};
    border-radius: 10px;
    
    &:hover {
      color: ${theme.palette.primary.main};
      border: 1px solid ${theme.palette.primary.main};
    }
  `,
);

const SignUpButton = styled(Button)(
  ({ theme }) => `
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 40px;
    color: white;
    background-color: ${theme.palette.secondary.main};
    border-radius: 10px;
    
    &:hover {
      color: ${theme.palette.primary.main};
      border: 1px solid ${theme.palette.primary.main};
    }
  `,
);

const SignUpAlert = styled(Alert)`
  width: '100%';
  flex-grow: 1;
  margin-top: 2px;
  border-radius: 10px;
`;
