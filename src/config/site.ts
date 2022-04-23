export const IS_DEV = process.env.NODE_ENV !== 'production';
export const SENTRY_KEY =
  process.env.NODE_ENV === 'production'
    ? 'https://7dcedfd697fa495cb02c6bfd0e177260@sentry.io/1284502'
    : 'https://b437d768b74a4b179edcb38b4d801a60@sentry.io/1284503';
export const ENABLE_STICKY_HEADER = false;
export const CONTACT_FORM_NAME = 'apkomatic-prod-contact';
export const MESSAGE_THRESHOLD: number = 500;
