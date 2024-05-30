import PostList from '@/components/PostList';

export default function Home() {
  // TODO: Replace by call APIs
  const MOCK_DATA = Array.from({ length: 20 }, (_, index) => ({
    image:
      'https://images.unsplash.com/photo-1714498988410-8ff6397ca441?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: `Architectural Engineering Wonders of the modern era for your Inspiration ${index + 1}`,
    category: ['CATEGORY'],
    authorName: `Mario Sanchez ${index + 1}`,
    authorImage:
      'https://images.unsplash.com/photo-1714498988410-8ff6397ca441?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdDay: 'October 21, 2022',
  }));

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
    </main>
  );
}
