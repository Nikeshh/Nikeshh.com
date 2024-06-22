import './style.css';
import { getBlogs, getProjects, getSkills, getTestimonials } from '@/lib/queries';
import Main from './main';

const Page = () => {

    const skills = getSkills();
    const projects = getProjects();
    const blogs = getBlogs();
    const testimonials = getTestimonials();

    return (
        <Main skills={skills} projects={projects} blogs={blogs} testimonials={testimonials} />
    )
}

export default Page;