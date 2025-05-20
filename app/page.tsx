import { siteConfig } from '@/config/site';

import { absoluteUrl } from '@/lib/utils';

import RgbPantoneContent from '@/components/color-converters/content/rgb/to-pantone-content';
import RgbPantoneConverter from '@/components/color-converters/converters/rgb/to-pantone';
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
