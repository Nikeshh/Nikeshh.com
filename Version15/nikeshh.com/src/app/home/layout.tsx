import type { Metadata } from "next";
import { getTestimonials, getSkills, getServices, getProjects, getBlogs } from "@/lib/queries";
import Home from "./page";

export const metadata: Metadata = {
  title: "Home",
  description: "Nikeshh Vijayabaskaran",
};

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const testimonials = await getTestimonials();
    const skills = await getSkills();
    const services = await getServices();
    const projects = await getProjects();
    const blogs = await getBlogs();

    return (
        <>
            <Home
                testimonials={testimonials}
                skills={skills}
                services={services}
                projects={projects}
                blogs={blogs.slice(0, 3)}
            />
        </>
    );
}