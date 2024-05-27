import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { blogs } from "../data";
import Image from "next/image";
import parse from 'html-react-parser';
import './style.css';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {

  const uid = params.uid;
  const datas = blogs.filter((e) => e.uid = uid);
  if (!datas || datas.length < 1) {
    return (
      <p>Not found</p>
    )
  }
  const data = datas[0];

  return (
    <>
      <Navigation />
      <StarGrid />
      <Bounded as="article">
        <div className="relative grid place-items-center text-center">
          <h1 className="text-4xl font-medium">
            {data.title}
            <p className="text-lg text-yellow-500">
              {data.tag}
            </p>
          </h1>
          <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300">
            {data.description}
          </p>
          <Image 
            src="/nikeshhcodes-thumbnail.jpg" 
            alt="About me image"
            width={640}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="mx-auto ml-0 mt-4 rich-text">
          {parse(data.content)}
        </div>
      </Bounded>
      <Footer />
    </>
  );
}
