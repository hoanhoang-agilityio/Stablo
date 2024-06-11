// APIs
import { getPostByCategory } from '@/services/post';

// Utils
import { convertDashToSpace, upperCaseFirstLetter } from '@/utils';

// Components
import { PostList } from '@/components';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const Category = async ({ params: { slug } }: CategoryPageProps) => {
  const postList = await getPostByCategory(convertDashToSpace(slug));

  const totalPosts =
    postList?.length > 1
      ? `${postList?.length} Articles`
      : `${postList?.length} Article`;

  return (
    <main className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl">
          {upperCaseFirstLetter(convertDashToSpace(slug))}
        </h1>
        <p className="mt-1 text-gray-600">{totalPosts}</p>
      </div>
      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        <PostList postList={postList} />
      </div>
    </main>
  );
};

export default Category;
