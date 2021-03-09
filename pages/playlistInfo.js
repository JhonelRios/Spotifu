import Layout from 'components/Layout';
import Track from 'components/Track';
import Link from 'next/link';

import styles from 'styles/PlaylistInfo.module.css';

export default function PlaylistInfo() {
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

          <div className={styles.track_list}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Track
                number={num}
                title="Dakiti"
                artist="Bad Bunny"
                album="YALQSMDLG"
                length="3:21"
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
