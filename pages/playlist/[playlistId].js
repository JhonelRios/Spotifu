import Link from 'next/link';
import { getPlaylistInfo } from 'utils/api';

import Layout from 'components/Layout';
import Track from 'components/Track';

import styles from 'styles/PlaylistInfo.module.css';

export default function PlaylistInfo({ tracks }) {
  console.log(tracks);

  const formatArtists = (artists = []) => {
    const artistsString = artists.reduce(
      (acc, curr) => `${acc.name}${curr.name}, `,
      { name: '' }
    );

    return artistsString.slice(0, -2);
  };

  const formatLength = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

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
          <img
            src="https://i.scdn.co/image/ab67616d0000b2730aedc3771cdda7f51002b8c4"
            alt="cover prueba"
          />
          <div className={styles.description}>
            <h1>Nombre</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, error?
            </p>
            <p>
              Creador<span> - 4302 likes</span>
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

          {tracks.items.map(({ track }, index) => (
            <Track
              number={index + 1}
              title={track.name}
              artist={formatArtists(track.artists)}
              album={track.album.name}
              length={formatLength(track.duration_ms)}
              key={track.id}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { playlistId } = params;
  const tracks = await getPlaylistInfo(playlistId);

  return {
    props: {
      tracks,
    },
  };
}
