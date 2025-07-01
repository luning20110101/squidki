import './globals.css'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Squidki Games - Play Free Online Games | Merge, Clicker, Puzzle, and More',
  description: 'Squidki is your portal to the best free online games: merge, clicker, puzzle, and more. Play instantly, no download required. Discover new games and enjoy a safe, fun gaming experience!',
  keywords: [
    'Squidki', 'online games', 'free games', 'merge games', 'clicker games', 'puzzle games', 'browser games', 'casual games', 'play online', 'Sprunki', 'Brainrot Clicker', 'Merge Fellas', 'Cheese Chompers 3D', 'EthnoGuessr', 'Scrandle', 'Wacky Flip', 'Steal a Brainrot', 'Merge Rot'
  ],
  authors: [{ name: 'Squidki Team', url: 'https://www.squidki.pro' }],
  openGraph: {
    title: 'Squidki Games - Play Free Online Games',
    description: 'Play the best free online games on Squidki. Merge, clicker, puzzle, and more. Safe, fun, and always free!',
    url: 'https://www.squidki.pro',
    siteName: 'Squidki',
    images: [
      {
        url: 'https://www.squidki.pro/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Squidki Games - Play Free Online Games',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squidki Games - Play Free Online Games',
    description: 'Play the best free online games on Squidki. Merge, clicker, puzzle, and more. Safe, fun, and always free!',
    site: '@squidki',
    images: ['https://www.squidki.pro/og-image.png'],
  },
  metadataBase: new URL('https://www.squidki.pro'),
};

function CanonicalTag() {
  // 仅在客户端渲染时使用 usePathname
  if (typeof window === 'undefined') return null;
  const pathname = window.location.pathname + window.location.search;
  const canonicalUrl = `https://www.squidki.pro${pathname}`;
  return <link rel="canonical" href={canonicalUrl} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <CanonicalTag />
      </head>
      <body>{children}</body>
    </html>
  )
}
