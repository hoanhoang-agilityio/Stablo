import Link from 'next/link';

// Constants
import { ROUTER } from '@/constants';

// Utils
import { convertSpaceToDash } from '@/utils';

// Components
import { LinkButton } from '@/components';

interface PostContentProps {
  title: string;
  category: string[];
}

const PostContent = ({ title, category }: PostContentProps) => (
  <div>
    <div className="flex gap-3">
      {category.map((item, index) => (
        <LinkButton key={index} href={`${ROUTER.CATEGORY}/${item}`}>
          <p className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
            {item}
          </p>
        </LinkButton>
      ))}
    </div>
    <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2">
      <Link
        className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]"
        href={`${ROUTER.POSTS}/${convertSpaceToDash(title)}`}
      >
        {title}
      </Link>
    </h2>
  </div>
);

export default PostContent;
