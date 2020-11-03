import React, { useContext } from 'react';
import {
  LinkButton,
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  // Input,
  Divider,
} from './authentication-form.style';
import { useMutation } from '@apollo/react-hooks';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { closeModal } from '@redq/reuse-modal';
import { Input } from 'components/forms/input';
import { SIGNIN_MUTATION } from 'graphql/mutation/signin';

export default function SignInModal() {
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP',
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS',
    });
  };

  /*const loginCallback = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', `${email}.${password}`);
      authDispatch({ type: 'SIGNIN_SUCCESS' });
      closeModal();
    }
  };*/

  const [
    signinMeMutation,
    { 
      loading,
      error,
      data
    }
  ] = useMutation(SIGNIN_MUTATION,{
    onCompleted: (data) => {
      console.log(data)
      const { access_token } = data.login;
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', `${access_token}`);
        authDispatch({ type: 'SIGNIN_SUCCESS' });
        closeModal();
      }
    },
    onError: (error) => {
      setPhone('');
      setPassword('');
      console.log(error);
    }
  });

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading>
        <form onSubmit={
            async (e) => {
                e.preventDefault();
                await signinMeMutation({
                  variables: {phone, password}
                });
              }
          }
        >
          <Input
            type='text'
            placeholder={intl.formatMessage({
              id: 'emailAddressPlaceholder',
              defaultMessage: 'Email Address.',
            })}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />

          <Input
            type='password'
            placeholder={intl.formatMessage({
              id: 'passwordPlaceholder',
              defaultMessage: 'Password (min 6 characters)',
            })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            height='48px'
            backgroundColor='#F7F7F7'
            mb='10px'
          />

          <Button
            variant='primary'
            size='big'
            style={{ width: '100%' }}
            type='submit'
          >
            <FormattedMessage id='continueBtn' defaultMessage='Continue' />
          </Button>
        </form>
        {loading && <p style={{
          marginTop: "15px"
        }}>Loading...</p>}
        {error && <p style={{
          marginTop: "15px"
        }}>mutationError :( Please try again</p>}
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>

        <Button
          variant='primary'
          size='big'
          style={{
            width: '100%',
            backgroundColor: '#4267b2',
            marginBottom: 10,
          }}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <FormattedMessage
            id='continueFacebookBtn'
            defaultMessage='Continue with Facebook'
          />
        </Button>

        <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button>

        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
  );
}
