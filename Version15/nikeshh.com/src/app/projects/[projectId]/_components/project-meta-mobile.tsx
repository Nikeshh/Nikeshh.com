"use client";

import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { ArrowRightSquare, Lock } from "lucide-react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { User2 } from 'lucide-react';

export function ProjectMetaMobile() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="right" className="!px-0">
          <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <div className="px-1 py-4 border-b">
                <h3 className="underline">Tags</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Open source', 'Full Stack Development'].map((a) => {
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
                <div className="mt-6 px-1 py-4 border-b">
                  <h3>Project Type: Open Source</h3>
                </div>
                <div className="mt-6 px-1 py-4 border-b">
                  <h3>Team Members</h3>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between gap-y-3">
                      <div className='flex gap-3 items-center'>
                        <Avatar className="w-8 h-8">
                          <AvatarImage alt="user" />
                          <AvatarFallback className="bg-primary text-sm text-white">
                            <User2 size={14} />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p>Nikeshh Vijayabaskaran</p>
                          <span className="text-xs">Team Lead</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-slate-600">72 commits</p>
                        <p className="text-sm text-slate-600">last 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-1 py-4 border-b">
                  <h3>Comments</h3>
                  <div className="mt-3 flex flex-col justify-center items-center text-center gap-2">
                    <Lock className="h-28 w-28 text-gray-500" />
                    <p className="text-gray-500">Locked currently due to heavy network load</p>
                  </div>
                </div>
                <div className="mt-6 px-1 py-4">
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
        </SheetContent>
      </Sheet>
    </>
  );
}
