import { siteConfig } from '@/config/site';

import { absoluteUrl } from '@/lib/utils';
import { getConverterFaqs } from '@/lib/converter-faq';

import RgbPantoneContent from '@/components/color-converters/content/rgb/to-pantone-content';
import RgbPantoneConverter from '@/components/color-converters/converters/rgb/to-pantone';
import Faqs from '@/components/faq';
import WebsiteJsonLd from '@/components/structured-data/WebsiteJsonLd';
import { Container } from '@/components/container';
import { Wrapper } from '@/components/wrapper';

export default function Home() {
  const faqItems = getConverterFaqs('RGB', 'PANTONE');

  return (
    <>
      <WebsiteJsonLd company={siteConfig.siteName} url={absoluteUrl()} />

      <RgbPantoneConverter />
      <RgbPantoneContent />
      <Wrapper>
        <Container>
          <Faqs data={faqItems} />
        </Container>
      </Wrapper>
    </>
  );
}
