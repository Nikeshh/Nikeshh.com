import './style.css';
import { getProjects, getSkills, getTestimonials } from '@/lib/queries';
import Main from './main';

const Page = () => {

    const skills = getSkills();
    const projects = getProjects();
    const testimonials = getTestimonials();

    return (
        <Main skills={skills} projects={projects} testimonials={testimonials} />
    )
}

export default Page;