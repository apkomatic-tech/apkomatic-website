import { INSTAGRAM_API_ACCESS_TOKEN } from '../config/site';

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
    const rawRes = await fetch(
      `https://graph.instagram.com/me/media?fields=${fieldQuery}&access_token=${INSTAGRAM_API_ACCESS_TOKEN}`
    );
    const res = await rawRes.json();
    return res.data;
  } catch (err) {
    console.error('Instagram API Error: ', err);
  }
}
