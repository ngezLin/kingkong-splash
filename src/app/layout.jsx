import "./globals.css";

export const metadata = {
  title: "King Kong Splash",
  description: "Waterpark paling seru sepandaan! 🦍💦",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-sky-50 text-gray-800">{children}</body>
    </html>
  );
}
