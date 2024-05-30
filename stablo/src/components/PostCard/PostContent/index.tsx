interface PostContentProps {
  title: string;
  category: string[];
}

const PostContent = ({ title, category }: PostContentProps) => (
  <div>
    <div className="flex gap-3">
      {category.map((item, index) => (
        <span
          className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
          key={index}
        >
          {item}
        </span>
      ))}
    </div>
    <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2">
      {title}
    </h2>
  </div>
);

export default PostContent;
