import axios from 'axios';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

async function getToken() {
  const URL_TOKEN = 'https://accounts.spotify.com/api/token';
  // const clientEncoded = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
  const clientEncoded = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    'base64'
  );

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

export async function getPlaylists(type, country = 'US') {
  const token = await getToken();
  let URL = '';

  switch (type) {
    case 'featured':
      URL = `https://api.spotify.com/v1/browse/featured-playlists?country=${country}&limit=10`;
      break;

    case 'new':
      URL = `https://api.spotify.com/v1/browse/new-releases?country=${country}&limit=10`;
      break;

    case 'latin':
      URL = `https://api.spotify.com/v1/browse/categories/latin/playlists?limit=10`;
      break;

    default:
      throw new Error('Browse type error');
  }

  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data) {
    throw new Error('Get Token error');
  }

  return data;
}

export async function getPlaylistTracks(id) {
  const token = await getToken();
  const URL = `https://api.spotify.com/v1/playlists/${id}/tracks?limit=15`;

  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data) {
    throw new Error('Get Token error');
  }

  return data;
}

export async function getPlaylistInfo(id) {
  const token = await getToken();
  const URL = `https://api.spotify.com/v1/playlists/${id}`;

  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data) {
    throw new Error('Get Token error');
  }

  return data;
}

export async function getSearchResults(text) {
  const token = await getToken();
  const URL = `https://api.spotify.com/v1/search?q=${text}&type=track&limit=3&offset=3`;

  const { data } = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!data) {
    throw new Error('Get Token error');
  }

  return data;
}
