// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import client from 'graphql/client';
import { GET_PLACES } from 'graphql/queries';
import { GetPlacesQuery } from 'graphql/generated/graphql';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  const fields = places.map(({ slug }) => ({
    loc: `https://my-trips-victor-vas.vercel.app/${slug}`,
    lastmod: new Date().toISOString(),
  }));

  fields.push(
    {
      loc: `https://my-trips-victor-vas.vercel.app`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `https://my-trips-victor-vas.vercel.app/about`,
      lastmod: new Date().toISOString(),
    },
  );

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {};
