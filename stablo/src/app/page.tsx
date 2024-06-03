// APIs
import { getPostList } from './api/post';

// Components
import PostList from '@/components/PostList';

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
        {renderPostCards(2)}
      </div>
    </main>
  );
};

export default Home;
