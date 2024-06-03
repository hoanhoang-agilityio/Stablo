import Image from 'next/image';
import Link from 'next/link';

// Constants
import { ROUTER } from '@/constants';

// Utils
import { convertSpaceToUnderScore } from '@/utils';

interface PostImageProps {
  src: string;
  alt: string;
}

const PostImage = ({ src, alt }: PostImageProps) => (
  <div className="group cursor-pointer">
    <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
      <Link
        className="relative block aspect-square (max-width: 768px) 30vw, 33vw"
        href={`${ROUTER.POSTS}/${convertSpaceToUnderScore(alt)}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover transition-all"
          sizes="(max-width: 768px) 30vw, 33vw"
        />
      </Link>
    </div>
  </div>
);

export default PostImage;
