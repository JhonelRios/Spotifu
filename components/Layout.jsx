import NavBar from 'components/NavBar';
import Header from 'components/Header';

import styles from 'styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
