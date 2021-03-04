import styles from 'styles/SongBox.module.css';

export default function SongBox({ src }) {
  return (
    <div className={styles.box}>
      <img src={src} alt="song" />
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
