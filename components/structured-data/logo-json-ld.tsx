import JsonLd from './json-ld';

export default function LogoJsonLd({ url, logo }: { url: string; logo: string }) {
  return (
    <JsonLd id="logo-jsonld">
      {{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'RGB Pantone',
        logo: logo,
        url: url,
      }}
    </JsonLd>
  );
}
