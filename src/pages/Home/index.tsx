import { Container, Grid, styled } from '@mui/material';

import ContentsSection from './components/ContentsSection';
import { dummyContents } from './dunmy';

export default function MainPage() {
  return (
    <MainPageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentsSection
            title="인기만화"
            moreUrl="/"
            contents={dummyContents}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentsSection
            title="최신만화"
            moreUrl="/"
            contents={dummyContents}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentsSection
            title="선호만화"
            moreUrl="/"
            contents={dummyContents}
            disabled={true}
          />
        </Grid>
      </Grid>
    </MainPageContainer>
  );
}

const MainPageContainer = styled(Container)({
  marginTop: 48,
});
