import Link from 'next/link';
import React from 'react';

import Wrapper from '@/components/layouts/Wrapper';

function Fail() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <Wrapper>
        <div className="h-full w-full">
          <div className="relative w-full space-y-6 rounded-2xl bg-gradient-to-b from-red-50 to-red-100 py-10 text-center shadow-xl md:space-y-8 md:py-24">
            <div>
              <div className="mb-4 flex justify-center">
                <div className="h-16 w-16 text-red-500 md:h-24 md:w-24">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center text-2xl font-bold text-red-600">
                Payment Failed
              </div>
              <div className="text-center">
                An error occurred during payment processing
              </div>
            </div>

            <div className="flex justify-center">
              <button className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-black px-8 py-3 text-base font-semibold text-white duration-200 hover:opacity-90">
                <Link href="/" rel="noopener noreferrer" aria-label="home">
                  Return to Home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Fail;
