import Link from 'next/link';
import Image from 'next/image';

// Constants
import { ROUTER } from '@/constants/router';

// Types
import { LinkWithIconType } from '@/types';

// Components
import { LinkWithIcon } from '@/components';

const NAVIGATION_ITEMS: LinkWithIconType[] = [
  {
    url: ROUTER.HOME,
    text: 'Home',
    title: 'Home',
  },
  {
    url: ROUTER.ABOUT,
    text: 'About',
    title: 'About',
  },
  {
    url: ROUTER.CONTACT,
    text: 'Contact',
    title: 'Contact',
  },
  {
    url: ROUTER.ARCHIVE,
    text: 'Archive',
    title: 'Archive',
  },
  {
    url: ROUTER.AUTHOR,
    text: 'Author',
    title: 'Author',
  },
  {
    url: ROUTER.POSTS,
    text: 'Post',
    title: 'Post',
  },
];

const HALF = Math.ceil(NAVIGATION_ITEMS.length / 2);

const Header = () => (
  <header className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
    <nav className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
      <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
        {NAVIGATION_ITEMS.slice(0, HALF).map(({ url, text, title }) => (
          <LinkWithIcon key={url} url={url} text={text} title={title} />
        ))}
      </div>
      <div>
        <Link href="/" title="Home">
          <Image
            src={'/logo.svg'}
            alt="Logo"
            width={132}
            height={52}
            priority
          />
        </Link>
      </div>
      <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
        {NAVIGATION_ITEMS.slice(HALF).map(({ url, text, title }) => (
          <LinkWithIcon key={url} url={url} text={text} title={title} />
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
