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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#6FCEDC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Let Next.js handle the icons automatically through the metadata */}
      </head>
      <body className="antialiased bg-sky-50 text-gray-800">{children}</body>
    </html>
  );
}
