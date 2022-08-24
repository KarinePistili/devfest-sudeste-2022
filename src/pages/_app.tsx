import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'

import React, { ReactNode } from "react";
import { NextComponentType, NextPageContext } from 'next';
import Head from 'next/head';
import configValues from 'helpers/config';


import { AppLayoutProps } from '../../types';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps,
) => {
  const { Component, pageProps } = props;

  const Layout = Component.layout || (({ children }: { children: ReactNode }) => <>{children}</>);

  return (<React.Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{configValues.name}</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </React.Fragment>);


};

export default MyApp;
