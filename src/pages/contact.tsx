import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

// api
import processContactRequest from '../api/processContactRequest';

// components
import SEO from '../components/Seo';
import Wrapper from '../components/Wrapper';
import CharacterCount from '../components/contact/CharacterCount';
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
  StyledFormHeading,
  StyledAlertContainer,
} from '../components/contact/formStyles';

import { MESSAGE_THRESHOLD, CONTACT_FORM_NAME } from '../config/site';
import Alert from '../components/Alert';

const ContactPage = () => {
  const [requestState, setRequestState] = useState(
    requestStates.INITIAL_REQUEST_STATE
  );
  const { register, handleSubmit, errors } = useForm();
  const formNode = useRef(null);
  const [messageCount, setMessageCount] = useState(0);

  function resetRequestState() {
    // reset request state to initial
    setRequestState(requestStates.INITIAL_REQUEST_STATE);
  }

  return (
    <div id="contact-page">
      <SEO title="Contact Us" />
      <Wrapper
        style={{
          maxWidth: '65rem',
        }}
      >
        <StyledFormHeading>
          <h1 className="heading">Contact Us</h1>
          <p className="subheading">
            We are excited to hear from you. Contact us so we can discuss your
            project requirements.
          </p>
        </StyledFormHeading>

        {requestState.success && (
          <StyledAlertContainer>
            <Alert
              type="success"
              heading="We received your message."
              message="Thank you for contacting us, we will review your information and
          respond as soon as possible."
            />
          </StyledAlertContainer>
        )}
        {requestState.fail && (
          <StyledAlertContainer>
            <Alert
              type="error"
              heading="Something went wrong."
              message="We were unable to process your request, please try again."
              onClose={() => resetRequestState()}
            />
          </StyledAlertContainer>
        )}

        {!requestState.success && (
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
                      return;
                    }

                    setRequestState(requestStates.FAIL_REQUEST_STATE);
                  })
                  .catch(err => {
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
              <StyledFormLabel htmlFor="email">Email Address</StyledFormLabel>
              <StyledFormInput
                id="email"
                type="text"
                name="email"
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
              <StyledFormLabel htmlFor="full-name">Name</StyledFormLabel>
              <StyledFormInput
                id="full-name"
                type="text"
                className={errors.fullName ? 'hasError' : ''}
                name="fullName"
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
                  <StyledFormError>Please enter your name.</StyledFormError>
                ))}
            </StyledFormBlock>
            <StyledFormBlock>
              <StyledFormLabel htmlFor="inspirations">
                Message ({MESSAGE_THRESHOLD} characters max)
              </StyledFormLabel>
              <StyledFormTextArea
                className={errors.message ? 'hasError' : ''}
                id="inspirations"
                name="message"
                onChange={event => {
                  setMessageCount(event.target.value.length);
                }}
                rows={13}
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
                  bottom: -5,
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
              style={{
                display: 'block',
                width: '100%',
                marginTop: '3rem',
              }}
            >
              Send
            </StyledPrimaryButton>
          </StyledForm>
        )}
      </Wrapper>
    </div>
  );
};

export default ContactPage;
