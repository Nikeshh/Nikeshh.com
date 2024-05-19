import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import Skills from "../_components/skills";
import { getSkills } from "@/lib/queries";

export default async function Page() {
  const skills = await getSkills();

  return <>
    <Navigation />
    <Skills skills={skills} inlineElement={false} />
    <Footer />
  </>
}
