import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRightSquare, Lock } from "lucide-react";
import Link from "next/link";

export default function ServiceMeta() {
  return (
    <nav
      className={cn(`relative hidden h-screen pt-16 lg:block w-96`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <div className="px-4 py-4 border-b">
              <h3 className="underline">Tags</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Open source', 'Full Stack Development'].map((a) => {
                  return (
                    <Badge variant='default' key={a}>
                      <a
                        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                        href="#"
                      >
                        <span className='text-white transition'>
                          {a}
                        </span>
                      </a>
                    </Badge>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 px-4 py-4 border-b">
              <h3>Service Type: Pay per task</h3>
            </div>
            <div className="mt-6 px-4 py-4 border-b">
              <h3>Comments</h3>
              <div className="mt-3 flex flex-col justify-center items-center text-center gap-2">
                <Lock className="h-28 w-28 text-gray-500" />
                <p className="text-gray-500">Locked currently due to heavy network load</p>
              </div>
            </div>
            <div className="mt-6 px-4 py-4">
              <div className="flex justify-between">
                <h3>View More</h3>
                <ArrowRightSquare className="text-gray-500" />
              </div>
              <div className="mt-3 flex flex-col justify-center gap-2">
                <Link href={'#'} className="hover:text-blue-600 underline">Lorem ipsum dolor sit amet consectetur.</Link>
                <Link href={'#'} className="hover:text-blue-600 underline">Lorem ipsum dolor sit amet consectetur.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
