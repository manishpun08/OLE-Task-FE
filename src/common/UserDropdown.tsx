import Image from "next/image";
import { signOut } from "next-auth/react";
import { FaRegUserCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ISessionRoot } from "@/interface/dto/user.session";

interface UserDropdownProps {
  sessionData: ISessionRoot;
}

export default function UserDropdown({ sessionData }: UserDropdownProps) {
  const userName = sessionData.user?.name || "User name";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2 focus:outline-none">
        {sessionData?.user?.image ? (
          <div className="size-9 overflow-hidden rounded-full">
            <Image
              src={sessionData?.user?.image}
              alt="user-image"
              width={400}
              height={400}
              className="size-full object-cover"
            />
          </div>
        ) : (
          <FaRegUserCircle
            size={24}
            className="text-grey-300 typography-paragraph-small"
          />
        )}
        <span className="typography-paragraph-small text-grey-300 capitalize">
          {userName}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuLabel className="text-grey-300">Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <a className="text-grey-300 cursor-pointer" href="/user/profile">
            View Profile
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/", redirect: true })}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
