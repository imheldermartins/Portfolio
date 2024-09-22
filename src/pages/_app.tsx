import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Meu Portfólio | Helder Martins',
  description: 'Olá! Eu sou Helder, um desenvolvedor fullstack com ênfase em front-end. Tenho 19 anos e sou um apaixonado por tecnologia, além de adorar enfrentar novos desafios.',
  url: 'https://heldermartins.vercel.app',
  image: 'https://picsum.photos/600/600',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <title>{metadata.title}</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
