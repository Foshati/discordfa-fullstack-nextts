import { ServerWithMembersWithProfiles } from "@/types/serverTypes";
import { MemberRole } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  CreditCard,
  Keyboard,
  Settings,
  User,
} from "lucide-react";
import { Button } from "../ui";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export function ServerHeader({ server, role }: ServerHeaderProps) {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button className="rounded-sm mx-2" variant="outline">{server.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white dark:bg-[#1E1F22] rounded-sm shadow-lg p-2 m-1">
        <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="border-t border-gray-200 dark:border-gray-700" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="w-4 h-4 mr-2" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Keyboard className="w-4 h-4 mr-2" />
            <span>Keyboard shortcuts</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}