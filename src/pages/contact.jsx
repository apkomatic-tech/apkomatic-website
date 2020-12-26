import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// api
import processContactRequest from '../api/processContactRequest';

import { StyledPrimaryButton } from '../components/Button';
import Modal from '../components/Modal';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import CharacterCount from '../components/contact/CharacterCount';
import useInputTouched from '../components/contact/useInputTouched';
import requestStates from '../components/contact/requestStates';

import { MESSAGE_THRESHOLD, CONTACT_FORM_NAME } from '../config/site';
import { validateEmail, validateName } from '../utils/index';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

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

const StyledForm = styled.form`
  --errorColor: #b9003e;
  box-sizing: border-box;
  width: 100%;
  display: block;
  * {
    box-sizing: inherit;
  }
`;
const StyledFormBlock = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  z-index: 1;
  &:not::last-of-type {
    margin-bottom: 0;
  }
`;
const StyledFormError = styled.div`
  color: var(--errorColor);
  font-size: 1.4rem;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledFormInput = styled.input`
  border-radius: 0;
  appearance: none;
  box-shadow: none;
  display: block;
  font-size: inherit;
  line-height: 1.5;
  min-height: calc(1.5em + 0.75rem + 2px);
  outline: none;
  transition: border-color 0.15s ease-in-out;
  width: 100%;
  padding: 2rem 0.65rem 0.75rem 1rem;
  border: 1px solid var(--primaryColor);
  background-color: var(--grey);
  border-radius: 5px;

  &.hasError {
    color: var(--errorColor);
    border-color: var(--errorColor);
  }
  &::not(.hasError):focus {
    color: var(--errorColor);
  }
`;
const StyledFormLabel = styled(motion.label)`
  position: absolute;
  top: 0;
  left: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  z-index: 5;
  transform-origin: left;
`;

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
        <StyledForm
          name={CONTACT_FORM_NAME}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit(
            data => {
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
            <StyledFormInput
              as="textarea"
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
            large={true}
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
    </>
  );
};

export default ContactPage;
