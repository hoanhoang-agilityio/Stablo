// Constants
import { ROUTER } from '@/constants';

// APIs
import { getPostList } from './api/post';

// Components
import PostList from '@/components/PostList';
import { LinkButton } from '@/components/common/LinkButton';

const Home = async () => {
  const data = (await getPostList()) || [];

  const renderPostCards = (start: number, end?: number) => (
    <PostList postList={data.slice(start, end)} />
  );

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {renderPostCards(0, 2)}
      </div>
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {renderPostCards(2, 14)}
      </div>
      <div className="mt-10 flex justify-center">
        <LinkButton href={ROUTER.ARCHIVE}>
          <p className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40">
            View all Posts
          </p>
        </LinkButton>
      </div>
    </main>
  );
};

export default Home;
