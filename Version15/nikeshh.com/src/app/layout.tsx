import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import ModalProvider from "@/providers/modal-provider";
import { Analytics } from "@vercel/analytics/react";
import localFont from 'next/font/local';
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${font.className} ${rollAndInEmilieFont.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <ClerkProvider appearance={{ baseTheme: dark }}>
              <main className="w-full">
                {children}
              </main>
            </ClerkProvider>
          </ModalProvider>
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
