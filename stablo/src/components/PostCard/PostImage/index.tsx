import Image from 'next/image';

interface PostImageProps {
  src: string;
  alt: string;
}

const PostImage = ({ src, alt }: PostImageProps) => (
  <div className="group cursor-pointer">
    <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
      <a className="relative block aspect-square">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-all"
          sizes="(max-width: 768px) 30vw, 33vw"
        />
      </a>
    </div>
  </div>
);

export default PostImage;
