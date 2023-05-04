import { useEffect, useMemo, useState } from "react";
import { Inter } from "next/font/google"

const inter = Inter({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin']
})

import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";

const fetchFromNotion = async () => {
  const res = await fetch('http://localhost:3000/api/notion');
  const data = await res.json();
  return JSON.parse(data);
}

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useMemo(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await fetchFromNotion();
      setLoading(false);

      setPosts(data);
    }
    fetch()
  }, [fetch])

  return (
    <div className={inter.className}>
      <Header />
      <Layout>
        <Quote>
          &#60;Olá! Eu sou Helder, um desenvolvedor fullstack com enfâse em front-end. Tenho 17 anos e sou um apaixonado por tecnologia, além de adorar enfrentar novos desafios. /&#62;
        </Quote>
        <Skills />
        <Portfolio data={posts} load={loading} />
      </Layout>
      <Footer />
    </div>
  );
}
