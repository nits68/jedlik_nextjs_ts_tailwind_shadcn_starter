"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";

const mainNavItems = [
  {
    route: "/",
    title: "Page1",
  },
  {
    route: "/page2",
    title: "Page2",
  },
  {
    route: "/page3",
    title: "Page3",
  },
];
{
  /* Get the current route */
}

export default function MainNav() {
  const currentRoute = usePathname();
  return (
    <div className="grid grid-cols-2">
      <div className="p-2 hidden gap-2 md:flex justify-start bg-amber-400">
        {mainNavItems.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className={buttonVariants({ variant: currentRoute == item.route ? "default" : "secondary" })}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="p-2 hidden gap-2 md:flex justify-end bg-amber-400">
        <Button variant="default">Hello, world!</Button>
      </div>
    </div>
  );
}
