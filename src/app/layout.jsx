import "./globals.css";

export const metadata = {
  title: {
    default:
      "Kolam Renang King Kong Splash Pandaan | Wahana Air & Liburan Keluarga",
    template: "%s | Kolam Renang King Kong Splash Pandaan",
  },
  description:
    "King Kong Splash — Kolam Renang di Pandaan, Pasuruan. Wahana air keluarga terbaik dengan seluncuran raksasa dan kolam anak. Tempat wisata air favorit di Pandaan.",
  metadataBase: new URL("https://kolamrenangkingkong.com"),
  keywords: [
    "Kolam Renang King Kong",
    "King Kong Splash",
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
      "Nikmati liburan seru di King Kong Splash — kolam renang dan Kolam Renang terbaik di Pandaan, Pasuruan. Cocok untuk keluarga dan anak-anak!",
    url: "https://kolamrenangkingkong.com",
    siteName: "King Kong Splash",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "King Kong Splash Pandaan - Kolam Renang & Kolam Renang Keluarga",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "King Kong Splash | Kolam Renang Seru di Pandaan",
    description:
      "King Kong Splash Waterpark — Kolam renang dan Kolam Renang keluarga terbaik di Pandaan, Pasuruan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kolamrenangkingkong.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6FCEDC" />
      </head>
      <body className="antialiased bg-sky-50 text-gray-800">{children}</body>
    </html>
  );
}
