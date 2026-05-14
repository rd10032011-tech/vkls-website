import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VK LOGISTICS SOLUTIONS | Expert Logistics for Petrochemicals, Polymers, Tyres & Home Appliances",
    template: "%s | VK LOGISTICS SOLUTIONS"
  },
  description: "VK Logistics Solutions (VKLS) is India's premier industrial logistics powerhouse. We deliver unmatched safety, precision, and scalability for petrochemicals, hazardous materials, and enterprise supply chains. Experience the gold standard of operational integrity.",
  keywords: [
    "VK LOGISTICS SOLUTIONS",
    "VKLS",
    "Best Logistics Company India",
    "Global Freight Forwarding Services",
    "Pan-India Industrial Logistics",
    "Petrochemical Logistics Experts India",
    "Polymer Logistics Solutions",
    "Home Appliance Distribution India",
    "Tyre Logistics and Warehousing",
    "Hazardous Material Logistics Global",
    "Industrial Supply Chain Management India",
    "Customs Bonded Warehouse India",
    "International Multimodal Freight Forwarding"
  ],
  authors: [{ name: "VK LOGISTICS SOLUTIONS" }],
  creator: "VK LOGISTICS SOLUTIONS Strategic Team",
  publisher: "VK LOGISTICS SOLUTIONS",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://vkls.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VKLS | Precision Petrochemical Logistics Redefined",
    description: "Specialized warehousing and end-to-end supply chain solutions for the petrochemical industry. 3,00,000+ Sq.Ft of specialized storage in South India.",
    url: "https://vkls.in",
    siteName: "VKLS Logistics",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "VKLS Logistics Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VKLS | India's Leading Industrial Logistics Partner",
    description: "20+ years of excellence in petrochemical logistics and hazardous warehousing.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import LogisticsAIHub from "@/components/LogisticsAIHub";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsCompany",
    "name": "VKLS Logistics",
    "url": "https://vkls.in",
    "logo": "https://vkls.in/logo.webp",
    "description": "Leading petrochemical logistics and warehousing partner in South India.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F3, Shree Diya Residency, Bhuvaneshwari nagar, 2nd street, Puzhal",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600066",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vkls-logistics",
      "https://twitter.com/vkls_in"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
        {children}
        <LogisticsAIHub />
      </body>
    </html>
  );
}
