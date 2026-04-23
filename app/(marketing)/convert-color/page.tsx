import Link from 'next/link';
import type { Metadata } from 'next';

import { ExternalLinkIcon } from 'lucide-react';

import { converters } from '@/config/converters';
import { siteConfig } from '@/config/site';

import { cn } from '@/lib/utils';

import { Container } from '@/components/container';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Wrapper } from '@/components/wrapper';

const config = {
  title: 'Color Converter Tools',
  description:
    'Browse free color converter tools for RGB, HEX, HSL, HSV, CMYK, and Pantone workflows. Find the right converter for digital and print design.',
  url: '/convert-color',
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
        url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`),
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
        url: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: config.title,
      },
    ],
  },
};

function groupConvertersBySource() {
  const grouped = converters.reduce(
    (acc, converter) => {
      if (!acc[converter.sourceColor]) {
        acc[converter.sourceColor] = [];
      }
      acc[converter.sourceColor].push(converter);
      return acc;
    },
    {} as Record<string, typeof converters>,
  );

  return grouped;
}

export default function ConvertColorsPage() {
  const groupedConverters = groupConvertersBySource();
  const sourceStyles: Record<
    string,
    {
      sectionBg: string;
      headingText: string;
      cardClass: string;
      iconText: string;
      badgeClass: string;
    }
  > = {
    cmyk: {
      sectionBg: 'bg-yellow-50/60 dark:bg-yellow-500/10',
      headingText: 'text-yellow-800 dark:text-yellow-300',
      cardClass:
        'border-yellow-300/70 bg-white hover:border-yellow-500 hover:bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-500/10 dark:hover:bg-yellow-500/20',
      iconText: 'text-yellow-700 dark:text-yellow-300',
      badgeClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-200',
    },
    rgb: {
      sectionBg: 'bg-red-50/60 dark:bg-red-500/10',
      headingText: 'text-red-800 dark:text-red-300',
      cardClass:
        'border-red-300/70 bg-white hover:border-red-500 hover:bg-red-50/50 dark:border-red-800 dark:bg-red-500/10 dark:hover:bg-red-500/20',
      iconText: 'text-red-700 dark:text-red-300',
      badgeClass: 'bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-200',
    },
    hex: {
      sectionBg: 'bg-violet-50/60 dark:bg-violet-500/10',
      headingText: 'text-violet-800 dark:text-violet-300',
      cardClass:
        'border-violet-300/70 bg-white hover:border-violet-500 hover:bg-violet-50/50 dark:border-violet-800 dark:bg-violet-500/10 dark:hover:bg-violet-500/20',
      iconText: 'text-violet-700 dark:text-violet-300',
      badgeClass: 'bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200',
    },
    hsl: {
      sectionBg: 'bg-blue-50/60 dark:bg-blue-500/10',
      headingText: 'text-blue-800 dark:text-blue-300',
      cardClass:
        'border-blue-300/70 bg-white hover:border-blue-500 hover:bg-blue-50/50 dark:border-blue-800 dark:bg-blue-500/10 dark:hover:bg-blue-500/20',
      iconText: 'text-blue-700 dark:text-blue-300',
      badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200',
    },
    hsv: {
      sectionBg: 'bg-green-50/60 dark:bg-green-500/10',
      headingText: 'text-green-800 dark:text-green-300',
      cardClass:
        'border-green-300/70 bg-white hover:border-green-500 hover:bg-green-50/50 dark:border-green-800 dark:bg-green-500/10 dark:hover:bg-green-500/20',
      iconText: 'text-green-700 dark:text-green-300',
      badgeClass: 'bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-200',
    },
    pantone: {
      sectionBg: 'bg-gray-50/80 dark:bg-gray-500/10',
      headingText: 'text-gray-800 dark:text-gray-300',
      cardClass:
        'border-gray-300/70 bg-white hover:border-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-500/10 dark:hover:bg-gray-500/20',
      iconText: 'text-gray-700 dark:text-gray-300',
      badgeClass: 'bg-gray-200 text-gray-800 dark:bg-gray-500/30 dark:text-gray-200',
    },
  };

  return (
    <>
      <Wrapper className="pb-8 md:pb-12">
        <Container as="section">
          <div className="rounded-3xl border border-violet-200/70 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-6 shadow-sm dark:border-violet-500/20 dark:from-violet-500/15 dark:via-gray-900 dark:to-blue-500/10 md:p-10">
            <p className="mb-4 inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-700 dark:bg-violet-500/20 dark:text-violet-200">
              Free color conversion hub
            </p>
            <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-tight text-gray-900 dark:text-gray-100 md:text-5xl">
              Convert colors across RGB, HEX, CMYK, HSL, HSV, and Pantone
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
              Find the right converter in seconds. Use these tools to move from screen to print,
              keep brand colors consistent, and hand off accurate color values to design and
              production teams.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Pick your starting color model below, open a converter, and copy production-ready
              values instantly.
            </p>
          </div>
        </Container>
      </Wrapper>

      {Object.entries(groupedConverters).map(([sourceColor, converters], index) => (
        <div key={sourceColor}>
          <Wrapper
            className={cn(
              'border-y border-transparent py-8 transition-colors md:py-12',
              sourceStyles[sourceColor.toLowerCase()]?.sectionBg,
            )}>
            <Container as="section">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                    Start with {sourceColor}
                  </p>
                  <h2
                    className={cn(
                      'mt-2 text-2xl font-semibold md:text-3xl',
                      sourceStyles[sourceColor.toLowerCase()]?.headingText,
                    )}>
                    {sourceColor} converters
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
                    Convert {sourceColor} values into the format you need for your next design or
                    production step.
                  </p>
                </div>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-medium',
                    sourceStyles[sourceColor.toLowerCase()]?.badgeClass,
                  )}>
                  {converters.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {converters.map((converter) => (
                  <Link key={converter.id} href={converter.url}>
                    <Card
                      className={cn(
                        'h-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg',
                        sourceStyles[sourceColor.toLowerCase()]?.cardClass,
                      )}>
                      <CardContent className="group relative h-full p-5">
                        <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                          <ExternalLinkIcon
                            className={cn(
                              'h-4 w-4',
                              sourceStyles[sourceColor.toLowerCase()]?.iconText,
                            )}
                          />
                        </div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                          Color converter
                        </p>
                        <CardDescription
                          className={cn(
                            'line-clamp-2 text-base font-semibold',
                            sourceStyles[sourceColor.toLowerCase()]?.iconText,
                          )}>
                          {converter.title}
                        </CardDescription>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {converter.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </Container>
          </Wrapper>
          {index === 1 && (
            <Wrapper className="mx-auto text-center">
              <div className="mx-auto max-w-2xl">
                <iframe
                  width="100%"
                  height="250"
                  frameBorder="0"
                  className="ta-widget"
                  data-min-height="250"
                  id="682c9ba20aa965b6c299b272-2929"
                  src="https://app.tinyadz.com/widgets/682c9ba20aa965b6c299b272?seed=2929&previewMode=false&showInPopup=false&theme=light"></iframe>
              </div>
            </Wrapper>
          )}
        </div>
      ))}
    </>
  );
}
