import { useState, useRef } from 'react';
import { getSearchResults } from 'utils/api';

import styles from 'styles/Header.module.css';

export default function Header() {
  const formRef = useRef();
  const [show, setShow] = useState(false);
  const [results, setResults] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(formRef.current);
    const searchText = form.get('searchText');

    getSearchResults(searchText)
      .then((res) => setResults(res))
      .catch((err) => console.log(err));
  };

  console.log(results);

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} ref={formRef}>
        <img className={styles.icon} src="/icons/search.svg" alt="search" />
        <input
          onFocus={() => setShow(true)}
          onBlur={() => setTimeout(() => setShow(false), 100)}
          name="searchText"
          type="text"
          placeholder="Search"
        />
      </form>

      {Object.keys(results).length && show && (
        <div className={styles.results}>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Google
          </a>
          {results.tracks.items.map((track) => (
            <a
              className={styles.result_box}
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.cover}
                src={track.album.images[2].url}
                alt={track.name}
              />
              <p>{track.name}</p>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
