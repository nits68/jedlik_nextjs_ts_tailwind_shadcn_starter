"use client";

import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const mobileItems = ["Menu1", "Menu2", "Menu3"];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="outline"  size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-32">
        <SheetTitle className="text-center">Menu</SheetTitle>
        <div className="flex flex-col items-stretch">
          {mobileItems.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => {
                setOpen(false);
              }}
            >
              {item}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
