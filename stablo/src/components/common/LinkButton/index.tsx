import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  children?: React.ReactNode;
  customClass?: string;
}

const LinkButton = ({ href, children, customClass }: LinkButtonProps) => (
  <Link href={href} className={customClass}>
    {children}
  </Link>
);

export default LinkButton;
