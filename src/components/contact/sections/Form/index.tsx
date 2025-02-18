import Link from 'next/link';
import React from 'react';

// import { useForm } from 'react-hook-form';
// import Button from '@/components/core/Button';
import GradientContainer from '@/components/core/GradientContainer';
import Wrapper from '@/components/layouts/Wrapper';
import PhoneIcon from '@/icons/home/phoneIcon';
// import { Input } from './core/Input';
// import { Textarea } from './core/Textarea';
import UKIcon from '@/icons/home/UKIcon';
import EmailIcon from '@/icons/share/emailIcon';
import FacebookIcon from '@/icons/share/facebookIcon';
import YoutubeIcon from '@/icons/share/youtubeIcon';

// type TForm = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone: string;
//   message: string;
// };
export default function Form() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<TForm>();

  // const onSubmit = (data: TForm) => {
  //   console.log(data);
  // };
  return (
    <section>
      <Wrapper>
        <div>
          <p className="mb-4 text-center text-2xl font-bold leading-normal text-green-1 md:mb-16 md:text-3xl">
            We&lsquo;d love to hear from you
          </p>
          <div className="flex flex-col space-y-4 rounded-2xl border border-gray-50 bg-white px-2 py-3 md:flex-row md:items-start md:justify-between md:space-x-3 md:space-y-0 md:p-4">
            <GradientContainer className="nd:w-[400px] flex flex-col items-start justify-between space-y-5 rounded-md py-8 md:h-[490px]">
              <div>
                <p className="mb-2 text-start text-2xl font-semibold leading-normal md:mb-4 md:text-3xl">
                  Contact Information
                </p>
                <p className="mb-8 text-start leading-normal md:mb-16 md:text-lg">
                  We&lsquo;re here to assist you! Whether you have inquiries,
                  suggestions, or simply want to reach out, feel free to contact
                  us via phone or email
                </p>
                <div className="flex flex-col items-start space-y-4 md:text-lg">
                  <div className="z-50 flex items-center space-x-3">
                    <EmailIcon />
                    <Link href="mailto:info@sborphanagetrust.co.uk">
                      <p className="cursor-pointer">
                        info@sborphanagetrust.co.uk
                      </p>
                    </Link>
                  </div>
                  <div className="z-50 flex space-x-3 md:items-center">
                    <PhoneIcon />
                    <Link href="tel:07903106037">
                      <div className="flex cursor-pointer items-center space-x-2 ">
                        <p className="flex items-center space-x-1">
                          <UKIcon />
                          <p>+44</p>
                        </p>
                        <p> 790 310 6037</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="z-50 flex items-center  space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-1">
                  <Link
                    href={
                      'https://www.youtube.com/channel/UCkjUA3xAWBTPSVe95BMyqxg'
                    }
                  >
                    <a target="_blank" aria-label="youtube-link">
                      <YoutubeIcon />
                    </a>
                  </Link>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-1">
                  <Link href={'https://www.facebook.com/rukyahijama1'}>
                    <a target="_blank" aria-label="facebook-link">
                      <FacebookIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </GradientContainer>
            {/**
             * Fprm section
             */}
            {/* <div className="w-full py-8 md:max-w-[710px] md:px-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8 flex w-full flex-col space-y-8 lg:mb-11 lg:flex-row lg:items-start lg:justify-between lg:space-x-10 lg:space-y-0">
                  <div className="lg:w-1/2">
                    <label
                      htmlFor=""
                      className="mb-1 block text-sm font-medium text-dark-1"
                    >
                      First Name *
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      {...register('first_name', {
                        required: {
                          value: true,
                          message: 'This field is required',
                        },
                      })}
                      error={errors.first_name?.message}
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label
                      htmlFor=""
                      className="mb-1 block text-sm font-medium text-dark-1"
                    >
                      Last Name *
                    </label>
                    <Input
                      placeholder="Enter your last name"
                      {...register('last_name', {
                        required: {
                          value: true,
                          message: 'This field is required',
                        },
                      })}
                      error={errors.last_name?.message}
                    />
                  </div>
                </div>
                <div className="mb-8 flex w-full flex-col space-y-8 lg:mb-11 lg:flex-row lg:items-start lg:justify-between lg:space-x-10 lg:space-y-0">
                  <div className="lg:w-1/2">
                    <label
                      htmlFor=""
                      className="mb-1 block text-sm font-medium text-dark-1"
                    >
                      Email *
                    </label>
                    <Input
                      placeholder="Enter your email"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'This field is required',
                        },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: 'Invalid email address',
                        },
                      })}
                      error={errors.email?.message}
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <label
                      htmlFor=""
                      className="mb-1 block text-sm font-medium text-dark-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      placeholder="Enter your phone number"
                      {...register('phone', {
                        pattern: {
                          value: /^(\+\d{1,})?$|^(\d|\s|\(|\))*$/,
                          message: 'Invalid phone number format',
                        },
                      })}
                      type="tel"
                      error={errors.phone?.message}
                    />
                  </div>
                </div>
                <div className="mb-16 w-full">
                  <label
                    htmlFor=""
                    className="mb-1 block text-sm font-medium text-dark-1"
                  >
                    Message *
                  </label>
                  <Textarea
                    placeholder="Write your message.."
                    {...register('message', {
                      required: {
                        value: true,
                        message: 'This field is required',
                      },
                    })}
                    error={errors.message?.message}
                  />
                </div>
                <div className="flex w-full md:justify-end">
                  <Button
                    label="Send"
                    className="w-full lg:w-auto"
                    type="submit"
                  />
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
