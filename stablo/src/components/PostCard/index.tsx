// Models
import { Post } from '@/models/post';

// Components
import PostImage from './PostImage';
import PostAuthor from './PostAuthor';
import PostContent from './PostContent';

const PostCard = ({
  image,
  title,
  category,
  authorName,
  authorImage,
  createdAt,
}: Post) => (
  <div className="group cursor-pointer">
    <PostImage src={image} alt={title} />
    <PostContent title={title} category={category} />
    <PostAuthor
      authorName={authorName}
      avatar={authorImage}
      createdAt={createdAt}
    />
  </div>
);

export default PostCard;
