"use client"

import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import NotificationC from "@/components/layout/notification";

const Page = () => {

    console.log("👋 Hi! It looks like you are trying to explore the code. You can directly work with me on any of the listed projects. Feel free to submit your details through the contact form or directly mail me at nikeshhbaskaran01@gmail.com. Cheers 🍻");

    return (
        <>
            <NotificationC />
            <Navigation />
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5">
                <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
                    <h1 className="font-bold text-2xl md:text-[50px] md:leading-none">
                        About Me
                    </h1>
                </div>
            </div>
            <div className="container pt-12 md:pt-22 relative flex flex-col justify-center flex-wrap md:flex-nowrap gap-5">
                <p>Code, Coffee and Crazy Creativity: The Nikeshh Experience!</p>
                <p>Zakity! Zikaty! Experience</p>
                <h2 className="text-xl underline mt-4">Time to create</h2>
                <p>Keep Calm And Bring Your <span className="underline">Vision and Ideas to Reality</span></p>
                <p>Hey there, fellow digital explorers!</p>
                <p>I am Nikeshh, your not-so-typical Full Stack Software Developer and Digital Dynamo. I am here to turn your wildest digital dreams into reality, fuelled by gallons of coffee and a dash of pure, unadulterated madness.</p>
                <p>My toolkit includes website wizardry, SEO sorcery, SAAS spells, app alchemy, and custom software secrets. Ready to embark on this wild ride of innovation?</p>
                <p>I charge ahead with an unwavering passion, fueled by the profound belief that education should be a universal right, freely accessible to all. When you become a client or purchase my product, you re not just making a transaction; you are embracing and supporting my heartfelt vision.</p>
                <h2 className="text-xl underline mt-4">Built With Love</h2>
                <p>I make amazing digital products for your business, generate leads and scale them</p>
                <p>Unlock the potential of your business with our <span className="underline font-bold">extraordinary digital products.</span> Specializing in creating solutions that not only drive leads but also fuel the growth and expansion of your company, i am here to take your business to new heights, one lead at a time, and help you scale your success.</p>
                <h2 className="text-xl underline mt-4">Hold On</h2>
                <p>What I Do?</p>
                <p>I absolutely love creating digital products that serve both businesses (B2B) and everyday consumers (B2C), balancing the need for logic and emotion. My goal is to make products that not only work well for companies but also connect with people on a personal level. I am all about delivering solutions that both make sense in the business world and touch the hearts of those who use them.</p>
                <p className="underline">Think. Make. Solve.</p>
                <h2 className="text-xl underline mt-4">Brining The World To You</h2>
                <ul>
                    <li>📌 300+ Projects Completed</li>
                    <li>📌 120+ Happy Clients</li>
                    <li>📌 10k+ Qualified Leads Generated</li>
                    <li>📌 5-7% ROI achieved in lead generation</li>
                </ul>
                <p>Too good to be true? Yes, i have been in this game of digital marketing and software development for more than a decade and hence the above numbers reflect that experience.</p>
                <h2 className="text-xl underline mt-4">Considerations...2x value 🚀</h2>
                <p>When developing a product or analyzing a business, it iss essential to consider both the logical forefront and the emotional side. These two aspects complement each other and play a significant role in ensuring the success of any endeavour.</p>
                <p>Logical analysis</p>
                <ul>
                    <li>📌 Market Research</li>
                    <li>📌 Cost-Benefit Analysis</li>
                    <li>📌 Product Development</li>
                    <li>📌 Efficiency and Operations</li>
                    <li>📌 Regulatory and Compliance</li>
                </ul>
                <p>Emotional Analysis</p>
                <ul>
                    <li>📌 Branding and Identity</li>
                    <li>📌 Customer Experience</li>
                    <li>📌 Marketing and Advertising</li>
                    <li>📌 Design and Aesthetics</li>
                    <li>📌 Employee Engagement</li>
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default Page