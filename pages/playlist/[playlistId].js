import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPlaylistInfo, getPlaylistTracks } from 'utils/api';
import { formatArtists, formatLength, formatNumber } from 'utils/formatters';

import Layout from 'components/Layout';
import Track from 'components/Track';

import styles from 'styles/PlaylistInfo.module.css';

export default function PlaylistInfo({ info }) {
  const { query } = useRouter();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getPlaylistTracks(query.playlistId)
      .then((res) => setTracks(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <div className={styles.img_container}>
              <img src="/icons/arrow-left.svg" alt="flecha hacia atras" />
            </div>
          </a>
        </Link>
        <h1>Tracks</h1>
      </div>

      <section className={styles.container}>
        <div className={styles.info}>
          <img src={info.images[0].url} alt={`${info.name} cover`} />
          <div className={styles.description}>
            <h1>{info.name}</h1>
            <p>{info.description}</p>
            <p>
              {info.owner.display_name}
              <span> - {formatNumber(info.followers.total)} followers</span>
            </p>
          </div>
        </div>

        <div className={styles.tracks}>
          <Track
            number="#"
            title="TITLE"
            artist="ARTIST"
            album="ALBUM"
            length="LENGTH"
            header
          />

          {tracks.length !== 0 ? (
            tracks.items.map(({ track }, index) => (
              <Track
                number={index + 1}
                title={track.name}
                artist={formatArtists(track.artists)}
                album={track.album.name}
                length={formatLength(track.duration_ms)}
                key={track.id}
              />
            ))
          ) : (
            <h5>Loading...</h5>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { playlistId } = params;
  const info = await getPlaylistInfo(playlistId);

  return {
    props: {
      info,
    },
  };
}
