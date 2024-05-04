import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "This is a professional portfolio website designed with nextjs.",
  keywords: [
    "Mubashir",
    "Mubashir Ali Portfolio",
    "mubashir-ali.vercel.app",
    "mubashirAlibalti",
    "Portfolio",
    "Mubashir Portfolio ",
    "Mubashir Ali website",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
