import type { ComponentProps } from 'react';

import Link from 'next/link';

import { converters } from '@/config/converters';
import { siteConfig } from '@/config/site';
import { tools } from '@/config/tools';

import { cn } from '@/lib/utils';

import { Logo } from '@/components/icons';

export type IconProps = React.HTMLAttributes<SVGElement>;

const navigation = {
  legal: [
    { name: 'Terms of service', href: '/legal/terms-and-conditions' },
    { name: 'Privacy policy', href: '/legal/privacy-policy' },
  ],
  pantone: converters
    .filter((converter) => converter.sourceColor === 'PANTONE')
    .map((converter) => ({
      name: converter.title,
      href: converter.url,
    })),
  projects: tools.map((tool) => ({
    name: tool.title,
    href: tool.href,
    isExternal: tool.isExternal,
  })),
};

interface FooterProps extends ComponentProps<'footer'> {
  className?: string;
}

export default function Footer({ className, ...props }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-gray-900', className)} {...props}>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-3 md:col-span-1 lg:col-span-1">
            <Logo className="size-9 text-white" />
            <p className="text-balance text-base/6 text-gray-100">
              Get instant, accurate Pantone matches for your CMYK colors.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 md:col-span-2 md:mt-0 md:grid-cols-3">
            <div className="md:mt-0">
              <div className="md:mt-0">
                <h2 className="text-base font-semibold text-gray-100">Pantone Colors</h2>
                <ul role="list" className="mt-4 space-y-4 md:mt-6">
                  {navigation.pantone.map((item) => (
                    <li key={`footer-${item.name}`}>
                      <Link
                        href={`${item.href}`}
                        className="text-base/6 text-gray-300 transition hover:text-violet-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 md:mt-8">
                <h3 className="text-base/6 font-semibold text-gray-100">Legal</h3>
                <ul role="list" className="mt-4 space-y-4 md:mt-6">
                  {navigation.legal.map((item) => (
                    <li key={`footer-${item.name}`}>
                      <Link
                        href={item.href}
                        className="text-base/6 text-gray-300 transition hover:text-violet-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:mt-0">
              <h3 className="text-base/6 font-semibold text-gray-100">Our Projects</h3>
              <ul role="list" className="mt-4 space-y-4 md:mt-6">
                {navigation.projects.map((item) => (
                  <li key={`footer-${item.name}`}>
                    <a
                      href={item.href}
                      className="text-base/6 text-gray-300 transition hover:text-violet-400"
                      target="_blank">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-row flex-wrap gap-4 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="shrink-0">
            <a href="https://twelve.tools" target="_blank">
              <img
                src="https://twelve.tools/badge0-dark.svg"
                alt="Featured on Twelve Tools"
                width="120"
                height="34"
              />
            </a>
          </div>
          <div className="shrink-0">
            <a href="https://theindiewall.net" target="_blank">
              <img
                src="https://theindiewall.net/indiewall.svg"
                alt="IndieWall"
                width="100"
                height="34"
              />
            </a>
          </div>
          <div className="shrink-0">
            <a href="https://liiinks.net" target="_blank">
              <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="8" fill="#667eea" />
                <text
                  x="60"
                  y="25"
                  font-family="Arial, sans-serif"
                  font-size="12"
                  fill="white"
                  text-anchor="middle">
                  Liiinks
                </text>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-100">
            &copy; {currentYear} {siteConfig.siteName}.
            <span className="ml-2 mt-0 inline-block text-gray-100">
              Built by{' '}
              <a
                href="https://www.yuurrific.com?ref=rgbtopantone"
                className="inline-block font-medium underline underline-offset-4 transition-colors duration-200 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-gray-900"
                target="_blank"
                rel="noopener noreferrer">
                Yuurrific
              </a>
              .
            </span>
            <span className="mt-2 block text-gray-100 md:ml-2 md:mt-0 md:inline-block">
              Privacy-friendly analytics by{' '}
              <a
                href="https://seline.com/?via=yuyu"
                className="inline-block rotate-0 rounded-md bg-blue-600 px-2 py-1 text-gray-100 transition duration-100 ease-out hover:-rotate-3 hover:bg-blue-700 hover:ease-in focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                target="_blank"
                rel="noopener noreferrer">
                Seline
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
