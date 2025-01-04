import { siteConfig } from '@/config/site';

import { absoluteUrl } from '@/lib/utils';

import RgbPantoneContent from '@/components/rgb-pantone-content';
import RgbPantoneConverter from '@/components/rgb-pantone-converter';
import WebsiteJsonLd from '@/components/structured-data/WebsiteJsonLd';

export default function Home() {
  return (
    <>
      <WebsiteJsonLd company={siteConfig.siteName} url={absoluteUrl()} />

      <RgbPantoneConverter />
      <RgbPantoneContent />
    </>
  );
}
