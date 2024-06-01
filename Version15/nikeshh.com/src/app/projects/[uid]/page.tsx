import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import parse from 'html-react-parser';
import '../style.css';
import { getProject } from "@/lib/queries";
import Link from "next/link";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {

  const uid = params.uid;
  const data = getProject(uid);

  return (
    <>
      <Navigation />
      <StarGrid />
      <Bounded as="article">
        <div className="relative grid place-items-center text-center">
          <h1 className="text-4xl font-medium">
            {data.name}
            <p className="text-lg text-yellow-500">
              {" ◦ "}
              {data.tags.map((tag, index) => (
                <span key={index}>
                  {tag} {" ◦ "}
                </span>
              ))}
            </p>
          </h1>
          <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
            {data.subtitle}
          </p>
          <Image 
            src={data.imageUrl}
            alt="product image"
            width={640}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-4">
          <p>Check out: <Link href={data.link} target="_blank" className="underline hover:text-blue-500">{data.linkType}</Link></p>
        </div>
        <div className="mt-4 rich-text flex justify-center">
          {parse(data.content)}
        </div>
        <div className="flex justify-center mt-4">
          <p>Check out: <Link href={data.link} target="_blank" className="underline hover:text-blue-500">{data.linkType}</Link></p>
        </div>
      </Bounded>
      <Footer />
    </>
  );
}
