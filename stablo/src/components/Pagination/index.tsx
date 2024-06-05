'use client';

import { usePathname, useSearchParams } from 'next/navigation';

// Components
import PaginationArrow from './PaginationArrow/PaginationArrow';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (pageNumber: number): string => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return '';
    }

    return createPageURL(pageNumber);
  };

  return (
    <nav
      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <PaginationArrow
        direction="left"
        title="Previous"
        isDisabled={currentPage <= 1}
        href={handlePageChange(currentPage - 1)}
      />
      <PaginationArrow
        direction="right"
        title="Next"
        isDisabled={currentPage >= totalPages}
        href={handlePageChange(currentPage + 1)}
      />
    </nav>
  );
};

export default Pagination;
