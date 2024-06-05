import { CustomClassType } from '@/types';

const ChevronRightIcon = ({ customClass = 'h-3 w-3' }: CustomClassType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default ChevronRightIcon;
