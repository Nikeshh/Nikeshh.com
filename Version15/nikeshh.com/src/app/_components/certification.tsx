import Link from "next/link";
import Image from 'next/image';

type Props = {
    headline: string,
    title: string,
    id: string,
    link: string,
    badges: Array<string>,
    imageUrl: string
}

const Certification = ({ headline, title, id, link, badges, imageUrl }: Props) => {
    return (
        <div key={id} className="group rounded-xl overflow-hidden">
            <div className="sm:flex">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                    <Image width={100} height={100} className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={imageUrl} alt="Image Description" />
                </div>

                <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {title}
                    </h3>
                    {headline && (
                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                            {headline}
                        </p>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1">
                        {badges.map((badge, index) => {
                            return (
                                <span
                                    key={index}
                                    className="whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs text-blue-600 bg-transparent border border-slate-500"
                                >
                                    {badge}
                                </span>
                            );
                        })}
                    </div>
                    {link && (
                        <Link href={link} target="_blank" className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline text-sm">
                            Check Credential
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Certification;