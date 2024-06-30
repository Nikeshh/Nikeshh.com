import './style.css';
import { getBlogs, getProjects, getSkills, getTestimonials } from '@/lib/queries';
import Main from './main';

const Page = async () => {

    const skills = getSkills();
    const projects = getProjects();
    const blogs = await getBlogs();
    const testimonials = getTestimonials();

    return (
        <main className="w-full">
            <Main skills={skills} projects={projects} blogs={blogs} testimonials={testimonials} />
        </main>
    )
}

export default Page;