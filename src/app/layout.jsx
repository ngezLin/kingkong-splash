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
    "kingkongsplash",
    "king kong splash",
    "kolam renang Pandaan",
    "wahana air Pandaan",
    "tempat wisata Pandaan",
    "liburan di Pandaan",
    "kolam renang sekitar",
    "liburan Pandaan",
    "explore Pandaan",
    "wahana Pandaan",
    "tempat seru Pandaan",
    "kolam",
    "renang",
    "pandaan",
    "wahana",
    "kingkong",
    "king",
    "kong",
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
        alt: "King Kong Splash Pandaan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kolamrenangkingkong.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-sky-50 text-gray-800">{children}</body>
    </html>
  );
}
