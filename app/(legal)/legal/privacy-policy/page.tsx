import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

import { absoluteUrl } from '@/lib/utils';

import { Container } from '@/components/container';
import { Prose } from '@/components/prose';
import WebsiteJsonLd from '@/components/structured-data/WebsiteJsonLd';
import { Wrapper } from '@/components/wrapper';

const config = {
  title: 'Privacy Policy',
  description:
    'At RGB Pantone, your privacy and the protection of your data is our top priority. All data collected, both personal and non-personal, is protected with the highest global standards.',
  url: '/legal/privacy-policy',
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
        url={absoluteUrl('/legal/privacy-policy')}
      />
      <Wrapper className="my-12 md:my-20">
        <Container>
          <Prose>
            <h1>Privacy Policy</h1>
            <p>
              This Privacy Policy explains how RGB Pantone collects, uses, and protects information
              when you use rgbtopantone.com.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect limited information required to run and improve the website:
            </p>
            <ul>
              <li>
                Contact details you provide voluntarily when you email support, such as your email
                address.
              </li>
              <li>
                Technical and usage data, including browser type, device information, pages viewed,
                and approximate IP-based location.
              </li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>
              We use this information to:
            </p>
            <ul>
              <li>Operate and improve our color converter tools.</li>
              <li>Respond to support requests.</li>
              <li>Measure site performance, traffic, and feature usage.</li>
              <li>Maintain security, prevent abuse, and comply with legal obligations.</li>
            </ul>
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We may share information with service providers that help us host, secure, or analyze
              the website. We may also disclose information when required by law or to protect our
              legal rights.
            </p>
            <h2>Third-Party Services</h2>
            <p>
              Our website may link to third-party tools and sites. Their privacy practices are
              governed by their own policies, not this one.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this policy from time to time. Any changes become effective when posted
              on this page.
            </p>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{' '}
              <a
                href="mailto:support@rgbtopantone.com"
                target="_blank"
                className="text-violet-600 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-500"
              >
                support@rgbtopantone.com
              </a>
              .
            </p>

            <p>
              We do not require account creation for core conversion features. Inputs are processed
              for conversion and are not stored as uploaded media files.
            </p>
          </Prose>
        </Container>
      </Wrapper>
    </>
  );
}
