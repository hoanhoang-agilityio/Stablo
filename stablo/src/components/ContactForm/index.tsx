'use client';

import { Controller, useForm } from 'react-hook-form';

interface ContactForm {
  fullName: string;
  email: string;
  message: string;
}
export const ContactForm = () => {
  const { control } = useForm<ContactForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  return (
    <div>
      {/* FullName */}
      <Controller
        control={control}
        name="fullName"
        render={() => (
          <div>
            <div className="mb-5">
              <input
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100"
                placeholder="Full Name"
                type="text"
              />
            </div>
          </div>
        )}
      />

      {/* Email Address */}
      <Controller
        control={control}
        name="email"
        render={() => (
          <div>
            <div className="mb-5">
              <input
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100"
                placeholder="Email Address"
                type="text"
              />
            </div>
          </div>
        )}
      />

      {/* Your Message */}
      <Controller
        control={control}
        name="email"
        render={() => (
          <div>
            <div className="mb-5">
              <textarea
                name="message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                placeholder="Your Message"
              />
            </div>
          </div>
        )}
      />
      <button className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
        Send Message
      </button>
    </div>
  );
};
