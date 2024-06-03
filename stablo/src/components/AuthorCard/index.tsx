import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

// utils
import { convertSpaceToUnderScore } from '@/utils';

// Constants
import { ROUTER } from '@/constants/router';

interface Author {
  name: string;
  avatar: string;
  bio: string;
  isDetail?: boolean;
}

const AuthorCard = ({ name, avatar, bio, isDetail }: Author) => (
  <div
    className={`px-8 mt-3 text-gray-500 rounded-2xl ${!isDetail && 'py-8 bg-gray-50'}`}
  >
    <div
      className={twMerge(
        `flex ${isDetail ? 'flex-col items-center justify-center' : 'flex-wrap items-start sm:space-x-6 sm:flex-nowrap'}`,
      )}
    >
      <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
        <Image
          src={avatar}
          alt={name}
          fill
          sizes="96px"
          priority
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <div className="mb-3">
          <h3
            className={`${isDetail ? 'text-center mt-2 text-3xl font-semibold tracking-tight' : 'text-lg font-medium'} text-gray-800`}
          >{`About ${name}`}</h3>
        </div>
        <div>
          <p
            className={
              isDetail
                ? 'mx-auto mt-2 flex max-w-xl flex-col px-5 text-center text-gray-500'
                : ''
            }
          >
            {bio}
          </p>
        </div>
        {!isDetail && (
          <div className="mt-3">
            <Link
              className={'py-2 text-sm text-blue-600 rounded-full'}
              href={`${ROUTER.AUTHOR}/${convertSpaceToUnderScore(name)}`}
            >
              View Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default AuthorCard;
