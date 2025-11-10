import "./globals.css";

export const metadata = {
  title: {
    default: "King Kong Splash | Wahana Air Seru di Pandaan",
    template: "%s | King Kong Splash",
  },
  description:
    "Nikmati keseruan di King Kong Splash — kolam renang dan wahana air keluarga terbaik di Pandaan. Tempat liburan seru untuk anak dan keluarga!",
  metadataBase: new URL("https://kolamrenangkingkong.com"),
  keywords: [
    "King Kong Splash",
    "king kong splash",
    "kingkongsplash",
    "kolam renang",
    "kolam renang Pandaan",
    "kolam renang Kingkong",
    "wahana air Pandaan",
    "tempat wisata Pandaan",
    "kolam renang sekitar",
    "kolam renang king kong pandaan",
    "King Kong Splash Waterpark Pandaan",
  ],
  openGraph: {
    title: "King Kong Splash | Wahana Air Seru di Pandaan",
    description:
      "Nikmati liburan seru di King Kong Splash — kolam renang dan wahana air terbaik di Pandaan, Pasuruan. Cocok untuk keluarga dan anak-anak!",
    url: "https://kolamrenangkingkong.com",
    siteName: "King Kong Splash",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "King Kong Splash Pandaan - Kolam Renang & Wahana Air Keluarga",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "King Kong Splash | Wahana Air Seru di Pandaan",
    description:
      "King Kong Splash Waterpark — Kolam renang dan wahana air keluarga terbaik di Pandaan, Pasuruan.",
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
      <body className="antialiased bg-sky-50 text-gray-800">{children}</body>
    </html>
  );
}
