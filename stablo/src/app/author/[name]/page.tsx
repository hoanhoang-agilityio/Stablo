// COnstants
import { MOCK_DATA } from '@/app/page';

// Components
import AuthorCard from '@/components/AuthorCard';
import PostList from '@/components/PostList';

interface AuthorPageProps {
  params: {
    name: string;
  };
}

// TODO: Create service to fetch data
async function getData(name: string) {
  const res = await fetch(
    `https://kabar-server.onrender.com/author?name=${name}`,
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Author({ params: { name } }: AuthorPageProps) {
  const data = await getData(name);

  const { name: authorName, avatar, bio } = data?.[0] || [];

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <AuthorCard name={authorName} avatar={avatar} bio={bio} isDetail />
      </div>
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-2">
        <PostList postList={MOCK_DATA.slice(0, 6)} />
      </div>
    </main>
  );
}
