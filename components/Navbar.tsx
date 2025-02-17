import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navbarMenu/navbar";
import UserButton from "@/components/ui/navbarMenu/userButton";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center p-4 bg-indigo-700 w-full h-16 shadow-sm">
      <div className="flex justify-center w-full">
        <NavigationMenu className="text-indigo-100 text-xl gap-4">
          <NavigationMenuItem className="list-none">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none">
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink>Dashboard</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none">
            <Link href="/whatsApp" legacyBehavior passHref>
              <NavigationMenuLink>WhatsApp</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none">
            <Link href="/dev" legacyBehavior passHref>
              <NavigationMenuLink>Manutenção</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="list-none">
            <Link href="/pagamento" legacyBehavior passHref>
              <NavigationMenuLink>Pagamento</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
      <div className="flex justify-center w-20 m-5 text-indigo-100">
        <NavigationMenu className="text-xl p-0 m-0">
          <NavigationMenuItem className="list-none flex items-center">
            <UserButton />
          </NavigationMenuItem>
        </NavigationMenu>
      </div>
    </div>
  );
}
