import type { Metadata } from 'next';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { absoluteUrl } from '@/lib/utils';

import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import WebsiteJsonLd from '@/components/structured-data/WebsiteJsonLd';
import { Wrapper } from '@/components/wrapper';

const config = {
  title: 'Terms and Conditions',
  description:
    'RGB Pantone operated by Yuurrific. Yuurrific offers RGB Pantone and related services to you, a user, under the condition that you accept all of our set terms, including these Terms of Service and all related policies.',
  url: '/legal/terms-and-conditions',
};

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.url,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`
        ),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: config.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: config.title,
    description: config.description,
    card: 'summary_large_image',
    creator: siteConfig.creator,
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`
        ),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: config.title,
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <WebsiteJsonLd
        company={siteConfig.siteName}
        url={absoluteUrl('/legal/terms-and-conditions')}
      />
      <Wrapper className="my-12 md:my-20">
        <Container>
          <Prose>
            <h1>Terms of Service</h1>
            <p>
              These Terms of Service govern your use of rgbtopantone.com and related tools. By
              accessing this website, you agree to these terms.
            </p>
            <h2>Acceptance of Terms</h2>
            <p>
              You must use the site in compliance with all applicable laws. If you do not agree
              with these terms, do not use the website.
            </p>
            <h2>Use of Cookies</h2>
            <p>
              rgbtopantone.com may use cookies and analytics technologies to improve user
              experience and site performance. By using the site, you consent to this use as
              described in our{' '}
              <Link
                href="/legal/privacy-policy"
                className="text-violet-600 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-500"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All website content, including text, branding, code, graphics, and layout, is owned
              by rgbtopantone.com or its licensors and is protected by applicable intellectual
              property laws.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              The site is provided on an "as is" and "as available" basis. To the fullest extent
              permitted by law, rgbtopantone.com is not liable for indirect, incidental, or
              consequential damages arising from use of the site.
            </p>
            <h2>Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of the site after updates are
              posted means you accept the revised terms.
            </p>
          </Prose>
        </Container>
      </Wrapper>
    </>
  );
}
