interface CardListSkeletonProps {
  totalItem?: number;
  customClass?: string;
}

const CardListSkeleton = ({
  totalItem = 15,
  customClass = 'grid gap-10 md:grid-cols-2 lg:gap-10',
}: CardListSkeletonProps) => (
  <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
    <div className={customClass}>
      <>
        {[...Array(totalItem)].map((_, index) => (
          <div className="group" key={index}>
            <div className="group cursor-pointer">
              <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
                <div className="relative block aspect-square (max-width: 768px) 30vw, 33vw">
                  <div className="object-cover transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    </div>
  </div>
);

export default CardListSkeleton;
