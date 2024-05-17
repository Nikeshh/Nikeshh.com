import Footer from "@/components/layout/footer";
import Navigation from "@/components/layout/navigation";

const Page  = () => {
    return (
        <>
            <Navigation />
            <main id="content">
                <div className="md:max-w-screen-sm text-center px-4 sm:px-6 lg:px-8 pt-24 pb-6 mx-auto">
                    <h1 className="mb-2 text-2xl font-bold md:text-4xl dark:text-white">Cookie Consent</h1>
                    <p className="text-gray-700 dark:text-neutral-400">Last updated: January 31, 2024</p>
                </div>

                <div className="md:max-w-screen-sm lg:max-w-[992px] px-4 sm:px-6 lg:px-8 pb-12 md:pt-6 sm:pb-20 mx-auto">
                <div className="grid gap-4 md:gap-8">
                    <div>
                    <p className="mb-8 dark:text-neutral-400 text-xl">Welcome to Nikeshh Vijayabaskaran. This Cookie Consent outlines our practices regarding the collection, use, and sharing of personal information through our digital products and services. By using our services, you agree to the collection and use of information as described in this policy.</p>

                    <h2 className="text-lg font-semibold mb-2 dark:text-white">Information Collected</h2>
                    <p className="mb-5 dark:text-neutral-400">At Nikeshh.com, your privacy is our priority. We do not share, sell, or rent your personal information to third parties. All data stored via our services is owned by you or your business and can be transferred or deleted upon request, though this may limit access to certain content.</p>

                    </div>
                </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Page;