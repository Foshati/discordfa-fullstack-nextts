// NavigationSidebar.tsx

import { CurrentProfile } from "@/lib/currentProfile";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { NavigationAction } from "./navigation-action";
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { NavigationItem } from "./navigation-item";
import { ModeToggle } from "../darkMode/ModeToggle";
import { UserProfile } from "@/app/(auth)/_components/profile/user-profile";

export const NavigationSidebar = async () => {
  const profile = await CurrentProfile();
  
  if (!profile) {
    return redirect("/login");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="flex flex-col h-full w-[72px] py-3 dark:bg-[#1e1f22] bg-[#f2f3f5]">
      <div className="flex-1 flex flex-col items-center space-y-4">
        <NavigationAction />
        <Separator className="h-[2px] w-10 mx-auto bg-zinc-300 dark:bg-zinc-700 rounded-full" />
        <ScrollArea className="flex-1 w-full">
          <div className="flex flex-col items-center space-y-2 px-1">
            {servers.map((server) => (
              <NavigationItem
                key={server.id}
                id={server.id}
                name={server.name}
                imageUrl={server.imageUrl}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-auto pb-3">
        <ModeToggle />
        <UserProfile />
      </div>
    </div>
  );
};