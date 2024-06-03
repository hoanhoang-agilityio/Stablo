// APIs
import { getAuthorByName } from '@/app/api/author';
import { getPostListFiltered } from '@/app/api/post';

// Utils
import { convertUnderScoreTextToSpace } from '@/utils';

// Components
import AuthorCard from '@/components/AuthorCard';
import PostList from '@/components/PostList';

interface AuthorPageProps {
  params: {
    name: string;
  };
}

const Author = async ({ params: { name } }: AuthorPageProps) => {
  const data = await getAuthorByName(convertUnderScoreTextToSpace(name));

  const { name: authorName, avatar, bio, id } = data?.[0] || [];

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
