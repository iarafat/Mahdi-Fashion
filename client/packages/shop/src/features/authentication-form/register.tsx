import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';

import { Input } from 'components/forms/input';
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  // Input,
  Divider,
  LinkButton,
} from './authentication-form.style';
import { closeModal } from '@redq/reuse-modal';
import { Facebook } from 'assets/icons/Facebook';
import { Google } from 'assets/icons/Google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';

import { SIGNUP_MUTATION } from 'graphql/mutation/signup';

export default function SignOutModal() {
  const intl = useIntl();
  const { authState, authDispatch } = useContext<any>(AuthContext);
  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  //signup
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [
    signupMeMutation,
    { 
      loading,
      error
    }
  ] = useMutation(SIGNUP_MUTATION,{
    onCompleted: (data) => {
      console.log(data)
      const { access_token } = data.signUp;
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
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>
          <form method="post" onSubmit={
            async (e) => {
                e.preventDefault();
                await signupMeMutation({
                  variables: {phone, password}
                });
              }
            }
          >
            <Input
              type='text'
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'emailAddressPlaceholder',
                defaultMessage: 'Email Address or Contact No.',
              })}
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
            />
            <Input
              type='password'
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={intl.formatMessage({
                id: 'passwordPlaceholder',
                defaultMessage: 'Password (min 6 characters)',
              })}
              height='48px'
              backgroundColor='#F7F7F7'
              mb='10px'
            />
            <HelperText style={{ padding: '20px 0 30px' }}>
              <FormattedMessage
                id='signUpText'
                defaultMessage="By signing up, you agree to Pickbazar's"
              />
              &nbsp;
              <Link href='/'>
                <a>
                  <FormattedMessage
                    id='termsConditionText'
                    defaultMessage='Terms &amp; Condition'
                  />
                </a>
              </Link>
            </HelperText>
            <Button variant='primary' size='big' width='100%' type='submit'>
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
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
