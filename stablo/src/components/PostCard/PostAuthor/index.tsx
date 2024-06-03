import Image from 'next/image';
import Link from 'next/link';

// Constants
import { ROUTER } from '@/constants';

// Utils
import { formatToLocalizedDate } from '@/utils';

interface PostAuthorProps {
  authorName: string;
  avatar: string;
  createdDay: string;
}

const PostAuthor = ({
  authorName,
  avatar,
  createdDay = '2022-10-21T15:48:00.000Z',
}: PostAuthorProps) => (
  <div className="mt-3 flex items-center space-x-3 text-gray-500">
    <div className="relative h-5 w-5 flex-shrink-0">
      <Image
        src={avatar}
        fill
        alt="Author Avatar"
        className="rounded-full object-cover"
        sizes="(max-width: 320px) 100vw, 320px"
      />
    </div>
    <Link href={`${ROUTER.AUTHOR}/${authorName}`}>
      <p className="truncate text-sm">{authorName}</p>
    </Link>

    <span className="text-xs text-gray-300">•</span>
    <time className="truncate text-sm" dateTime={createdDay}>
      {formatToLocalizedDate(createdDay)}
    </time>
  </div>
);

export default PostAuthor;
