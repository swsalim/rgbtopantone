import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Built-in slash redirect runs before redirects(). Without this, a trailing
  // slash is a same-host 308 and then a second hop. Every explicit source
  // also ends in `{/}?` so it matches with and without the slash.
  skipTrailingSlashRedirect: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [{ protocol: 'https', hostname: 'ik.imagekit.io', port: '' }],
    formats: ['image/avif', 'image/webp'],
  },
  // Generated from inventory.csv. Explicit rules first, hex wildcard, catch-all last.
  // Reverse-lookup rows follow approved decision C2: one hop to the rewritten guide.
  // Forward rows that need the new page use /convert-rgb-to-spot-color.
  async redirects() {
    return [
      { source: '/', destination: 'https://colormapper.xyz/convert-rgb-to-spot-color', statusCode: 301 },
      { source: '/convert-hex-to-pantone-pms{/}?', destination: 'https://colormapper.xyz/convert-rgb-to-spot-color', statusCode: 301 },
      { source: '/convert-hsv-to-pantone-pms{/}?', destination: 'https://colormapper.xyz/convert-rgb-to-spot-color', statusCode: 301 },
      { source: '/convert-pantone-pms-to-rgb{/}?', destination: 'https://colormapper.xyz/blog/spot-color-to-hex-rgb', statusCode: 301 },
      { source: '/convert-cmyk-to-rgb{/}?', destination: 'https://colormapper.xyz/convert-cmyk-to-rgb', statusCode: 301 },
      { source: '/convert-hex-to-rgb{/}?', destination: 'https://colormapper.xyz/convert-hex-to-rgb', statusCode: 301 },
      { source: '/convert-hex-to-hsv{/}?', destination: 'https://colormapper.xyz/convert-hex-to-hsv', statusCode: 301 },
      { source: '/convert-hsv-to-hex{/}?', destination: 'https://colormapper.xyz/convert-hsv-to-hex', statusCode: 301 },
      { source: '/convert-hsv-to-rgb{/}?', destination: 'https://colormapper.xyz/convert-hsv-to-rgb', statusCode: 301 },
      { source: '/convert-color{/}?', destination: 'https://colormapper.xyz/convert-color', statusCode: 301 },
      { source: '/legal/privacy-policy{/}?', destination: 'https://colormapper.xyz/legal/privacy-policy', statusCode: 301 },
      { source: '/legal/terms-and-conditions{/}?', destination: 'https://colormapper.xyz/legal/terms-and-conditions', statusCode: 301 },
      { source: '/manifest.webmanifest{/}?', destination: 'https://colormapper.xyz/manifest.webmanifest', statusCode: 301 },
      { source: '/privacy{/}?', destination: 'https://colormapper.xyz/legal/privacy-policy', statusCode: 301 },
      { source: '/terms{/}?', destination: 'https://colormapper.xyz/legal/terms-and-conditions', statusCode: 301 },
      { source: '/api/og{/}?', destination: 'https://colormapper.xyz/images/og-default.png', statusCode: 301 },
      { source: '/convert-pantone-to-rgb{/}?', destination: 'https://colormapper.xyz/blog/spot-color-to-hex-rgb', statusCode: 301 },
      { source: '/convert-pantone-to-hex{/}?', destination: 'https://colormapper.xyz/blog/spot-color-to-hex-rgb', statusCode: 301 },
      { source: '/blog{/}?', destination: 'https://colormapper.xyz/blog', statusCode: 301 },
      { source: '/lab-to-pantone{/}?', destination: 'https://colormapper.xyz/convert-rgb-to-spot-color', statusCode: 301 },
      { source: '/rgb-to-pantone{/}?', destination: 'https://colormapper.xyz/convert-rgb-to-spot-color', statusCode: 301 },
      { source: '/pantone-to-lab.php{/}?', destination: 'https://colormapper.xyz/blog/spot-color-to-hex-rgb', statusCode: 301 },
      { source: '/color-models{/}?', destination: 'https://colormapper.xyz/color-models', statusCode: 301 },
      { source: '/favicon.ico{/}?', destination: 'https://colormapper.xyz/icons/favicon-32x32.png', statusCode: 301 },
      { source: '/convert-hex-to-pantone-pms/:path*', destination: 'https://colormapper.xyz/convert-rgb-to-spot-color', statusCode: 301 },
      // Catch-all LAST. Unknown paths go to the closest hub, never the homepage.
      // Retained files and static asset prefixes stay on this host.
      {
        source: '/:path((?!robots\\.txt$|sitemap\\.xml$|sitemap-0\\.xml$|ads\\.txt$|_next/|icons/|images/).*)',
        destination: 'https://colormapper.xyz/convert-color',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
