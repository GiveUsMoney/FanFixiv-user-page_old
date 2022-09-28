import { Button, Grid, styled, SvgIcon, Typography } from '@mui/material';

import { ContentCard } from '../../../../components/card';
import { ContentsSectionProps } from './interface';

export default function ContentsSection({
  title,
  contents,
  disabled,
}: ContentsSectionProps) {
  return (
    <FFContentsSectionWrapper>
      <FFContentsSectionHeader>
        <FFContentsSectionTitle>{title}</FFContentsSectionTitle>
        <FFMoreButton variant="text" size="small">
          더보기
          <SvgIcon>
            <path
              id="icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5858 12L7.29291 4.70712L8.70712 3.29291L17.4142 12L8.70712 20.7071L7.29291 19.2929L14.5858 12Z"
              fill="black"
            />
          </SvgIcon>
        </FFMoreButton>
      </FFContentsSectionHeader>
      <Grid container spacing={3} justifyContent="space-between">
        {contents.map((content) => (
          <Grid key={content.seq} item justifyContent="center">
            <ContentCard {...content} disabled={disabled} />
          </Grid>
        ))}
      </Grid>
    </FFContentsSectionWrapper>
  );
}

const FFContentsSectionWrapper = styled('div')({
  marginBottom: 60,
});

const FFContentsSectionHeader = styled('div')({
  height: 27,
  marginBottom: 24,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

const FFMoreButton = styled(Button)({
  color: '#686868',
  gap: 4,
  height: 19,
});

const FFContentsSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 20,
  color: theme.palette.main.main,
}));
