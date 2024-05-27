import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import Link from "next/link";

const Page  = () => {
    return (
        <>
            <Navigation />
            <main id="content">
                <div className="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
                    <h1 className="mb-2 text-2xl font-bold md:text-4xl dark:text-white">Cookie Consent Policy</h1>
                    <p className="text-gray-700 dark:text-neutral-400">Last updated: May 27, 2024</p>
                </div>

                <div className="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
                    <div className="grid gap-4 md:gap-8">
                        <div>
                            <p className="mb-8 dark:text-neutral-400 text-xl">Nikeshh.com ("we", "us", or "our") uses cookies and similar tracking technologies to enhance your experience on our website. This Cookie Consent Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">What Are Cookies?</h2>
                            <p className="mb-5 dark:text-neutral-400">Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences over a period of time, making your next visit easier and more useful to you.</p>

                            <h1 className="text-lg font-semibold mb-2 dark:text-white"> Types of Cookies We Use</h1>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Essential Cookies</h2>
                            <p className="mb-5 dark:text-neutral-400">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. Without these cookies, some parts of the website may not work correctly.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Performance Cookies</h2>
                            <p className="mb-5 dark:text-neutral-400">These cookies collect information about how visitors use our website, such as which pages are visited most often and any error messages received. This helps us improve the way our website works and provide a better user experience.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Functional Cookies</h2>
                            <p className="mb-5 dark:text-neutral-400">These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They can also be used to remember changes you have made to text size, fonts, and other customizable parts of web pages.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Advertising and Targeting Cookies</h2>
                            <p className="mb-5 dark:text-neutral-400">These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an ad and to help measure the effectiveness of advertising campaigns. They remember that you have visited a website and this information may be shared with other organizations, such as advertisers.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Analytics Cookies</h2>
                            <p className="mb-5 dark:text-neutral-400">We use third-party analytics services like Google Analytics to collect and analyze information about how our website is used. These cookies help us understand how visitors engage with our site and improve its performance.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">How We Use Cookies</h2>
                            <p className="mb-5 dark:text-neutral-400">We use cookies to:</p>
                            <ul className="mb-5 dark:text-neutral-400">
                                <li>Ensure the website functions correctly.</li>
                                <li>Store your preferences and settings.</li>
                                <li>Analyze website performance and visitor statistics.</li>
                                <li>Deliver targeted advertising.</li>
                                <li>Improve your overall browsing experience.</li>
                            </ul>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Managing Your Cookie Preferences</h2>
                            <p className="mb-5 dark:text-neutral-400">You have the right to decide whether to accept or reject cookies. You can set your cookie preferences by adjusting your browser settings. Most web browsers allow you to control cookies through their settings. Here are some links to help you manage cookies on popular browsers:</p>
                            <ul className="mb-5 dark:text-neutral-400">
                                <li><Link href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop" target="_blank">Google Chrome</Link></li>
                                <li><Link href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank">Mozilla Firefox</Link></li>
                                <li><Link href="https://support.apple.com/en-ca/guide/safari/sfri11471/mac" target="_blank">Apple Safari</Link></li>
                                <li><Link href="https://www.microsoft.com/en-us/edge?ep=313&form=MA13M0&es=40" target="_blank">Microsoft Edge</Link></li>
                            </ul>
                            <p className="mb-5 dark:text-neutral-400">Please note that if you choose to reject cookies, you may not be able to use the full functionality of our website.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Changes to This Cookie Policy</h2>
                            <p className="mb-5 dark:text-neutral-400">We may update our Cookie Consent Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Contact Us</h2>
                            <p className="mb-5 dark:text-neutral-400">If you have any questions about our use of cookies or this Cookie Consent Policy, please contact us via live chat on our website.</p>
                       
                            <p className="mb-5 dark:text-neutral-400">By using our website, you consent to our use of cookies in accordance with this Cookie Consent Policy.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page;