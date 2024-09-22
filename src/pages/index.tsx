import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import { GithubUser } from '@/types/github.user';
import { fetchFromNotion } from '@/utils/fetchFromNotion';
import { getUserFromGithub } from '@/utils/getUserFromGithub';
import { useEffect, useState } from 'react';

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<GithubUser>();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await fetchFromNotion();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserFromGithub();
      setUser(data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Header avatar_url={user?.avatar_url} name={user?.name} login={user?.login} />
      <Layout {...user}>
        <Portfolio data={posts} load={loading} />
      </Layout>
      <Footer />
    </div>
  );
}
