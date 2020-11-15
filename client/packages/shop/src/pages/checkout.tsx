import React, { useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Router from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';

import { ProfileProvider } from 'contexts/profile/profile.provider';
import { initializeApollo } from 'utils/apollo';
import ErrorMessage from 'components/error-message/error-message';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_USER);
  console.log(data)
  if (loading) {
    return <ErrorMessage message={'Loading...'} />
  }
  if (error) {
    Router.push('/');
    return (
      <ErrorMessage message={error.message} />
    );
  } 
  const token = 'true';

  return (
    <>
      <SEO title="Checkout - Mahdi Fashion" description="Checkout Details" />
      <ProfileProvider initData={data.getUser}>
        <Modal>
          <Checkout token={token} deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

/*export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_LOGGED_IN_USER,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};*/

export default CheckoutPage;
