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
    "Kingkong Waterpark",
    "Kingkong Splash Waterpark",
    "wahana air Pandaan",
    "wahana air keluarga",
    "tempat wisata Pandaan",
    "liburan di Pandaan",
    "kolam renang sekitar",
    "wisata keluarga Pasuruan",
    "tempat seru Pandaan",
    "wahana anak Pandaan",
    "liburan keluarga Jawa Timur",
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
    icon: "/favicon.ico",      // favicon default untuk browser tab
    shortcut: "/favicon.ico",  // untuk shortcut/bookmark
    apple: "/favicon.ico",     // untuk Apple Touch
  },
  themeColor: "#6FCEDC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-sky-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
