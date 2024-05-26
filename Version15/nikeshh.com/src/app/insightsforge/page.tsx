import { Metadata } from "next";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

export async function generateMetadata(): Promise<Metadata> {

  const title = "";
  const description = "";

  return {
    title: title,
    description: description
  };
}

export default async function Index() {
  return <>
    <Navigation />
    <Footer />
  </>
}
