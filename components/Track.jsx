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
      <p className={styles.number}>
        <span>{number}</span>
      </p>
      <p>
        <span>{title}</span>
      </p>
      <p>
        <span>{artist}</span>
      </p>
      <p>
        <span>{album}</span>
      </p>
      <p className={styles.length}>
        <span>{length}</span>
      </p>
    </div>
  );
}
