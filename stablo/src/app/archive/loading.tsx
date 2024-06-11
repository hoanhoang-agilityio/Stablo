import { CardListSkeleton } from '@/components';

export default function Loading() {
  return (
    <CardListSkeleton
      totalItem={6}
      customClass="grid gap-10 mt-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3"
    />
  );
}
