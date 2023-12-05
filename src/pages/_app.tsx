import 'styles/global.scss';
import 'styles/reset.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '@/components/Header';
import PageTopLink from '@/components/common/PageTopLink';

const DynamicComponent = dynamic(() => import('./BaseProvider'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <DynamicComponent>
        <main>
          <Header />
          <Component {...pageProps} />
          <PageTopLink text={'Page Top'} onClick={() => alert('top')} />
        </main>
      </DynamicComponent>
    </>
  );
}
export default MyApp;
