// APIs
import { getPostListByAuthorId } from '@/services/post';
import { getAuthorByName } from '@/services/author';

// Models
import { Author as AuthorType } from '@/models';

// Utils
import { convertDashToSpace } from '@/utils';

// Components
import { AuthorCard, PostList } from '@/components';

interface AuthorPageProps {
  params: {
    name: string;
  };
}

const Author = async ({ params: { name } }: AuthorPageProps) => {
  const author = await getAuthorByName(convertDashToSpace(name));

  const {
    name: authorName,
    avatar,
    bio,
    id,
  } = (author?.[0] as AuthorType) || {};

  const authorPosts = (await getPostListByAuthorId(id)) || [];

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <AuthorCard name={authorName} avatar={avatar} bio={bio} isDetail />
      </div>
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-2">
        <PostList postList={authorPosts || [].slice(0, 6)} />
      </div>
    </main>
  );
};

export default Author;
