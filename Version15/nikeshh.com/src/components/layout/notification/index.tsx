import CustomModal from '@/components/global/custom-modal';
import { useModal } from '@/providers/modal-provider'
import Link from 'next/link';

const NotificationC = () => {
    const { setOpen } = useModal();

    return (
        <div className="bg-indigo-900 text-center py-4 px-6 lg:px-4 cursor-pointer">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none md:rounded lg:rounded-full flex lg:inline-flex" role="alert" onClick={() => {
                setOpen(
                    <CustomModal
                        title="⚠️ Under Construction"
                        subheading="Should be available in 2-3 days"
                    >
                        <p>You can track the progress or contribute @<Link href="https://github.com/Nikeshh/Nikeshh.com/tree/main/Version15/nikeshh.com" className="underline">Github</Link></p>
                    </CustomModal>
                )
            }}>
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">SAAS Alert</span>
                <span className="font-semibold mr-2 text-left flex-auto">Website builder for agencies</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </div>
    );
};

export default NotificationC