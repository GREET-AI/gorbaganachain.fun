"use client";

import Image from "next/image";
import {
  Home,
  LineChart,
  Users,
  MoreHorizontal,
  Twitter,
  Instagram,
  Youtube,
  Send,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/gorbagana-logo.png" width="32" height="32" alt="Gorbagana" className="rounded-full" />
            <span className="">Gorbagana</span>
          </a>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <LineChart className="h-4 w-4" />
              Livestreams
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Profile
            </a>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  onClick={(e) => e.preventDefault()} // Prevent navigation
                >
                  <MoreHorizontal className="h-4 w-4" />
                  More
                </a>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-9 text-muted-foreground">
                <nav className="grid gap-2 text-sm">
                  <a href="#" className="hover:text-primary">PumpSwap</a>
                  <a href="#" className="hover:text-primary">How it works</a>
                  <a href="#" className="hover:text-primary">DMCA Policy</a>
                  <hr className="my-2 border-muted-foreground/20" />
                  <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-primary"><Twitter className="h-4 w-4" /></a>
                    <a href="#" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
                    <a href="#" className="hover:text-primary"><Youtube className="h-4 w-4" /></a>
                    <a href="#" className="hover:text-primary"><Send className="h-4 w-4" /></a>
                  </div>
                </nav>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>
        <div className="mt-auto p-4">
            <Button size="sm" className="w-full bg-gorbagana-gradient text-white">
                <PlusCircle className="h-4 w-4 mr-2" /> Create Coin
            </Button>
        </div>
      </div>
    </div>
  );
} 