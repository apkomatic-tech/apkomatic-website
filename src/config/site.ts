export const IS_DEV = process.env.NODE_ENV !== 'production';
export const GUA_TRACKING_ID =
  process.env.NODE_ENV === 'production' ? 'UA-101945546-1' : 'UA-119740251-1';
export const SENTRY_KEY =
  process.env.NODE_ENV === 'production'
    ? 'https://7dcedfd697fa495cb02c6bfd0e177260@sentry.io/1284502'
    : 'https://b437d768b74a4b179edcb38b4d801a60@sentry.io/1284503';
export const CONTACT_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://formspree.io/apkomatic@gmail.com'
    : 'https://formspree.io/konstantindev925@gmail.com';
export const EMAIL_CONFIRMATION_URL =
  process.env.NODE_ENV === 'production'
    ? '//apkomatic.com/thank-you'
    : '//localhost:3000/thank-you';
export const ENABLE_STICKY_HEADER = false;
export const CONTACT_FORM_NAME =
  process.env.NODE_ENV === 'production'
    ? 'apkomatic-prod-contact'
    : 'apkomatic-dev-contact';
export const MESSAGE_THRESHOLD: number = 500;
