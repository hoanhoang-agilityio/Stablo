// Constants
import { ENDPOINT } from '@/constants';

// APIs
import { getPostListFiltered } from '@/app/api/post';

// Models
import { Author as AuthorType } from '@/models';

// Components
import { AuthorCard, PostList } from '@/components';

interface AuthorPageProps {
  params: {
    name: string;
  };
}

const Author = async ({ params: { name } }: AuthorPageProps) => {
  const response = await fetch(`${ENDPOINT}/api/author?name=${name}`);
  const authorResponse = await response.json();

  const {
    name: authorName,
    avatar,
    bio,
    id,
  } = (authorResponse?.author?.[0] as AuthorType) || {};

  const authorPosts = await getPostListFiltered(id);

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <AuthorCard name={authorName} avatar={avatar} bio={bio} isDetail />
      </div>
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-2">
        <PostList postList={authorPosts.slice(0, 6)} />
      </div>
    </main>
  );
};

export default Author;
