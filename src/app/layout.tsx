import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `I'm Javier, freelance Software Engineer`,
    template: `%s · ${site.name}`,
  },
  description: `${site.name}. ${site.title}`,
  keywords: [...site.keywords],
  authors: [{ name: site.name }],
  icons: {
    icon: "/static/img/logo.png",
    apple: "/static/img/logo.png",
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    siteName: site.name,
    type: "website",
    url: site.url,
    title: site.name,
    description: site.title,
  },
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link rel="me" href={site.twitter} />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
