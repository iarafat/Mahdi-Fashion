import { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

// the redirect will only happen on the client-side. This is by design,
const IndexPage: React.FC<{}> = () => {
  let defaultMenu = null;
  if(localStorage.getItem('myMenu')){
    defaultMenu = JSON.parse(localStorage.getItem('myMenu'));
  }
  useEffect(() => {
    Router.replace('/[type]', `${defaultMenu.href}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default IndexPage;
