import { Metadata } from "next";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  return (
    <>
      <Navigation />
      <StarGrid />
      <Bounded as="article">
        <div className="relative grid place-items-center text-center">
        </div>
        <div className="mx-auto ml-0">
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

  const title = "";
  const description = "";

  return {
    title: title,
    description: description,
  };
}
