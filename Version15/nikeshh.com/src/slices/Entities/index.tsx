import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";
import StarGrid from "@/components/StarGrid";
import Link from "next/link";
import TextShimmer from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Props for `Entities`.
 */
export type EntitiesProps = SliceComponentProps<Content.EntitiesSlice>;

// Entity Types
export const ENTITY_TYPES = [
  "Agency",
  "Enterprise",
  "Education",
  "Job"
] as const;

/**
 * Component for "Entities" Slices.
 */
const Entities = async ({ slice }: EntitiesProps): Promise<JSX.Element> => {
  const client = createClient();

  const caseStudies = await Promise.all(
    slice.items.map(async (item) => {
      if (isFilled.contentRelationship(item.entity)) {
        return await client.getByID<Content.EntityDocument>(item.entity.id);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StarGrid />
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-4">
        {ENTITY_TYPES.map((type, i) => (
          <Link key={`entity-${i}`} href="#">
            <div
              id="skills"
              className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            >
              {type}
            </div>
          </Link>
        ))}
      </ul>

      <div className="text-black dark:text-slate-100">
        <div className="wrapper pt-10">
          <div className="box-border max-w-7xl mx-4 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
            {caseStudies.map(
              (caseStudy, index) =>
                caseStudy && (
                  <article
                    key={caseStudy.id}
                    className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border"
                  >
                    <div className="relative mb-4">
                      <PrismicNextImage
                        field={caseStudy.data.logo_image}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={clsx(
                          "rounded-xl lg:col-span-2",
                          index % 2 && "md:-order-1"
                        )}
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      <a href="">
                        <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                          <PrismicText field={caseStudy.data.company} />
                        </div>
                      </a>
                    </div>
                    <Link
                      href={new URL(caseStudy.data.link ?? "")}
                      className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                    >
                      <PrismicText field={caseStudy.data.title} />
                    </Link>
                    <p className="text-gray-500 text-sm">
                      <PrismicRichText field={caseStudy.data.description} />
                    </p>
                    <div className="py-4">
                      <a className="inline-flex items-center" href="#">
                        <span className="mr-2">
                          <svg
                            className="fill-rose-600 dark:fill-rose-400 hover:animate-ping"
                            style={{ width: "24px", height: "24px" }}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                          </svg>
                        </span>
                        <span className="text-lg font-bold">34</span>
                      </a>
                    </div>
                    <div className="h-5 py-3 flex flex-row items-center justify-betwee ">
                      <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                        <span className="ml-1">
                          MRR: <PrismicText field={caseStudy.data.mrr} />
                        </span>
                      </span>
                    </div>
                    <div className="h-5 py-3 flex flex-row items-center justify-between">
                      <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                        <span className="ml-1">
                          Target MRR:{" "}
                          <PrismicText field={caseStudy.data.target_mrr} />
                        </span>
                      </span>
                    </div>
                    <div className="h-5 py-3 flex flex-row items-center justify-between">
                      <span className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                        <span className="ml-1">
                          🟩🟥🟥🟥🟥🟥🟥🟥🟥🟥
                        </span>
                      </span>
                    </div>
                    <Link
                      href={"/entities/" + caseStudy.uid}
                      className="hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      <div className="z-10 flex min-h-[4rem] items-center justify-start">
                        <div
                          className={cn(
                            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                          )}
                        >
                          <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>✨ Read More</span>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                          </TextShimmer>
                        </div>
                      </div>
                    </Link>
                  </article>
                )
            )}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Entities;
