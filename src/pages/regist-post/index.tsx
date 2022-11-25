import { Button, OutlinedInput, styled } from '@mui/material';

export default function RegistPost() {
  return (
    <Root>
      <Main>
        <Title>만화등록</Title>
        {/* <RegistNewComic>
          <Label>새 만화 등록</Label>
          <Switch />
        </RegistNewComic> */}
        <ComicTitle>
          <Label>제목 입력</Label>
          <ComicTitleInput placeholder="제목을 입력해 주세요." />
        </ComicTitle>
        <NextButton>다음</NextButton>
      </Main>
    </Root>
  );
}

const Root = styled('div')`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled('div')`
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.cta.main};
  width: 1000px;
  padding: 24px 48px;
`;

const Title = styled('div')`
  color: ${({ theme }) => theme.palette.button.main};
  font-family: MinSans;
  font-weight: bold;
  font-size: 24px;
`;

const RegistNewComic = styled('div')`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Label = styled('div')`
  font-family: MinSans;
  font-weight: bold;
  font-size: 20px;
`;

const ComicTitle = styled('div')`
  margin-top: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const ComicTitleInput = styled(OutlinedInput)`
  height: 40px;
  &:hover .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-notchedOutline {
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.palette.secondary.main};
  }
  margin-left: 10px;
`;

const NextButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.button.main};
  color: white;
  &:hover {
    color: ${({ theme }) => theme.palette.tMain.main};
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.palette.tMain.main};
  }
`;
