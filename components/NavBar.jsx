import Link from 'next/link';
import Menu from 'components/Menu';

import styles from 'styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <img className={styles.logo} src="/logo.svg" alt="spotifu" />
        </a>
      </Link>

      <div className={styles.navigation}>
        <Link href="/">
          <a>
            <Menu icon="home" name="Inicio" active />
          </a>
        </Link>
      </div>

      <footer className={styles.footer}>
        <p>
          Made by <span>Jhonel Rios</span>
        </p>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/jhonelrios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin.svg" alt="Linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JhonelRios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github.svg" alt="Github" />
            </a>
          </li>
        </ul>
      </footer>
    </nav>
  );
}
