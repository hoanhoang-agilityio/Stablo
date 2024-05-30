import Image from 'next/image';

interface PostAuthorProps {
  authorName: string;
  avatar: string;
  createdDay: string;
}

// TODO: Move this function to a helper file
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const PostAuthor = ({
  authorName,
  avatar,
  createdDay = '2022-10-21T15:48:00.000Z',
}: PostAuthorProps) => (
  <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
    <div className="relative h-5 w-5 flex-shrink-0">
      <Image
        src={avatar}
        fill
        alt="Author Avatar"
        className="rounded-full object-cover"
      />
    </div>
    <p className="truncate text-sm">{authorName}</p>
    <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
    <time className="truncate text-sm" dateTime={createdDay}>
      {formatDate(createdDay)}
    </time>
  </div>
);

export default PostAuthor;
