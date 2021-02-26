import styles from 'styles/SongBox.module.css';

export default function SongBox() {
  return (
    <div className={styles.box}>
      <img
        src="https://datsnxq1rwndn.cloudfront.net/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg"
        alt="song"
      />
      <div className={styles.description}>
        <h3>Nombre</h3>
        <p>Los éxitos de reggaetón del momento.</p>
        <p>
          2,611,830 <span>SEGUIDORES</span>
        </p>
      </div>
    </div>
  );
}
