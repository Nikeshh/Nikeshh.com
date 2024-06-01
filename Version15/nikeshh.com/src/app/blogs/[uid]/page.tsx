import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import { blogs } from "../data";
import Image from "next/image";
import parse from 'html-react-parser';
import './style.css';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {

  const uid = params.uid;
  const datas = blogs.filter((e) => e.uid == uid);
  if (!datas || datas.length < 1) {
    return (
      <p>Not found</p>
    )
  }
  const data = datas[0];

  return (
    <>
      <Navigation />
      <div className='px-4 md:px-24 py-8'>
          <main>
              <div id="breadcrumb" className='flex gap-2 mt-8 md:mt-14 text-sm text-gray-300'>
                  <p>Home</p>
                  <p>&gt;</p>
                  <p>Blog</p>
                  <p>&gt;</p>
                  <p>AI</p>
              </div>
              <section id="heading" className='mt-8'>
                  <h1 className="text-xl md:text-7xl font-semibold">{data.title}</h1>
                  <p className='mt-4 text-gray-400'>MAY 31, 2024</p>
              </section>
              <section id="content" className='mt-8 w-full relative rich'>
                  <div className="md:w-3/5 flex flex-col gap-8">
                      <Image 
                          src="/nikeshhcodes-thumbnail.jpg" 
                          alt='Blog image'
                          className='rounded-lg'
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: '400px' }}
                      />
                      <div className="rich-text">
                        {parse(data.content)}
                      </div>
                  </div>
              </section>
          </main>
      </div>
      <Footer />
    </>
  );
}
