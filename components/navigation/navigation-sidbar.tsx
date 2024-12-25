import { CurrentProfile } from "@/lib/currentProfile";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { NavigationAction } from "./navigation-action";

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
      <NavigationAction/>
    </div>
  );
};
