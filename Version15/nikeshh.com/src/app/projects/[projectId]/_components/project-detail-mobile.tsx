"use client";

import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  right?: boolean
}

export function ProjectDetailMobile({ right }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side={right ? 'right' : 'left'} className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="space-y-1">
                <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
                  Nikeshh.
                </h2>
              </div>
              <div className="mt-6 px-4">
                <h3 className="underline">Problem</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maxime omnis placeat, et quidem nostrum exercitationem dolore inventore rem, aut laborum veniam quo. Sunt, magni voluptatem! Nulla minima in tenetur!</p>
              </div>
              <div className="mt-6 px-4">
                <h3 className="underline">Solution</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores cupiditate, perferendis alias quaerat eos. Veniam eaque reprehenderit quibusdam praesentium quisquam beatae! Aliquam accusamus sunt cum voluptatum, doloremque vitae cumque.</p>
              </div>
              <div className="mt-6 px-4">
                <h3 className="underline">Technologies</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['SAAS', 'Full Stack', 'UI/UX', 'Android', 'iOS'].map((a) => {
                    return (
                      <Badge variant='default' key={a}>
                        <Link
                          className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                          href="#"
                        >
                          <span className='text-white transition'>
                            {a}
                          </span>
                        </Link>
                    </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
