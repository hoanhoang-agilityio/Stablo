// Models
import { Post } from '@/models/post';

// Component
import PostCard from '../PostCard';

interface PostListProps {
  postList: Post[];
}

const PostList = ({ postList }: PostListProps) =>
  postList.map(
    (
      { image, title, category, authorName, authorImage, createdDay },
      index,
    ) => (
      <PostCard
        key={index}
        image={image}
        title={title}
        category={category}
        authorName={authorName}
        authorImage={authorImage}
        createdDay={createdDay}
      />
    ),
  );

export default PostList;
