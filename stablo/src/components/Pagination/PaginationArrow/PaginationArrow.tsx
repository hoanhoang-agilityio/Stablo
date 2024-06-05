import { useRouter } from 'next/navigation';

// Components
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons';

interface PaginationArrowProps {
  direction: 'left' | 'right';
  title: string;
  href: string;
  isDisabled: boolean;
}

const PaginationArrow = ({
  direction,
  title,
  href,
  isDisabled,
}: PaginationArrowProps) => {
  const router = useRouter();
  const isLeft = direction === 'left';

  const handleNavigation = () => router.push(href);

  return (
    <button
      onClick={handleNavigation}
      className={`relative inline-flex items-center gap-1 border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 ${isLeft ? 'rounded-l-md' : 'rounded-r-md'}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {isLeft && <ChevronLeftIcon />}
      {title}
      {!isLeft && <ChevronRightIcon />}
    </button>
  );
};

export default PaginationArrow;
