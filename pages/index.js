import Head from 'next/head';

import Layout from 'components/Layout';
import SongBoxList from 'components/SongBoxList';

import styles from 'styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotifu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>Inicio</h1>

          <h2 className={styles.subtitle}>Top playlists</h2>
          <SongBoxList />

          <h2 className={styles.subtitle} style={{ marginTop: '40px' }}>
            Top playlists
          </h2>
          <SongBoxList />

          <h2 className={styles.subtitle} style={{ marginTop: '40px' }}>
            Top playlists
          </h2>
          <SongBoxList />
        </div>
      </Layout>
    </>
  );
}
