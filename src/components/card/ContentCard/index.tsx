import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  SvgIcon,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { ContentCardProps } from './interface';

export default function ContentCard({
  title,
  thumbnail,
  tags,
  disabled,
}: ContentCardProps) {
  return (
    <FFContentCard>
      <CardMedia
        component="img"
        height="168"
        image={thumbnail}
        alt={title}
        sx={{
          WebkitFilter: disabled ? 'brightness(50%)' : '',
        }}
      ></CardMedia>
      <FFCardContent>
        <FFCardContentHeader>
          <FFContentTitle gutterBottom variant="h5">
            {title}
          </FFContentTitle>
          <FFButtonGroup>
            <FFIconButton size="small">
              <SvgIcon>
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21Z"
                  fill="black"
                />
              </SvgIcon>
            </FFIconButton>
            <FFIconButton size="small">
              <SvgIcon>
                <path
                  id="icon"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2929 7.29291L20.7071 8.70712L12 17.4142L3.29291 8.70712L4.70712 7.29291L12 14.5858L19.2929 7.29291Z"
                  fill="black"
                />
              </SvgIcon>
            </FFIconButton>
          </FFButtonGroup>
        </FFCardContentHeader>
        <FFContentSubTitle variant="subtitle1">와쿠이 켄</FFContentSubTitle>
      </FFCardContent>
      <FFCardActions disableSpacing>
        {tags.map(({ seq, name }) => (
          <FFChip
            key={seq}
            label={`#${name}`}
            size="small"
            onClick={() => {}}
          />
        ))}
      </FFCardActions>
    </FFContentCard>
  );
}

const FFContentCard = styled(Card)({
  maxWidth: 210,
  height: 268,
  borderRadius: 5,
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)',
});

const FFCardContent = styled(CardContent)({
  padding: 10,
  marginBottom: 2,
});

const FFCardContentHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  height: 19,
  marginBottom: 2,
});

const FFContentTitle = styled(Typography)({
  fontSize: 14,
  color: '#373737',
  fontWeight: 'bold',
});

const FFButtonGroup = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '4px',
});

const FFIconButton = styled(IconButton)({
  width: 16,
  height: 16,
  color: '#373737',
});

const FFContentSubTitle = styled(Typography)({
  color: '#606060',
  fontSize: 12,
});

const FFCardActions = styled(CardActions)({
  paddingTop: 0,
  gap: 4,
});

const FFChip = styled(Chip)({
  color: 'white',
  background: '#FFABAB',
  fontSize: 10,
  height: 21,
});
