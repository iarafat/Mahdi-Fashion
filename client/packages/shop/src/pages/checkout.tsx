import React, { useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Router from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { PAYMENT_OPTION } from 'graphql/query/paymentoption';
import { ProfileProvider } from 'contexts/profile/profile.provider';
import ErrorMessage from 'components/error-message/error-message';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const CheckoutPage: NextPage<Props> = ({ deviceType }) => {
  const { data: deliverData, error: deliveryError, loading: deliveryLoading, refetch: deliveryRefetch } =  useQuery(DELIVERY_METHOD)
  const { data: paymentData, error: paymentError, loading: paymentLoading, refetch: paymentRefetch } = useQuery(PAYMENT_OPTION);
  const { data, error, loading } = useQuery(GET_LOGGED_IN_USER);

  if (loading || deliveryLoading || paymentLoading) {
    return <ErrorMessage message={'Loading...'} />
  }
  if (error || deliveryError || paymentError) {
    setTimeout(function () {
      Router.push('/');
    }, 2000)
    return (
      <ErrorMessage message={'Please login for checkout'} />
    );
  } 
  const token = 'true';
  const checkoutData = {
    ...data.getUser, 
    deliveryMethods: [],
    paymentMethods: [],
  }

  if(checkoutData.deliveryMethods.length == 0) {
    deliveryRefetch();
    checkoutData.deliveryMethods = [...deliverData.deliveryMethods.items];
  }


  if(checkoutData.paymentMethods.length == 0) {
    paymentRefetch();
    checkoutData.paymentMethods = [...deliverData.paymentOptions.items];
  }

  console.dir(deliverData.deliveryMethods)
  console.dir(paymentData.paymentOptions)


  return (
    <>
      <SEO title="Checkout - Mahdi Fashion" description="Checkout Details" />
      <ProfileProvider initData={checkoutData}>
        <Modal>
          <Checkout token={token} deviceType={deviceType} />
        </Modal>
      </ProfileProvider>
    </>
  );
};

export default CheckoutPage;
