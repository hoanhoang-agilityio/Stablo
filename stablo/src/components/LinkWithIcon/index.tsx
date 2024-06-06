import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import { LinkWithIconType } from '@/types';

const LinkWithIcon = ({
  url,
  text,
  title,
  icon,
  additionalClass = 'px-5 py-2',
}: LinkWithIconType) => (
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

export default LinkWithIcon;
