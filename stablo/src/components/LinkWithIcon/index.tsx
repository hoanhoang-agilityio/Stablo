import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export type LinkWithIconProps = {
  url: string;
  text: string;
  title?: string;
  icon?: ReactNode;
  additionalClass?: string;
};

export const LinkWithIcon = ({
  url,
  text,
  title,
  icon,
  additionalClass = 'px-5 py-2',
}: LinkWithIconProps) => (
  <Link
    href={url}
    title={title || text}
    className={twMerge(
      'text-sm font-medium text-gray-600 hover:text-blue-500',
      additionalClass,
    )}
  >
    {icon}
    {text}
  </Link>
);
