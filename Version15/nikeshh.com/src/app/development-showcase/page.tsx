import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import Projects from "@/app/_components/projects";
import { getProjects } from '@/lib/queries';

const DevelopmentShowcase = async () => {

    const projects = await getProjects();

    return (
        <>
            <Navigation />
            <Projects projects={projects} inlineElement={false} defaultView={"Development Showcase"} />
            <Footer />
        </>
    );
}

export default DevelopmentShowcase;