import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import Projects from "../portfolio/_components/projects";
import { getProjects } from "@/lib/queries";

export default async function Page() {
  const projects = await getProjects();

  return <>
    <Navigation />
    <Projects projects={projects} inlineElement={false} />
    <Footer />
  </>
}
