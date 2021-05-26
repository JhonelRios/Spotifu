export const formatArtists = (artists = []) => {
  const reducedArtists = artists.reduce(
    (acc, curr) => ({ name: `${acc.name}${curr.name}, ` }),
    { name: '' }
  );

  const { name } = reducedArtists;

  return name.slice(0, -2);
};

export const formatLength = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const formatNumber = (number) => {
  const formattedNumber = new Intl.NumberFormat().format(number);

  return formattedNumber;
};
