import { CONTACT_FORM_NAME } from '../config/site';
import { encode } from '../utils';

const processContactRequest = async (data: {
  email: string;
  fullName: string;
  message?: string;
}) => {
  try {
    // send email request
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': CONTACT_FORM_NAME, ...data }),
    });

    return response;

    // track submissions
    // TODO: add React GA dependency
    // ReactGA.event({
    //   category: 'Contact',
    //   action: 'Submit-Contact-Form',
    // });
  } catch (e) {
    throw new Error(e);
  }
};

export default processContactRequest;