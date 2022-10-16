import { Content } from '@src/apis/dtos';

export interface ContentsSectionProps {
  title: string;
  moreUrl: string;
  disabled?: boolean;
  contents: Content[];
}
