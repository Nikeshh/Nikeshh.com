import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

const Page  = () => {
    return (
        <>
            <Navigation />
            <main id="content">
                <div className="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
                    <h1 className="mb-2 text-2xl font-bold md:text-4xl dark:text-white">Privacy Policy</h1>
                    <p className="text-gray-700 dark:text-neutral-400">Last updated: May 27, 2024</p>
                </div>

                <div className="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
                    <div className="grid gap-4 md:gap-8">
                        <div>
                            <p className="mb-8 dark:text-neutral-400 text-xl">Welcome to Nikeshh.com. This Privacy Policy outlines our practices regarding the collection, use, and sharing of personal information through our digital products and services. By using our services, you agree to the collection and use of information as described in this policy.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Information Collected</h2>
                            <p className="mb-5 dark:text-neutral-400">At Nikeshh.com, your privacy is our priority. We do not share, sell, or rent your personal information to third parties. All data stored via our services is owned by you or your business and can be transferred or deleted upon request, though this may limit access to certain content.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Account Information</h2>
                            <p className="mb-5 dark:text-neutral-400">Creating an account at Nikeshh.com requires providing personal details such as your name, email address, and password, necessary for account setup and access.</p>
                        
                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Payment Information</h2>
                            <p className="mb-5 dark:text-neutral-400">For payment processing, we use Stripe (stripe.com). During transactions, Stripe may ask for personal details like your name, address, email, and credit card information. Stripe's privacy policy, available at Stripe's Privacy Terms, governs their data handling. Nikeshh.com is not responsible for Stripe's practices.</p>
                        
                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Usage Information</h2>
                            <p className="mb-5 dark:text-neutral-400">We collect data on user interactions with Nikeshh.com, including usage patterns and device information, to improve our platform.</p>

                            <h1 className="text-lg font-semibold mb-2 dark:text-white">Legal Compliance and General Use</h1>
                            <p className="mb-5 dark:text-neutral-400">Nikeshh.com may release personal information if required by law, such as in response to a court order or fraud investigation. We also use aggregated, non-identifiable user data for general analytical purposes.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Data Sharing and Disclosure</h2>
                            <p className="mb-5 dark:text-neutral-400">We use third-party services like Google Analytics for analytics purposes. These parties access your data only for performing tasks on our behalf and are obligated not to disclose or use it for other purposes.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">International Data Transfer</h2>
                            <p className="mb-5 dark:text-neutral-400">Your information may be transferred to and maintained on computers outside your jurisdiction. Our primary servers are located in the US.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Your Rights</h2>
                            <p className="mb-5 dark:text-neutral-400">You have the right to access, correct, and request the deletion of your personal data, with certain limitations on access to our products and services.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Data Retention</h2>
                            <p className="mb-5 dark:text-neutral-400">We retain personal data as long as your account is active or as needed to provide services.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Security</h2>
                            <p className="mb-5 dark:text-neutral-400">We are committed to the security of your data, implementing encryption and regular security standards.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Children's Privacy</h2>
                            <p className="mb-5 dark:text-neutral-400">Nikeshh.com is intended for use by individuals who have reached the legal age in their jurisdiction and reside in regions where such use is permissible. We do not knowingly collect data from individuals under the legal age.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Changes to Privacy Policy</h2>
                            <p className="mb-5 dark:text-neutral-400">We may modify this policy at any time. Continued use of Nikeshh.com signifies acceptance of these changes.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Contact Us</h2>
                            <p className="mb-5 dark:text-neutral-400">For questions about this Privacy Policy or our privacy practices, contact us via live chat on our website.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Agreement</h2>
                            <p className="mb-5 dark:text-neutral-400">By using Nikeshh.com products and services, you acknowledge your understanding and agreement to this Privacy Policy.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Privacy Changes</h2>
                            <p className="mb-5 dark:text-neutral-400">If we change our privacy policy we will post those changes on this page. Registered users will be sent an email that outlines changes made to the privacy policy.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page;