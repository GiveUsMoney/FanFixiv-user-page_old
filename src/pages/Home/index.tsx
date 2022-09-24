import { Container, Grid, styled } from '@mui/material';

import ContentsSection from './components/ContentsSection';

export interface SampleTag {
  sampleTageId: number;
  label: string;
}

export interface SampleContent {
  sampleContentId: number;
  title: string;
  subtitle: string;
  thumnail: string;
  url: string;
  tags: SampleTag[];
}

const sample: SampleContent[] = Array.from(
  [1, 2, 3, 4, 5],
  (n): SampleContent => ({
    sampleContentId: n,
    title: '도쿄 리벤져스',
    subtitle: '와쿠이 켄',
    thumnail: 'https://i.ibb.co/mvQh00H/sample.png',
    url: '/',
    tags: [
      { sampleTageId: 1, label: '바지케이스케' },
      { sampleTageId: 2, label: '의리' },
      { sampleTageId: 3, label: '양키' },
    ],
  }),
);

export default function MainPage() {
  return (
    <MainPageContainer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentsSection title="인기만화" moreUrl="/" contents={sample} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentsSection title="최신만화" moreUrl="/" contents={sample} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ContentsSection
            title="선호만화"
            moreUrl="/"
            contents={sample}
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
