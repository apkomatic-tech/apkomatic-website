import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import processContactRequest from '../api/processContactRequest';

import Modal from '../components/Modal';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import CharacterCount from '../components/contact/CharacterCount';
import useInputTouched from '../components/contact/useInputTouched';
import requestStates from '../components/contact/requestStates';

import { MESSAGE_THRESHOLD, CONTACT_FORM_NAME } from '../config/site';
import { encode, validateEmail, validateName } from '../utils/index';

const errorMsgAnimateProps = {
  initial: { y: 5 },
  animate: { y: 0 },
  transition: { type: 'tween', duration: 0.25 },
};

const ContactPage = () => {
  const [requestState, setRequestState] = useState(
    () => requestStates.INITIAL_REQUEST_STATE
  );
  const { register, handleSubmit, errors } = useForm();
  const {
    touchedInputs,
    handleFocus,
    handleBlur,
    resetTouchedInputs,
  } = useInputTouched(() => ({
    email: false,
    fullName: false,
    message: false,
  }));
  const formNode = useRef(null);
  const [messageCount, setMessageCount] = useState(0);

  // const processContactRequest = async (data: {
  //   email: string;
  //   fullName: string;
  //   message?: string;
  // }) => {
  //   try {
  //     // display processing
  //     setRequestState(requestStates.PROCESS_REQUEST_STATE);
  //     // send email request
  //     const response = await fetch('/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: encode({ 'form-name': CONTACT_FORM_NAME, ...data }),
  //     });
  //     if (response.ok) {
  //       setRequestState(requestStates.SUCCESS_REQUEST_STATE);
  //       formNode.current.reset();
  //     } else {
  //       setRequestState(requestStates.FAIL_REQUEST_STATE);
  //     }
  //     // track submissions
  //     // TODO: add React GA dependency
  //     // ReactGA.event({
  //     //   category: 'Contact',
  //     //   action: 'Submit-Contact-Form',
  //     // });
  //   } catch (e) {
  //     setRequestState(requestStates.FAIL_REQUEST_STATE);
  //   }
  // };

  function resetRequestState() {
    // reset request state to initial
    setRequestState(requestStates.INITIAL_REQUEST_STATE);
  }

  function resetFormState() {
    // reset form state to initial
    if (formNode) {
      formNode.current.reset();
    }
    resetTouchedInputs();
  }

  return (
    <>
      <SplashBanner title="Contact Us" message="" />
      {/* Display Message on successful form submission */}
      <Modal
        show={requestState.success}
        onOpen={resetFormState}
        onClose={resetRequestState}
        showCloseBtn={true}
        closeBtnText="Dismiss"
      >
        <h2>We've received your message.</h2>
        <p>
          Thank you for contacting us, we will review your information and
          respond as soon as possible.
        </p>
      </Modal>
      {/* Display Message on failed form submission */}
      <Modal
        show={requestState.fail}
        onClose={resetRequestState}
        showCloseBtn={true}
        closeBtnText="Dismiss"
      >
        <div>We were unable to process your request, please try again.</div>
      </Modal>
      <Wrapper
        wrapperWidth="small"
        style={{
          marginTop: '7rem',
          marginBottom: '7rem',
        }}
      >
        <div id="contact-form">
          <form
            name={CONTACT_FORM_NAME}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(
              (data: { email: string; fullName: string; message: string }) => {
                setRequestState(requestStates.PROCESS_REQUEST_STATE);
                processContactRequest(data)
                  .then(res => {
                    if (res.ok) {
                      setRequestState(requestStates.SUCCESS_REQUEST_STATE);
                      formNode.current.reset();
                      return;
                    }

                    setRequestState(requestStates.FAIL_REQUEST_STATE);
                  })
                  .catch(() => {
                    setRequestState(requestStates.FAIL_REQUEST_STATE);
                  });
              }
            )}
            className="contact-form form"
            ref={formNode}
          >
            <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
            <div className="form__section">
              <div className="form__group">
                <motion.label
                  initial={touchedInputs.email ? 'focused' : 'blurred'}
                  animate={touchedInputs.email ? 'focused' : 'blurred'}
                  htmlFor="email"
                >
                  Email Address
                </motion.label>
                <input
                  id="email"
                  type="text"
                  className={`form__input ${errors.email ? 'error' : ''}`}
                  name="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={event => {
                    // ReactGA.event({
                    //   category: 'Contact',
                    //   action: 'Change Email Field',
                    //   label: event.target.value,
                    // });
                  }}
                  ref={register({
                    validate: validateEmail,
                  })}
                />
                {errors.email && (
                  <motion.div
                    {...errorMsgAnimateProps}
                    className="form__errormsg"
                  >
                    Please enter a valid email
                  </motion.div>
                )}
              </div>

              <div className="form__group">
                <motion.label
                  initial={touchedInputs.fullName ? 'focused' : 'blurred'}
                  animate={touchedInputs.fullName ? 'focused' : 'blurred'}
                  htmlFor="full-name"
                >
                  Name
                </motion.label>
                <input
                  id="full-name"
                  type="text"
                  className={`form__input ${errors.fullName ? 'error' : ''}`}
                  name="fullName"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={event => {
                    // ReactGA.event({
                    //   category: 'Contact',
                    //   action: 'Change Name Field',
                    //   label: event.target.value,
                    // });
                  }}
                  ref={register({
                    validate: validateName,
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                />
                {errors.fullName &&
                  (errors.fullName.type === 'minLength' ? (
                    <motion.div
                      {...errorMsgAnimateProps}
                      className="form__errormsg"
                    >
                      {errors.fullName.message}
                    </motion.div>
                  ) : (
                    <motion.div
                      {...errorMsgAnimateProps}
                      className="form__errormsg"
                    >
                      Please enter a valid name
                    </motion.div>
                  ))}
              </div>
              <div className="form__group mb-3">
                <motion.label
                  initial={touchedInputs.message ? 'focused' : 'blurred'}
                  animate={touchedInputs.message ? 'focused' : 'blurred'}
                  htmlFor="inspirations"
                >
                  Message ({MESSAGE_THRESHOLD} characters max)
                </motion.label>
                <textarea
                  className={`form__input ${errors.message ? 'error' : ''}`}
                  id="inspirations"
                  name="message"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={event => {
                    setMessageCount(event.target.value.length);
                  }}
                  rows={9}
                  ref={register({
                    maxLength: {
                      value: MESSAGE_THRESHOLD,
                      message: `Please enter no more than ${MESSAGE_THRESHOLD} characters.`,
                    },
                  })}
                />
                {errors.message && (
                  <motion.div
                    {...errorMsgAnimateProps}
                    className="form__errormsg"
                  >
                    {errors.message.message}
                  </motion.div>
                )}
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    paddingTop: '.5rem',
                  }}
                >
                  <CharacterCount
                    count={messageCount}
                    threshold={MESSAGE_THRESHOLD}
                  />
                </div>
              </div>
            </div>

            <div className="contact-form__submit-btn-wrapper">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default ContactPage;
