// Components
import { PostList, Pagination } from '@/components';
import { getPostListPagination } from '@/services/post';

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

const Archive = async ({ searchParams }: SearchParamsProps) => {
  const currentPage = Number(searchParams?.page) || 1;

  const postListResponse = (await getPostListPagination(currentPage)) || [];

  const { postList, totalItems } = postListResponse || {};

  const totalPages = Number(totalItems) / 6;

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight">
        Archive
      </h1>
      <div className="text-center">
        <p className="text-lg">See all posts we have ever written.</p>
      </div>

      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        <PostList postList={postList} />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
};

export default Archive;
