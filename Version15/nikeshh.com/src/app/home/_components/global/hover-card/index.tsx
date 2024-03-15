"use client"

import { Info } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
    title: string;
    content: string;
    subtext: string;
}

const HoverCardC = ({ title, content, subtext } : Props) => {
    const [hoverCardOpen, setHoverCardOpen] = useState(false);

    return (
        <HoverCard open={hoverCardOpen}>
            <HoverCardTrigger asChild>
                <Button variant="link" className="text-[16px] md:text-2xl pl-0" onClick={() => setHoverCardOpen(true)}><u>{title}</u></Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarFallback>N</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <div className="flex justify-between">
                            <h4 className="text-sm font-semibold">@nikeshh</h4>
                            <Button variant="outline" onClick={() => setHoverCardOpen(false)}>x</Button>
                        </div>
                        <p className="text-sm">
                            Achieving perfection involves adding more value than merely pursuing flawlessness in the end.
                        </p>
                        <div className="flex items-center pt-2">
                            <Info className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                My core principle
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};

export default HoverCardC;