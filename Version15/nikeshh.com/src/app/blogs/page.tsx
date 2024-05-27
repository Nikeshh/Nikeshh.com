import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Bounded from "@/components/Bounded";
import Image from "next/image";
import { blogs } from "./data";
import Link from "next/link";
import clsx from "clsx";

const Page = () => {
  return <>
    <Navigation />
    <Bounded>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        Blogs
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        Some of my writings!
      </div>

      <div className="mt-20 grid gap-16">
        {blogs.map(
          (blog, index) =>
            blog && (
              <div
                key={blog.uid}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <div className="col-span-1 flex flex-col justify-center gap-4">
                  <h3 className="text-4xl">
                    {blog.title}
                  </h3>
                  <p className="text-lg text-yellow-500">
                    {blog.tag}
                  </p>
                  <div className="max-w-md">
                    {blog.description}
                  </div>

                  <Link
                    href={`/blogs/${blog.uid}`}
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
                <Image 
                  src="/nikeshhcodes-thumbnail.jpg" 
                  alt="blog image"
                  width={640}
                  height={340}
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
    <Footer />
  </>
}

export default Page;