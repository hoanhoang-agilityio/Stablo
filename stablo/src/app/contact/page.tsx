import Image from 'next/image';

// Components
import { ContactForm } from '@/components';

const Contact = async () => {
  const CONTACT_CONTENTS = [
    { title: '1734 Sanfransico, CA 93063', icon: '/location.png' },
    { title: 'hello@stablotemplate.com', icon: '/mail.png' },
    { title: '+1 (987) 4587 899', icon: '/phone.png' },
  ];

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight">
        Contact
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a here to help.</p>
      </div>
      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold">Contact Stablo</h2>
          <p className="max-w-sm mt-5">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <div className="mt-5">
            {CONTACT_CONTENTS.map(({ title, icon }) => (
              <div
                key={title}
                className="flex items-center mt-2 space-x-2 text-dark-600"
              >
                <div className="relative flex-shrink-0 w-4 h-4">
                  <Image src={icon} alt={title} fill sizes="96px" />
                </div>
                <span>{title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
