import Link from 'next/link';

import styles from 'styles/SongBox.module.css';

// eslint-disable-next-line no-unused-vars
export default function SongBox({ src, name, description, id }) {
  const formatDescription = (text = '') => {
    const pointIndex = text.indexOf('.');
    let formattedText = text;

    if (pointIndex !== -1) {
      formattedText = formattedText.substring(0, pointIndex + 1);
    }

    if (formattedText.includes('<')) {
      const tagIndex = text.indexOf('<');

      formattedText = formattedText.substr(0, tagIndex - 1);
    }

    if (!formattedText.includes('.')) {
      formattedText += '.';
    }

    return formattedText;
  };

  return (
    <div className={styles.box}>
      <Link href="#!">
        <a>
          <div className={styles.box_selector} />
          <img src={src} alt="song" />
          <div className={styles.description}>
            <h3>{name}</h3>
            {description && <p>{formatDescription(description)}</p>}
          </div>
        </a>
      </Link>
    </div>
  );
}
