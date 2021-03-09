import styles from 'styles/Track.module.css';

export default function Track({
  header = false,
  number,
  title,
  artist,
  album,
  length,
}) {
  return (
    <div className={`${styles.wrapper} ${header ? styles.header : ''}`}>
      <p>{number}</p>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <p className={styles.length}>{length}</p>
    </div>
  );
}
