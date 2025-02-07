import Link from 'next/link';
import React from 'react';

import Button from '@/components/core/Button';
import Wrapper from '@/components/layouts/Wrapper';

function Success() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <Wrapper>
        <div className="h-full w-full text-white">
          <div className="relative w-full space-y-6 rounded-2xl bg-gradient py-10 text-center shadow-xl md:space-y-8 md:py-24">
            <div>
              <div className="mb-4 flex justify-center">
                <div className="h-16 w-16 md:h-24 md:w-24">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <path
                      d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center text-xl font-bold md:text-2xl">
                Payment Successful!
              </div>
              <div className="text-center text-sm md:text-base">
                Thank you for your purchase
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                appearance="secondary"
                className="duration-200 hover:opacity-90"
              >
                <Link href="/" rel="noopener noreferrer" aria-label="home">
                  Return to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Success;
