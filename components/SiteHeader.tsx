import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 left-0 w-full">
      <MainNav />
      <MobileNav />
    </header>
  );
}
