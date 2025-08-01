import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppGen - Set up your next app in seconds",
  description:
    "AppGen is the fastest way to bootstrap your next application with modern tools and best practices. Install with pip and get started in seconds.",
  keywords: [
    "app generator",
    "bootstrap",
    "next.js",
    "react",
    "typescript",
    "python",
    "pip",
    "development tools",
    "project setup",
    "modern web development",
  ],
  authors: [{ name: "AppGen Team" }],
  creator: "AppGen",
  publisher: "AppGen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://appgen-ui.vercel.app"), // Updated to your actual URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AppGen - Set up your next app in seconds",
    description:
      "AppGen is the fastest way to bootstrap your next application with modern tools and best practices.",
    url: "https://appgen-ui.vercel.app", // Updated to your actual URL
    siteName: "AppGen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AppGen - Fast app bootstrapping tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppGen - Set up your next app in seconds",
    description:
      "AppGen is the fastest way to bootstrap your next application with modern tools and best practices.",
    images: ["/og-image.png"],
    creator: "@ratishtwts",
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
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#your-primary-color" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1QNL4PM69V"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1QNL4PM69V');
  `}
        </Script>
      </head>
      <body className="dark">{children}</body>
    </html>
  );
}
