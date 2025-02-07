/* eslint-disable import/no-extraneous-dependencies */
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Toaster } from 'react-hot-toast';

import SEO from '@/config/next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Toaster position="top-center" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
