import dynamic from 'next/dynamic';
import LinkWrapper from 'components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline';
import { MapProps } from 'components/Map';
import { NextSeo } from 'next-seo';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um projeto simples de mostrar em um mapa os lugares que visitei e mostrar mais informações e fotos quando clicado."
        canonical="https://my-trips-victor-vas.vercel.app/"
        openGraph={{
          url: 'https://my-trips-victor-vas.vercel.app/',
          title: 'My Trips',
          description:
            'Um projeto simples de mostrar em um mapa os lugares que visitei e mostrar mais informações e fotos quando clicado.',
          images: [
            {
              url: 'https://my-trips-victor-vas.vercel.app/img/my-trips.png',
              width: 1280,
              height: 720,
              alt: 'My Trips',
            },
          ],
          site_name: 'My Trips',
        }}
      />
      <LinkWrapper href="/sobre">
        <InfoOutline size={32} aria-label="Sobre" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
