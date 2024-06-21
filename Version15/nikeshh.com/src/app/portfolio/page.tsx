import './style.css';
import { getTestimonials } from '@/lib/queries';
import Main from './main';

const Page = () => {

    const testimonials = getTestimonials();

    return (
        <Main testimonials={testimonials} />
    )
}

export default Page;