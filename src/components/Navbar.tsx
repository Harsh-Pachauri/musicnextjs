'use client'
// whenever there is UI manipulation
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
          <Link className="flex space-x-4" href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
          </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/basic">Basic Music Courses</HoveredLink>
            <HoveredLink href="/courses/advanced">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses/songwriting">Song Writing</HoveredLink>
            <HoveredLink href="/courses/production">Music Production</HoveredLink>
          </div>
        </MenuItem>

          <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact Us">
        </MenuItem>
          </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
