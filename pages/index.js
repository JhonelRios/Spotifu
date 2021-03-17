import Head from 'next/head';

import { getPlaylists } from 'utils/api';

import Layout from 'components/Layout';
import SongBoxList from 'components/SongBoxList';

import styles from 'styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [topPlaylists, setTopPlaylists] = useState({});
  const [latinPlaylists, setLatinPlaylists] = useState({});
  const [newReleases, setNewReleases] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getPlaylists('featured'),
      getPlaylists('new'),
      getPlaylists('latin'),
    ]).then(([featuredData, newData, latinData]) => {
      setTopPlaylists(featuredData.playlists);
      setNewReleases(newData.albums);
      setLatinPlaylists(latinData.playlists);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Spotifu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <h1>Cargando..</h1>
      ) : (
        <Layout>
          <div className={styles.container}>
            <h1 className={styles.title}>Inicio</h1>

            <h2 className={styles.subtitle}>Top playlists</h2>
            <SongBoxList playlists={topPlaylists} />

            <h2 className={styles.subtitle} style={{ marginTop: '40px' }}>
              Latin playlists
            </h2>
            <SongBoxList playlists={latinPlaylists} />

            <h2 className={styles.subtitle} style={{ marginTop: '40px' }}>
              New Release
            </h2>
            <SongBoxList playlists={newReleases} />
          </div>
        </Layout>
      )}
    </>
  );
}
