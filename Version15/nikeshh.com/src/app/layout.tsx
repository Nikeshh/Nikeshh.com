import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"
import { getTestimonials, getSkills, getServices, getProjects, getBlogs } from "@/lib/queries";
import Home from "./page";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikeshh Vijayabaskaran",
  description: "Senior Full Stack Developer and Digital Marketer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const testimonials = await getTestimonials();
  const skills = await getSkills();
  const services = await getServices();
  const projects = await getProjects();
  const blogs = await getBlogs();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={font.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{ baseTheme: dark }}>
            <main className="w-full">
              <Home
                testimonials={testimonials}
                skills={skills}
                services={services}
                projects={projects}
                blogs={blogs.slice(0, 3)}
              />
            </main>
          </ClerkProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
