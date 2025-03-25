import { CircleUserRound } from "lucide-react";
import { useSession } from "next-auth/react";
import { LoginButton, LogoutButton } from "@/app/auth";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function UserButton() {
  const { data: session } = useSession();

  return session ? (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center space-x-2">
          <CircleUserRound className="mr-2" />
          <span>{session.user?.name}</span>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Hello <span>{session.user?.name}</span>
          </SheetTitle>
          <SheetDescription>
            <span>{session.user?.email}</span>
          </SheetDescription>
          <LogoutButton />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ) : (
    <LoginButton />
  );
}