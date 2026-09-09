/**
 * Drop-in Next.js App Router server component.
 * Copy into your host site (for example `components/BadgeRelaySite.tsx`).
 *
 * Renders real <a><img> nodes in the initial HTML so directory crawlers can
 * verify badges without executing JavaScript.
 */
type PublicBadge = {
  id: string;
  name: string;
  targetUrl: string;
  imageUrl: string;
  alt: string;
  width?: number;
  height?: number;
};

type PublicConfig = {
  schemaVersion: number;
  configVersion: number;
  appearance: {
    layout: 'carousel' | 'row';
    badgeHeight: number;
    gap: number;
    alignment: 'left' | 'center' | 'right';
  };
  showAttribution: boolean;
  badges: PublicBadge[];
};

export type BadgeRelaySiteProps = {
  siteKey: string;
  /** BadgeRelay origin, e.g. https://badgerelay.com or http://localhost:3000 */
  apiBase: string;
  /** ISR / cache seconds. Keep short so publishes appear quickly. */
  revalidateSeconds?: number;
  className?: string;
};

export async function BadgeRelaySite({
  siteKey,
  apiBase,
  revalidateSeconds = 30,
  className,
}: BadgeRelaySiteProps) {
  if (!siteKey.startsWith('site_live_')) {
    return null;
  }

  const endpoint = `${apiBase.replace(/\/$/, '')}/api/public/widgets/${encodeURIComponent(siteKey)}`;
  let config: PublicConfig | null = null;

  try {
    const res = await fetch(endpoint, {
      headers: { Accept: 'application/json' },
      next: { revalidate: revalidateSeconds },
    });
    if (!res.ok) return null;
    config = (await res.json()) as PublicConfig;
  } catch {
    return null;
  }

  if (!config || config.schemaVersion !== 1 || !Array.isArray(config.badges)) {
    return null;
  }

  const badges = config.badges.slice(0, 50);
  const justify =
    config.appearance.alignment === 'left'
      ? 'flex-start'
      : config.appearance.alignment === 'right'
        ? 'flex-end'
        : 'center';

  return (
    <div
      data-badgerelay-ssr={siteKey}
      data-br-config-version={config.configVersion}
      className={className}
      style={{
        width: '100%',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        fontSize: 14,
        lineHeight: 1.4,
      }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: justify,
          gap: config.appearance.gap,
        }}>
        {badges.map((badge) => (
          <a
            key={badge.id}
            href={badge.targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={badge.name}
            style={{ display: 'inline-flex', flex: '0 0 auto' }}>
            {/* Host sites may replace with next/image if desired */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badge.imageUrl}
              alt={badge.alt || badge.name}
              width={badge.width}
              height={badge.height}
              loading="lazy"
              decoding="async"
              style={{
                display: 'block',
                height: config.appearance.badgeHeight,
                width: 'auto',
                maxWidth: 240,
                objectFit: 'contain',
              }}
            />
          </a>
        ))}
      </div>
      {config.showAttribution ? (
        <div style={{ marginTop: 8 }}>
          <a
            href={`${apiBase.replace(/\/$/, '')}/?utm_source=widget&utm_medium=powered_by&utm_campaign=free_site`}
            target="_blank"
            rel="nofollow noopener"
            style={{
              color: '#71717a',
              textDecoration: 'underline',
              textUnderlineOffset: 2,
              fontSize: 14,
            }}>
            Powered by BadgeRelay
          </a>
        </div>
      ) : null}
    </div>
  );
}
