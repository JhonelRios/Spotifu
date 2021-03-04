import SongBox from 'components/SongBox';

import styles from 'styles/SongBoxList.module.css';

export default function SongBoxList({ playlists }) {
  return (
    <section className={styles.list}>
      {playlists.items.map((item) => (
        <SongBox src={item.images[0].url} key={item.id} />
      ))}
    </section>
  );
}
