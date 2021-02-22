import Head from 'next/head';
import NavBar from 'components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotifu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </>
  );
}
