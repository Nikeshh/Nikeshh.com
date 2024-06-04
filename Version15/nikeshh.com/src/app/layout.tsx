import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react";
import localFont from 'next/font/local';
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { NProgressBarProvider } from '@/providers/nprogress-bar-provider'
import Script from "next/script";
import CookiesConsent from '@/components/cookies-consent';
import Scroll from "@/components/scroll";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = DM_Sans({ subsets: ["latin"] });

const rollAndInEmilieFont = localFont({
  src: [
    {
      path: '../../public/fonts/RollandinEmilie.ttf',
    }
  ],
  variable: '--font-roll-and-in-emilie'
})

export const metadata: Metadata = {
  title: "Nikeshh Vijayabaskaran",
  description: "Lead Full Stack Developer and Digital Marketer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <Scroll />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9J8D52CREF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9J8D52CREF');
          `}
        </Script>
        <Script id="crisp">
          {`
            window.$crisp=[];window.CRISP_WEBSITE_ID="4e3a32b6-0a30-4883-b6a4-30a22ddcc1c0";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script>

        <body className={`${font.className} ${rollAndInEmilieFont.variable}`} suppressHydrationWarning={true}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NProgressBarProvider />
            <main className="w-full">
              {children}
            </main>
            <SpeedInsights />
            <CookiesConsent />
          </ThemeProvider>
          <Toaster />
          <Analytics />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </html>
    </ClerkProvider>
  );
}
