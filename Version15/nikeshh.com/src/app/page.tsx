'use client'

import React, { useEffect } from 'react'
import { toast } from "sonner"

export default function Home() {
  useEffect(() => {
    toast("New Project has been added", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "View",
        onClick: () => console.log("Undo"),
      },
    })
  }, []);

  return (
    <div className='flex justify-center h-screen w-full mt-20'>
      Hi
    </div>
  );
}
