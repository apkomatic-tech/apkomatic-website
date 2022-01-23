import { INSTAGRAM_API_ACCESS_TOKEN } from '../config/site';

const wrongInstagramToken = '123';

export default async function getInstagramFeed(fields: string[] = []) {
  try {
    const defaultFields = [
      'caption',
      'media_count',
      'media_type',
      'permalink',
      'media_url',
      'thumbnail_url',
    ];

    const fieldQuery = [...defaultFields, ...fields].join(',');
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fieldQuery}&access_token=${INSTAGRAM_API_ACCESS_TOKEN}`
    );
    if (!res.ok) {
      throw Error;
    }
    const jsonRes = await res.json();
    return await jsonRes.data;
  } catch (err) {
    console.error(err.message);
  }

  return {
    error: 'instagram API error',
  };
}
