import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";
import Link from "next/link";

const Page  = () => {
    return (
        <>
            <Navigation />
            <main id="content">
                <div className="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
                    <h1 className="mb-2 text-2xl font-bold md:text-4xl dark:text-white">Terms and Conditions</h1>
                    <p className="text-gray-700 dark:text-neutral-400">Last updated: May 27, 2024</p>
                </div>

                <div className="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
                    <div className="grid gap-4 md:gap-8">
                        <div>
                            <p className="mb-8 dark:text-neutral-400 text-xl">Welcome to Nikeshh.com (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). Our website (nikeshh.com), offers 100% digital products and services under these terms and conditions. By accessing or using our site, you agree to be bound by these terms.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">General Terms</h2>
                            <p className="mb-5 dark:text-neutral-400">Use of Our Service: By accessing and placing an order with Nikeshh.com, you confirm your agreement to our digital-only product policy. We&apos;re not liable for any indirect damages arising from your use or inability to use our site. We may change prices and policies at any time and will notify you of significant changes through email.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">User Account</h2>
                            <p className="mb-5 dark:text-neutral-400">Account Responsibility: For some services, an account is required. Keep your account details confidential. Providing false information may lead to account termination.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Products and Services</h2>
                            <p className="mb-5 dark:text-neutral-400">Digital Product Delivery: All our products are 100% digital and delivered electronically. They can be accessed on your account page. We aren&apos;t responsible for delays outside our control. If technology issues prevent access, you&apos;ll find your purchases on the account page.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Order Cancellation</h2>
                            <p className="mb-5 dark:text-neutral-400">Cancellation Rights: We may cancel orders at any time for any reason. If this happens, we&apos;ll notify you and issue a refund.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Third-Party Links</h2>
                            <p className="mb-5 dark:text-neutral-400">External Sites: Our website might have links to third-party sites. We aren&apos;t responsible for their content or practices. Please review their terms.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Product Availability and Errors</h2>
                            <p className="mb-5 dark:text-neutral-400">Information Accuracy: We try to provide up-to-date information about our 100% digital products but errors in pricing and availability may occur. We reserve the right to correct any errors without liability.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Data Rights</h2>
                            <p className="mb-5 dark:text-neutral-400">Data Modification and Deletion: For details on how we handle data modification, deletion, and protect your privacy, please refer to our <Link href={"/privacy-policy"}>Privacy Policy</Link>.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Changes to Terms</h2>
                            <p className="mb-5 dark:text-neutral-400">Liability Cap: We&apos;re not liable for data loss, lost profits, or any damages from using our site.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Governing Law and Jurisdiction</h2>
                            <p className="mb-5 dark:text-neutral-400">Legal Framework: These terms are governed by applicable federal laws and regulations. Any disputes arising from or relating to the terms shall be subject to the exclusive jurisdiction of the competent courts as determined by applicable law.</p>

                            <h2 className="text-lg font-semibold mb-2 dark:text-white">Contact Information</h2>
                            <p className="mb-5 dark:text-neutral-400">Queries: If you have questions about these terms, contact us via chat from our website.</p>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page;