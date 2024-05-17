import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import StarGrid from "@/components/StarGrid";
import Link from "next/link";

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

      <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800 mt-4">
        {ENTITY_TYPES.map((type, i) => (
          <Link key={`entity-${i}`} href="#">
            <div
              id="skills"
              className="bg-white border border-black dark:border-white hover:dark:border-purple-900 hover:underline rounded-lg px-5 py-2 dark:bg-white/10 dark:text-white/80"
            >
              {type}
            </div>
          </Link>
        ))}
      </ul>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(
            (caseStudy, index) =>
              caseStudy && (
                <div key={index} className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                  <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                    <svg className="size-28" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="56" height="56" rx="10" fill="white"/>
                      <path d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z" fill="url(#paint0_linear_2204_541)"/>
                      <path d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z" fill="#2684FF"/>
                      <defs>
                      <linearGradient id="paint0_linear_2204_541" x1="24.734" y1="29.2284" x2="16.1543" y2="44.0429" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stop-color="#0052CC"/>
                      <stop offset="0.92" stop-color="#2684FF"/>
                      </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                      <PrismicText field={caseStudy.data.company} />
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                      <PrismicText field={caseStudy.data.title} />
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-neutral-500">
                      <PrismicRichText field={caseStudy.data.description} />
                    </p>
                    <div className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <span className="ml-1">
                        MRR: <PrismicText field={caseStudy.data.mrr} />
                      </span>
                    </div>
                    <div className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <span className="ml-1">
                        Target MRR:{" "}
                        <PrismicText field={caseStudy.data.target_mrr} />
                      </span>
                    </div>
                    <div className="py-1 text-xs font-regular text-gray-100 mr-1 flex flex-row items-center">
                      <span className="ml-1">
                        🟩🟥🟥🟥🟥🟥🟥🟥🟥🟥
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                    <Link className="w-full py-3 flex-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href={"/entities/" + caseStudy.uid}>
                      View
                    </Link>
                    <Link className="w-full py-3 px-4 flex-2 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" href={"/entities/" + caseStudy.uid}>
                      Read More
                    </Link>
                    <div className="w-full py-3 px-4 flex-1 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 cursor-pointer">
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
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Entities;
