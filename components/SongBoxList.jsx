import SongBox from 'components/SongBox';

import styles from 'styles/SongBoxList.module.css';

export default function SongBoxList({ playlists }) {
  console.log(playlists);
  return (
    <section className={styles.list}>
      {playlists.items.map((item) => (
        <SongBox
          src={item.images[0].url}
          name={item.name}
          description={item.description}
          id={item.id}
          key={item.id}
        />
      ))}
    </section>
  );
}
