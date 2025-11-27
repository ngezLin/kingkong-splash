import "./globals.css";

export const metadata = {
  title: {
    default:
      "Kolam Renang King Kong | King Kong Splash Pandaan - Wahana Air Keluarga",
    template: "%s | Kolam Renang King Kong Splash Pandaan",
  },
  description:
    "King Kong Splash — Kolam Renang King Kong di Pandaan, Pasuruan. Wahana air keluarga terbaik dengan seluncuran raksasa dan kolam anak. Tempat wisata air favorit di Pandaan.",
  metadataBase: new URL("https://kolamrenangkingkong.com"),
  keywords: [
    "Kolam Renang King Kong",
    "King Kong Splash",
    "Kolam Renang King Kong Splash",
    "Kolam Renang Pandaan",
    "Wahana Air Pandaan",
    "Kolam Renang Kingkong",
    "Wisata Air Pandaan",
    "Tempat Liburan Keluarga Pasuruan",
    "Waterpark Pandaan",
  ],
  openGraph: {
    title: "King Kong Splash | Kolam Renang Seru di Pandaan",
    description:
      "Nikmati liburan seru di King Kong Splash — kolam renang dan waterpark terbaik di Pandaan, Pasuruan. Cocok untuk keluarga dan anak-anak!",
    url: "https://kolamrenangkingkong.com",
    siteName: "King Kong Splash",
    images: [
      {
        url: "https://kolamrenangkingkong.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "King Kong Splash Pandaan - Kolam Renang & Waterpark Keluarga",
      },
      {
        url: "https://kolamrenangkingkong.com/logo-kingkong.png",
        width: 512,
        height: 512,
        alt: "Logo King Kong Splash",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "King Kong Splash | Kolam Renang Seru di Pandaan",
    description:
      "King Kong Splash Waterpark — Kolam renang dan waterpark keluarga terbaik di Pandaan, Pasuruan.",
    images: ["https://kolamrenangkingkong.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://kolamrenangkingkong.com",
  },
  icons: {
    icon: [
      { url: "/favicon-v2.svg", type: "image/svg+xml" },
      { url: "/favicon-v2.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-v2.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
  themeColor: "#6FCEDC",
  verification: {
    // Add your verification codes here when you get them
    google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kolamrenangkingkong.com/#organization",
        name: "King Kong Splash",
        url: "https://kolamrenangkingkong.com",
        logo: {
          "@type": "ImageObject",
          url: "https://kolamrenangkingkong.com/logo-kingkong.png",
          width: 512,
          height: 512,
        },
        image: {
          "@type": "ImageObject",
          url: "https://kolamrenangkingkong.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
        sameAs: [
          // Add your social media links here
          // "https://www.facebook.com/kingkongsplash",
          // "https://www.instagram.com/kingkongsplash",
          // "https://www.tiktok.com/@kingkongsplash",
        ],
      },
      {
        "@type": "TouristAttraction",
        "@id": "https://kolamrenangkingkong.com/#place",
        name: "King Kong Splash Waterpark",
        alternateName: [
          "Kolam Renang King Kong",
          "Kolam Renang King Kong Splash Pandaan",
        ],
        description:
          "King Kong Splash Waterpark adalah Kolam Renang King Kong dan wahana air terbaik di Pandaan, Pasuruan. Nikmati seluncuran raksasa, kolam anak, dan berbagai fasilitas keluarga.",
        url: "https://kolamrenangkingkong.com",
        image: [
          "https://kolamrenangkingkong.com/og-image.jpg",
          "https://kolamrenangkingkong.com/logo-kingkong.png",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pandaan",
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          // Add your actual coordinates
          latitude: "-7.6523",
          longitude: "112.6876",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://kolamrenangkingkong.com/#website",
        url: "https://kolamrenangkingkong.com",
        name: "King Kong Splash",
        description: "Kolam Renang dan Waterpark Terbaik di Pandaan, Pasuruan",
        publisher: {
          "@id": "https://kolamrenangkingkong.com/#organization",
        },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <html lang="id">
      <head>
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="author" content="King Kong Splash" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>

      <body className="antialiased bg-sky-50 text-gray-800">{children}</body>
    </html>
  );
}
