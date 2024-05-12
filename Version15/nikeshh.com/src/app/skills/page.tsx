import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import TextReveal from "@/components/magicui/text-reveal";

/**
 * This component renders your homepage.
 *
 * Use Next's generateMetadata function to render page metadata.
 *
 * Use the SliceZone to render the content of the page.
 */

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("skills", "skills");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function Index() {
  /**
   * The client queries content from the Prismic API
   */
  const client = createClient();
  const home = await client.getByUID("skills", "skills");

  return <>
    <Navigation />
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextReveal text="Driven by curiosity and creativity, I love bringing ideas to life to make a difference." />
    </div>
    <SliceZone slices={home.data.slices} components={components} />
    <Footer />
  </>
}
