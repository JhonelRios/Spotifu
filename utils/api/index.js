import axios from 'axios';

const CLIENT_ID = 'a385c9f8283342f59358a3618f73c69d';
const CLIENT_SECRET = 'bc73e4f97ba44d93a6329ac0d202ef60';

async function getToken() {
  const URL_TOKEN = 'https://accounts.spotify.com/api/token';
  const clientEncoded = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const { data } = await axios.post(
    URL_TOKEN,
    'grant_type=client_credentials',
    {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${clientEncoded}`,
      },
    }
  );

  if (!data) {
    throw new Error('Get Token error');
  }

  return data.access_token;
}

export default async function getFeaturedPlaylists() {
  const token = await getToken();
  const URL = 'https://api.spotify.com/v1/browse/featured-playlists';

  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(data);
}
