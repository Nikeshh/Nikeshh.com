import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import NotificationC from "@/components/notification";
import { Toaster } from "@/components/ui/sonner"

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikeshh Vijayabaskaran",
  description: "Senior Full Stack Developer and Digital Marketer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <ClerkProvider appearance={{ baseTheme: dark }}>
              <main className="w-full">
                <NotificationC />
                <Navigation />
                {children}
                <Footer />
              </main>
            </ClerkProvider>
          </ModalProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
