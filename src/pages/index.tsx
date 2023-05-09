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


import { Fade } from "react-awesome-reveal";

const fetchFromNotion = async () => {
  const res = await fetch('http://localhost:3000/api/notion');
  const data = await res.json();
  return JSON.parse(data);
}

export default function Home() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // TO DO: Fix this to Deploy
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const data = await fetchFromNotion();

      setPosts(data);
      setLoading(false);
    }
    fetch()
  }, [fetch])

  return (
    <div className={inter.className}>
        <Header />
        <Fade>
          <Layout>
            <Portfolio data={posts} load={loading} />
          </Layout>
          <Footer />
        </Fade>
    </div>
  );
}
