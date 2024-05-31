// Constants
import { MOCK_DATA } from '@/constants';

// Components
import AuthorCard from '@/components/AuthorCard';
import PostList from '@/components/PostList';

export default function Home() {
  const renderPostCards = (start: number, end?: number) => (
    <PostList postList={MOCK_DATA.slice(start, end)} />
  );

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
        {renderPostCards(0, 2)}
      </div>
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {renderPostCards(2)}
      </div>
      {/* TODO: This is for test will remove soon */}
      <AuthorCard
        name="Mario Sanchez"
        avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bio="Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple."
      />
    </main>
  );
}
