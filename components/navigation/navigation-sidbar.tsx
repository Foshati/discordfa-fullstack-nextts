import { CurrentProfile } from "@/lib/currentProfile";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { NavigationAction } from "./navigation-action";
<<<<<<< HEAD
import { Separator } from "@radix-ui/react-separator";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { NavigationItem } from "./navigation-item";
import { ModeToggle } from "../darkMode/ModeToggle";
import { UserProfile } from "@/app/(auth)/_components/profile/user-profile";
=======
>>>>>>> remotes/origin/main

export const NavigationSidbar = async () => {
  const profile = await CurrentProfile();
  if (!profile) {
    return redirect("/login");
  }
  const servers = await db.server.findMany({
    where: {
      member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col items-center h-full  text-primary w-full dark:bg-[#1e1f22] bg-[#f2f3f5]  py-3 ">
<<<<<<< HEAD
      <NavigationAction />
      <Separator className="h-[3px] bg-zinc-300  dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 flex items-center flex-col">
        <span className="mb-3">
          <ModeToggle />
        </span>
        <UserProfile />
      </div>
=======
      <NavigationAction/>
>>>>>>> remotes/origin/main
    </div>
  );
};
