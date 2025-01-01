import { ServerWithMembersWithProfiles } from "@/types/serverTypes";
import { MemberRole } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Settings, User, UserPlusIcon } from "lucide-react";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <div className="mx-auto ">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none" asChild>
          <button className="text-md font-semibold uppercase">
            {server.name}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="  text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
          {isModerator && (
            <DropdownMenuItem className=" text-black dark:text-orange-400 px-3 py-2 text-sm cursor-pointer">
              <UserPlusIcon className="h-4 w-4 ml-auto" />
              Invite user
            </DropdownMenuItem>
          )}

          {isAdmin && (
            <DropdownMenuItem className="text-black dark:text-orange-400 px-3 py-2 text-sm cursor-pointer">
              <Settings className="h-4 w-4 ml-auto" />
              Server setting
            </DropdownMenuItem>
          )}

          {isAdmin && (
            <DropdownMenuItem className="text-black dark:text-orange-400 px-3 py-2 text-sm cursor-pointer">
              <User className="h-4 w-4 ml-auto" />
              Manage member
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
