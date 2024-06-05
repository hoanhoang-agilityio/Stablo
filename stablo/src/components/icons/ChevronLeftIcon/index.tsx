import { CustomClassType } from '@/types';

const ChevronLeftIcon = ({ customClass = 'h-3 w-3' }: CustomClassType) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    data-slot="icon"
    className={customClass}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

export default ChevronLeftIcon;
