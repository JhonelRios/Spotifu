import styles from 'styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <form>
        <img src="/icons/search.svg" alt="search" />
        <input type="text" placeholder="Buscar" />
      </form>
    </header>
  );
}
