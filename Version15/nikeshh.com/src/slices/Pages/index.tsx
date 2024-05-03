import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Pages`.
 */
export type PagesProps = SliceComponentProps<Content.PagesSlice>;

/**
 * Component for "Pages" Slices.
 */
const Pages = async ({ slice }: PagesProps): Promise<JSX.Element> => {
  const client = createClient();

  const caseStudies = await Promise.all(
    slice.items.map(async (item) => {
      if (isFilled.contentRelationship(item.page)) {
        return await client.getByID<Content.PageDocument>(
          item.page.id,
        );
      }
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 grid gap-16">
        {caseStudies.map(
          (caseStudy, index) =>
            caseStudy && (
              <div
                key={caseStudy.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <h3 className="text-4xl">
                    <PrismicText field={caseStudy.data.title} />
                  </h3>
                  <p className="text-lg text-yellow-500">
                    <PrismicText field={caseStudy.data.company} />
                  </p>
                  <div className="max-w-md">
                    <PrismicRichText field={caseStudy.data.description} />
                  </div>

                  <PrismicNextLink
                    document={caseStudy}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read more
                  </PrismicNextLink>
                </div>
                <PrismicNextImage
                  field={caseStudy.data.logo_image}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={clsx(
                    "rounded-xl lg:col-span-2",
                    index % 2 && "md:-order-1",
                  )}
                />
              </div>
            ),
        )}
      </div>
    </Bounded>
  );
};

export default Pages;
