import { ReactNode } from 'react';

export type LinkWithIconType = {
  url: string;
  text: string;
  title?: string;
  icon?: ReactNode;
  additionalClass?: string;
};
