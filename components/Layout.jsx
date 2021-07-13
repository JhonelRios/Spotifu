// import NavBar from 'components/NavBar';
import Header from 'components/Header';

import styles from 'styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <main className={styles.main}>{children}</main>
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
    </div>
  );
}
