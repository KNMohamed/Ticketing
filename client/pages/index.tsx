import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/LandingPage.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta name='description' content='Login to ticketing app' />
      </Head>

      <main>
        <h1>Landing Page</h1>
      </main>
    </div>
  );
};

export default Home;
