"use client";

import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function ShowNavbar() {
  const pathname = usePathname();

  const paths = ["/login", "/register"];


  return (
    <main className="p-0 m-0">{!paths.includes(pathname) && <Navbar />}</main>
  );
}
