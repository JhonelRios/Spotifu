import styles from 'styles/Menu.module.css';

export default function Menu({ icon, name, active }) {
  return (
    <div className={`${styles.wrapper} ${active ? styles.active : ''}`}>
      <img src={`/icons/${icon}.svg`} alt={icon} />
      <span>{name}</span>
    </div>
  );
}
