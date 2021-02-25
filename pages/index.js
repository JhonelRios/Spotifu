import Head from 'next/head';

import NavBar from 'components/NavBar';
import Header from 'components/Header';
import SongBox from 'components/SongBox';

import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotifu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <NavBar />
        <div>
          <Header />
          <main className={styles.main}>
            <SongBox />
          </main>
        </div>
      </div>
    </>
  );
}
