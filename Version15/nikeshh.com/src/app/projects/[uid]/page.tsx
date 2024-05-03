import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage } from "@prismicio/next";
import { asText } from "@prismicio/client";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return (
    <>
      <Navigation />
      <StarGrid />
      <Bounded as="article">
        <div className="relative grid place-items-center text-center">
          <h1 className="text-4xl font-medium">
            <PrismicText field={page.data.title} />
            <p className="text-lg text-yellow-500">
              <PrismicText field={page.data.company} />
            </p>
          </h1>
          <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
            <PrismicText field={page.data.description} />
          </p>
          <PrismicNextImage
            field={page.data.logo_image}
            className="rounded-lg"
            quality={100}
          />
        </div>
        <div className="mx-auto ml-0">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </Bounded>
      <Footer />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return {
    title: `${page.data.meta_title || asText(page.data.title)}`,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
