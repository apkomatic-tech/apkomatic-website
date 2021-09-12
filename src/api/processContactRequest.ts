import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { CONTACT_FORM_NAME } from '../config/site';
import { encode } from '../utils';

type EmailRequestProps = {
  email: string;
  fullName: string;
  message?: string;
};

const processContactRequest = async (data: EmailRequestProps) => {
  try {
    // send email request
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': CONTACT_FORM_NAME, ...data }),
    });

    // track submissions
    trackCustomEvent({
      category: 'Contact',
      action: 'Submit-Contact-Form',
    });

    return response;
  } catch (e) {
    console.log('error', e.message);
    throw new Error(e);
  }
};

export default processContactRequest;
