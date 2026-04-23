'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Sparkles } from 'lucide-react';

type Tool = {
  url: string;
  name: string;
  target: '_blank' | '_self';
  isExternal?: boolean;
};
const tools: Tool[] = [
  {
    url: 'https://www.cmyktopantone.com/',
    name: 'Convert CMYK to Pantone',
    target: '_blank',
    isExternal: true,
  },
  {
    url: '/',
    name: 'Convert RGB to Pantone',
    target: '_blank',
  },
  {
    url: '/convert-hex-to-pantone-pms',
    name: 'Convert HEX to Pantone',
    target: '_blank',
  },
  {
    url: '/convert-hsv-to-pantone-pms',
    name: 'Convert HSV to Pantone',
    target: '_blank',
  },
  {
    url: '/convert-cmyk-to-rgb',
    name: 'Convert CMYK to RGB',
    target: '_blank',
  },
  {
    url: '/convert-hex-to-rgb',
    name: 'Convert HEX to RGB',
    target: '_blank',
  },
  {
    url: '/convert-hsv-to-rgb',
    name: 'Convert HSV to RGB',
    target: '_blank',
  },
  {
    url: '/convert-hsv-to-hex',
    name: 'Convert HSV to HEX',
    target: '_blank',
  },
  {
    url: 'https://www.cmyktopantone.com/convert-hex-to-cmyk',
    name: 'Convert HEX to CMYK',
    target: '_blank',
    isExternal: true,
  },
  {
    url: '/convert-hex-to-hsv',
    name: 'Convert HEX to HSV',
    target: '_blank',
  },
  {
    url: '/convert-pantone-to-rgb',
    name: 'Convert Pantone to RGB',
    target: '_blank',
  },
  {
    url: '/convert-pantone-to-hex',
    name: 'Convert Pantone to HEX',
    target: '_blank',
  },
  {
    url: 'https://www.cmyktopantone.com/convert-pantone-to-cmyk',
    name: 'Convert Pantone to CMYK',
    target: '_blank',
    isExternal: true,
  },
];

export default function RelatedTools() {
  const pathname = usePathname();
  const visibleTools = tools.filter((tool) => tool.url !== pathname);

  return (
    <section className="w-full rounded-2xl border border-gray-200/70 bg-white/60 p-4 shadow-sm backdrop-blur-sm dark:border-gray-700/60 dark:bg-gray-800/30 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="space-y-1">
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">
            <Sparkles className="size-3.5" />
            Related tools
          </p>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 md:text-lg">
            Explore more color converters
          </h2>
        </div>
        <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/20 dark:text-violet-200">
          {visibleTools.length} tools
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTools.map((tool, index) => {
          const Comp = tool.isExternal ? 'a' : Link;
          return (
            <Comp
              key={index}
              href={tool.isExternal ? `${tool.url}?ref=rgbtopantone.com` : tool.url}
              target={tool.target}
              className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200/80 bg-white p-3.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50/50 hover:text-violet-700 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300 dark:hover:border-violet-400/60 dark:hover:bg-violet-500/10 dark:hover:text-violet-200">
              <span className="leading-snug">{tool.name}</span>
              <ArrowUpRight className="size-4 shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-500 dark:text-gray-500 dark:group-hover:text-violet-300" />
            </Comp>
          );
        })}
      </div>
    </section>
  );
}
