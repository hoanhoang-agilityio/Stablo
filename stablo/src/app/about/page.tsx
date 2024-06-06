import Link from 'next/link';
import Image from 'next/image';

// Constants
import { ROUTER } from '@/constants';

// utils
import { convertSpaceToDash } from '@/utils';

// APIs
import { getAuthorList } from '../api/author';

const About = async () => {
  const authorList = (await getAuthorList()) || [];

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>
      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authorList.map(
          ({
            id,
            avatar,
            name,
          }: {
            id: string;
            avatar: string;
            name: string;
          }) => (
            <div
              key={id}
              className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16"
            >
              <Link href={`/author/${convertSpaceToDash(name)}`}>
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
              </Link>
            </div>
          ),
        )}
      </div>
      <div className="max-w-prose w-full mx-auto mt-14 text-center">
        <p className="mt-5">
          We provide real-time connectivity to enable software providers and
          financial institutions to build integrated products for their small
          business customers.
        </p>
        <p className="mt-5">
          Our API infrastructure is leveraged by clients ranging from lenders to
          corporate card providers and business forecasting tools, with use
          cases including automatic reconciliation, business dashboarding, and
          loan decisioning.
        </p>
        <p className="mt-5 underline font-normal">
          <Link className="" href={ROUTER.CONTACT}>
            Get in touch
          </Link>
        </p>
      </div>
    </main>
  );
};

export default About;
