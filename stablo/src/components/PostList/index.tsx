// Models
import { Post } from '@/models/post';

// Component
import PostCard from '../PostCard';

interface PostListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostListProps) =>
  postList.map(
    ({ image, title, category, authorName, authorImage, createdAt }, index) => (
      <PostCard
        key={index}
        image={image}
        title={title}
        category={category}
        authorName={authorName}
        authorImage={authorImage}
        createdAt={createdAt}
      />
    ),
  );

export default PostList;
