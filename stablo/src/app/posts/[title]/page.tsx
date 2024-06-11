import Image from 'next/image';
import Link from 'next/link';

// Constants
import { ROUTER } from '@/constants';

// APIs
import { getAuthorById } from '@/app/api/author';

// Utils
import {
  convertDashToSpace,
  convertSpaceToDash,
  formatToLocalizedDate,
} from '@/utils';

// Models
import { Post } from '@/models';

// Components
import { AuthorCard, LinkButton } from '@/components';

interface AuthorPageProps {
  params: {
    title: string;
  };
}

export default async function PostDetail({
  params: { title },
}: AuthorPageProps) {
  const response = await fetch(
    `${process.env.API_END_POINT}/posts?name=${convertDashToSpace(title)}`,
    {
      cache: 'no-cache',
    },
  );

  const authorResponse = await response.json();

  const {
    title: postTitle,
    image,
    category,
    createdAt,
    authorImage,
    authorName,
    authorId,
  } = (authorResponse[0] as Post) || {};

  const author = await getAuthorById(authorId || '');

  const { name, avatar, bio } = author?.[0] || {};

  return (
    <main>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <div className="flex gap-3">
              {category?.map((category: string) => (
                <Link
                  key={category}
                  href={`${ROUTER.CATEGORY}/${category}`}
                  className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
                >
                  {category.toLocaleUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight">
            {postTitle}
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Link
                  href={`${ROUTER.AUTHOR}/${convertSpaceToDash(authorName)}`}
                >
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="rounded-full object-cover"
                    sizes="40px"
                  />
                </Link>
              </div>
              <div className="">
                <p className="text-gray-800">
                  <Link
                    href={`${ROUTER.AUTHOR}/${convertSpaceToDash(authorName)}`}
                  >
                    {authorName}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500" dateTime={createdAt}>
                    {formatToLocalizedDate(createdAt)}
                  </time>
                  <span>2 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={image}
          alt={postTitle}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3">
            <p>
              <strong>
                Simply understood, brand architecture is the art and science of
                structuring the portfolio to meet your strategic goals, defining
                the brand number, scope, and relationships needed to compete.
                Just as Modern Architecture prioritized function, a Brand
                Architecture is only as good as it is well-suited for the
                purpose it strives to achieve. Given the disruption observed
                today across industries and segments, it’s no wonder that
                companies are considering structural rather than topical
                solutions to the challenges they face.
              </strong>
            </p>
            <p className="my-3">
              Simply understood, brand architecture is the art and science of
              structuring the portfolio to meet your strategic goals, defining
              the brand number, scope, and relationships needed to compete. Just
              as Modern Architecture prioritized function, a Brand Architecture
              is only as good as it is well-suited for the purpose it strives to
              achieve. Given the disruption observed today across industries and
              segments, it’s no wonder that companies are considering structural
              rather than topical solutions to the challenges they face.
            </p>
            <p className="my-3">
              Yet the context in which brand architecture decisions are being
              made has changed. Gone are the days of “competitive strategy”,
              with the military-inspired view of competition as a zero-sum game,
              where market share needs to be stolen from competitors, often in a
              street-by-street battle to win over each individual segment. The
              type of brand architecture required to win in this game demanded a
              dogged focus on each segment, and a sniper-like collection of
              individual brands sharply focused on each one. While there was
              always a place for a variety of architectures — see
              Joachimsthaler’s brand relationship spectrum — houses of brands
              were favored, as it enabled segment-by-segment competition and
              risk protection. P&G was the king of houses of brands, slicing and
              dicing the market not just by products and demographics, but also
              by psychographics, price range, buying patterns or attitudes. In
              B2B, houses of brands were omnipresent, with a product-driven
              logic that led to branding new features meant to provide
              short-term competitive advantage.
            </p>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <LinkButton href={ROUTER.HOME}>
              <p className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600">
                ← View all posts
              </p>
            </LinkButton>
          </div>
          <AuthorCard name={name} avatar={avatar} bio={bio} />
        </article>
      </div>
    </main>
  );
}
