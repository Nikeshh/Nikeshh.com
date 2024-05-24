"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomModal from "@/components/global/custom-modal";
import { useModal } from "@/providers/modal-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, User2 } from "lucide-react";
import Link from "next/link";

type Props = {
  blogs: {
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
  }[];
};

const Blogs = ({ blogs }: Props) => {
  const { setOpen } = useModal();

  if (blogs && blogs.length > 0) {
    return (
      <section
        id="blogs"
        className="container pt-12 md:pt-44 relative flex flex-col items-center justify-center"
      >
        <p>BLOG</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative mb-4">
          <h2 className="font-bold text-xl md:text-[40px] md:leading-none text-center">
            TO LEARN
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
          {blogs.map((blog, index) => {
            return (
              <article key={index} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                <Image
                  src={blog.imageUrl}
                  alt="blog image"
                  width={250}
                  height={250}
                  className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
                  <time
                    dateTime="2022-10-10"
                    className="block text-xs text-gray-500 dark:text-gray-400"
                  >
                    10th Oct 2023
                  </time>

                  <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                    {blog.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                    {blog.subtitle}
                  </p>
                  <Link
                    href={`/blogs/${blog.title.toLowerCase().replace(/ /g, "-").replace(/\//g, "").replace(/\(/g, "").replace(/\)/g, "").replace(/\:/g, "").replace(/\&/g, "-")}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-white"
                  >
                    Find out more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-4 md:mt-6 w-full text-center">
          <Link
            className="hover:text-blue-600 underline cursor-pointer"
            href="/blogs"
          >
            learn more.
          </Link>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Blogs;
