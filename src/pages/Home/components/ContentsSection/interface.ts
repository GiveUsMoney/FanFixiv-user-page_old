import { Content } from '../../../../models';

export interface ContentsSectionProps {
  title: string;
  moreUrl: string;
  disabled?: boolean;
  contents: Content[];
}
