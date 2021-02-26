import SongBox from 'components/SongBox';

import styles from 'styles/SongBoxList.module.css';

export default function SongBoxList() {
  return (
    <section className={styles.list}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <SongBox key={num} />
      ))}
    </section>
  );
}
