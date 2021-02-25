import Link from 'next/link';
import Menu from 'components/Menu';

import styles from 'styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src="/logo.svg" alt="spotifu" />

      <div className={styles.navigation}>
        <Link href="/">
          <a>
            <Menu icon="home" name="Inicio" active />
          </a>
        </Link>
      </div>

      <div className={styles.library}>
        <h2 className={styles.sub_title}>Tu Biblioteca</h2>
        <ul>
          <li>Creada para ti</li>
          <li>Recientes</li>
          <li>Tus Me Gusta</li>
          <li>Artistas</li>
          <li>Podcasts</li>
        </ul>
      </div>
    </nav>
  );
}
