import './style.css';
import { getSkills, getTestimonials } from '@/lib/queries';
import Main from './main';

const Page = () => {

    const skills = getSkills();
    const testimonials = getTestimonials();

    return (
        <Main skills={skills} testimonials={testimonials} />
    )
}

export default Page;