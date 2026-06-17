import SmoothScroll from "@/components/SmoothScroll";
import ScrollSlide from "@/components/ScrollSlide";
import "./globals.css";

export const metadata = {
  title: {
    default:
      "King Kong Splash Waterpark Pandaan | Tiket, Lokasi & Wahana Air",
    template: "%s | King Kong Splash Pandaan",
  },
  description:
    "Info lengkap King Kong Splash Waterpark Pandaan terbaru: Harga tiket masuk mulai Rp15.000, lokasi, jam operasional, dan wahana seluncuran seru untuk keluarga!",
  metadataBase: new URL("https://kolamrenangkingkong.com"),
  keywords: [
    "Kolam Renang Pandaan",
    "Kolam Renang di Pandaan",
    "Kolam Renang Pandaan Terbaik",
    "King Kong Splash Pandaan",
    "Kolam Renang King Kong",
    "Wahana Air Pandaan",
    "Waterpark Pandaan",
    "Wisata Air Pasuruan",
    "Tempat Berenang di Pandaan",
    "Kolam Renang Pasuruan",
    "Kingkong Splash",
    "kolam pandaan",
    "tempat renang pandaan",
  ],
  openGraph: {
    title: "King Kong Splash Pandaan | Kolam Renang & Wahana Air Keluarga",
    description:
      "Nikmati liburan seru di King Kong Splash — kolam renang dan waterpark keluarga terbaik di Pandaan, Pasuruan. Aman, bersih, dan menyenangkan!",
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
    title: "King Kong Splash Pandaan | Wahana Air Seru di Pandaan",
    description:
      "King Kong Splash Waterpark — Kolam renang dan wahana air keluarga terbaik di Pandaan, Pasuruan.",
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
  verification: {
    google: "your-google-verification-code",
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
          "https://www.facebook.com/kingkongsplash",
          "https://www.instagram.com/kingkongsplash",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://kolamrenangkingkong.com/#localbusiness",
        name: "King Kong Splash Waterpark",
        alternateName: [
          "Kolam Renang King Kong",
          "Kolam Renang Kingkong",
          "Kolam Renang King Kong Splash",
          "Kingkong Splash",
          "King Kong Splash Pandaan",
          "Kolam Renang Pandaan",
          "Kolam Pandaan",
          "Tempat Renang Pandaan",
        ],
        description:
          "Kolam renang dan wahana air keluarga terbaik di Pandaan, Pasuruan. Menawarkan seluncuran raksasa dan kolam anak yang aman.",
        image: "https://kolamrenangkingkong.com/images/hero.webp",
        url: "https://kolamrenangkingkong.com",
        telephone: "+6287701044580",
        priceRange: "Rp15.000 - Rp25.000",
        hasMap: "https://www.google.com/maps/place/Kingkong%20Splash%20Waterpark/@-7.6451416,112.7052399,17z",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Pahlawan Prof. Sunaryo No.9, Mbajang, Kb. Waris",
          addressLocality: "Pandaan",
          addressRegion: "Pasuruan",
          postalCode: "67156",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "-7.6451416",
          longitude: "112.7052399",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "07:00",
            closes: "17:00",
          },
        ],
      },
      {
        "@type": "TouristAttraction",
        "@id": "https://kolamrenangkingkong.com/#attraction",
        name: "King Kong Splash Waterpark",
        description:
          "Destinasi wisata air populer di Pandaan dengan berbagai wahana seru.",
        url: "https://kolamrenangkingkong.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pandaan",
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
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
      {
        "@type": "FAQPage",
        "@id": "https://kolamrenangkingkong.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Berapa harga tiket masuk King Kong Splash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Harga tiket masuk normal berkisar antara Rp15.000 hingga Rp25.000, tergantung pada hari kunjungan (weekdays/weekend/holiday). Kami juga menyediakan paket promo khusus untuk rombongan sekolah.",
            },
          },
          {
            "@type": "Question",
            name: "Di mana lokasi Kolam Renang King Kong?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Lokasi King Kong Splash berada di Jl. Pahlawan Prof. Sunaryo No.9, Mbajang, Kecamatan Pandaan, Pasuruan, Jawa Timur 67156. Lokasi kami sangat mudah diakses dengan kendaraan pribadi dan dekat dengan pusat kota Pandaan.",
            },
          },
          {
            "@type": "Question",
            name: "Jam berapa King Kong Splash buka?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "King Kong Splash buka setiap hari (Senin - Minggu) mulai pukul 07.00 WIB hingga 17.00 WIB, cocok untuk petualangan air pagi hari maupun bersantai di sore hari.",
            },
          },
          {
            "@type": "Question",
            name: "Apa tempat renang di Pandaan yang paling direkomendasikan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "King Kong Splash adalah tempat renang di Pandaan yang sangat direkomendasikan berkat wahana airnya yang lengkap, air kolam yang bersih dan selalu terawat, area kolam anak yang aman, serta pemandangan asri pegunungan.",
            },
          },
          {
            "@type": "Question",
            name: "Apakah ada promo tiket rombongan sekolah di King Kong Splash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya! Kami menawarkan promo khusus untuk rombongan sekolah dengan fasilitas lengkap, area privat, serta gratis 1 tiket masuk untuk setiap pembelian kelipatan 20 tiket. Silakan hubungi admin kami untuk penawaran harga terbaik.",
            },
          },
          {
            "@type": "Question",
            name: "Apakah ada wahana air ekstrem di King Kong Splash?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "King Kong Splash menyediakan seluncuran raksasa (water slide) yang seru untuk menguji adrenalin Anda dengan aman, serta wahana air interaktif yang menyenangkan di area kolam anak.",
            },
          },
        ],
      },
      {
        "@type": "ImageGallery",
        "@id": "https://kolamrenangkingkong.com/#gallery",
        name: "Galeri King Kong Splash",
        description:
          "Koleksi foto keseruan wahana air dan fasilitas di King Kong Splash Pandaan.",
        image: [
          "https://kolamrenangkingkong.com/images/gal1.png",
          "https://kolamrenangkingkong.com/images/gal2.png",
          "https://kolamrenangkingkong.com/images/gal3.png",
          "https://kolamrenangkingkong.com/images/gal4.png",
          "https://kolamrenangkingkong.com/images/gal5.png",
        ],
      },
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Pasuruan" />
        <meta name="geo.position" content="-7.645142;112.705240" />
        <meta name="ICBM" content="-7.645142, 112.705240" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <meta name="author" content="King Kong Splash" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>

      <body className="antialiased bg-sky-50 text-gray-800">
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollSlide />
      </body>
    </html>
  );
}
