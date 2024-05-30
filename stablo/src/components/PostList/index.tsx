// Models
import { PostType } from '@/models/post';

// Component
import PostCard from '../PostCard';

interface PostListProps {
  postList: PostType[];
}

const PostList = ({ postList }: PostListProps) =>
  postList.map((post, index) => (
    <PostCard
      key={index}
      image={post.image}
      title={post.title}
      category={post.category}
      authorName={post.authorName}
      authorImage={post.authorImage}
      createdDay={post.createdDay}
    />
  ));

export default PostList;
