import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

// api
import processContactRequest from '../api/processContactRequest';

// components
import SEO from '../components/Seo';
import Modal from '../components/Modal';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import CharacterCount from '../components/contact/CharacterCount';
import useInputTouched from '../components/contact/useInputTouched';
import requestStates from '../components/contact/requestStates';
import { validateEmail, validateName } from '../utils/index';
import { StyledPrimaryButton } from '../components/Button';
import {
  StyledForm,
  StyledFormBlock,
  StyledFormLabel,
  StyledFormError,
  StyledFormInput,
  StyledFormTextArea,
} from '../components/contact/formStyles';

import { MESSAGE_THRESHOLD, CONTACT_FORM_NAME } from '../config/site';

const formLabelVariants = {
  focused: {
    y: 1,
    scale: 0.8,
    transition: {
      stiffness: 50,
      duration: 0.1,
    },
  },
  blurred: {
    y: 16,
    scale: 1,
    transition: {
      stiffness: 50,
      duration: 0.1,
    },
  },
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
    <div id="contact-page">
      <SEO title="Contact Us" />
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
        style={{
          marginTop: '7rem',
          marginBottom: '7rem',
          maxWidth: '65rem',
          paddingLeft: '3rem',
          paddingRight: '3rem',
        }}
      >
        <StyledForm
          name={CONTACT_FORM_NAME}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(
            (data: any) => {
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
            },
            errorData => {
              trackCustomEvent({
                category: 'Contact',
                action: 'Form Error - Submit',
                label: Object.entries(errorData)
                  .map(item => item[0])
                  .join(', '),
              });
            }
          )}
          ref={formNode}
        >
          <input type="hidden" name="form-name" value={CONTACT_FORM_NAME} />
          <StyledFormBlock>
            <StyledFormLabel
              variants={formLabelVariants}
              initial={touchedInputs.email ? 'focused' : 'blurred'}
              animate={touchedInputs.email ? 'focused' : 'blurred'}
              htmlFor="email"
            >
              Email Address
            </StyledFormLabel>
            <StyledFormInput
              id="email"
              type="text"
              name="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={errors.email ? 'hasError' : ''}
              ref={register({
                validate: validateEmail,
              })}
            />
            {errors.email && (
              <StyledFormError>Please enter a valid email</StyledFormError>
            )}
          </StyledFormBlock>

          <StyledFormBlock>
            <StyledFormLabel
              variants={formLabelVariants}
              initial={touchedInputs.fullName ? 'focused' : 'blurred'}
              animate={touchedInputs.fullName ? 'focused' : 'blurred'}
              htmlFor="full-name"
            >
              Name
            </StyledFormLabel>
            <StyledFormInput
              id="full-name"
              type="text"
              className={errors.fullName ? 'hasError' : ''}
              name="fullName"
              onFocus={handleFocus}
              onBlur={handleBlur}
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
                <StyledFormError>{errors.fullName.message}</StyledFormError>
              ) : (
                <StyledFormError>Please enter a valid name</StyledFormError>
              ))}
          </StyledFormBlock>
          <StyledFormBlock>
            <StyledFormLabel
              variants={formLabelVariants}
              initial={touchedInputs.message ? 'focused' : 'blurred'}
              animate={touchedInputs.message ? 'focused' : 'blurred'}
              htmlFor="inspirations"
            >
              Message ({MESSAGE_THRESHOLD} characters max)
            </StyledFormLabel>
            <StyledFormTextArea
              className={errors.message ? 'hasError' : ''}
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
              <StyledFormError>{errors.message.message}</StyledFormError>
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
          </StyledFormBlock>

          <StyledPrimaryButton
            type="submit"
            size="large"
            style={{
              display: 'block',
              width: '200px',
              marginTop: '3rem',
            }}
          >
            Send
          </StyledPrimaryButton>
        </StyledForm>
      </Wrapper>
    </div>
  );
};

export default ContactPage;
