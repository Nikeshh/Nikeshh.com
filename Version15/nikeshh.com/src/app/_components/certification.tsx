import Link from "next/link";

type Props = {
    headline: string,
    title: string,
    id: string,
    link: string,
    badges: Array<string>
}

const Certification = ({ headline, title, id, link, badges }: Props) => {
    return (
        <article
            className="relative hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
        >
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6 dark:bg-gray-900">
            <p className="block text-xs text-gray-500 dark:text-gray-400">
                {headline}
            </p>

            <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                {title}
            </h3>
            </a>

            {id && (
                <p>Credential ID: {id}</p>
            )}

            <Link href={link} target='_blank' className="absolute right-4 top-1 text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Check Credential
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
                {badges.map((badge, index) => {
                    return (
                        <span
                            key={index}
                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100"
                        >
                            {badge}
                        </span>
                    );
                })}
            </div>
        </div>
        </article>
    );
}

export default Certification;