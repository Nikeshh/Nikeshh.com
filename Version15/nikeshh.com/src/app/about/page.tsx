import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage } from "@prismicio/next";
import Navigation from "@/components/layout/navigation";
import NotificationC from "@/components/layout/notification";
import Footer from "@/components/layout/footer";

type Params = { uid: string };

const Page = async () => {
    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    const client = createClient();
    const page = await client
        .getByUID("about", "about")
        .catch(() => notFound());

    return (
        <>
          {/*<NotificationC />*/}
          <Navigation />
          <Bounded as="article">
              <div className="relative grid place-items-center text-center">
                  <StarGrid />
                  <h1 className="text-7xl font-medium">
                      <PrismicText field={page.data.company} />
                      <p className="text-lg text-yellow-500">About Me</p>
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
              <div className="mx-auto">
                <SliceZone slices={page.data.slices} components={components} />
              </div>
          </Bounded>
          <Footer/>
        </>
    );
}

export default Page;
