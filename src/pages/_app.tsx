import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Meu Portfólio | Helder Martins',
  authors: [{name: 'Helder Martins'}],
  openGraph: {
    description: 'Olá! Eu sou Helder, um desenvolvedor fullstack com ênfase em front-end. Tenho 19 anos e sou um apaixonado por tecnologia, além de adorar enfrentar novos desafios.',
    images: ["https://picsum.photos/600/600"],
    title: 'Meu Portfólio | Helder Martins',
    url: 'https://heldermartins.vercel.app',
  },
  icons: {
    icon: [''],
    shortcut: ['https://cdn-icons-png.flaticon.com/512/2821/2821785.png'],
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata?.openGraph?.description} />
        <meta property="og:title" content={`${metadata.title}`} />
        <meta property="og:description" content={metadata?.openGraph?.description} />
        <meta property="og:url" content={`${metadata.openGraph?.url}`} />
        <meta property="og:image" content={`${metadata.openGraph?.images}`} />
        <link rel="icon" href={`https://cdn-icons-png.flaticon.com/512/2821/2821785.png`} />
        <title>{`${metadata.title}`}</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
