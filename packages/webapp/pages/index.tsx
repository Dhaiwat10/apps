import React, { ReactElement } from 'react';
import {
  getMainFeedLayout,
  mainFeedLayoutProps,
} from '../components/layouts/MainFeedPage';
import { NextSeoProps } from 'next-seo/lib/types';
import { defaultOpenGraph, defaultSeo } from '../next-seo';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';

const seo: NextSeoProps = {
  title: 'daily.dev | The Home Page Every Developer Deserves',
  titleTemplate: '%s',
  openGraph: { ...defaultOpenGraph },
  ...defaultSeo,
};

const Home = (): ReactElement => {
  return (
    <>
      <NextSeo {...seo} />
      <SiteLinksSearchBoxJsonLd
        url="https://app.daily.dev"
        potentialActions={[
          {
            target: 'https://app.daily.dev/search?q',
            queryInput: 'search_term_string',
          },
        ]}
      />
    </>
  );
};

Home.getLayout = getMainFeedLayout;
Home.layoutProps = mainFeedLayoutProps;

export default Home;
