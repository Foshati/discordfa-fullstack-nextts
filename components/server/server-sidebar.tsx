import { CurrentProfile } from "@/lib/currentProfile";
import db from "@/lib/db";
import { ChannelType } from "@prisma/client";
import { redirect } from "next/navigation";
import { ServerHeader } from "./server-header";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  const profile = await CurrentProfile();
  
  if (!profile) {
    return redirect("/");
  }
  
  const server = await db.server.findUnique({
    where: {
      id: serverId
    },
    include: {
      channels: {
        orderBy: {
          createdAt: "asc"
        }
      },
      members: {
        include: {
          profile: true
        },
        orderBy: {
          role: "asc"
        }
      }
    }
  });

  const textChannels = server?.channels.filter( (channel)=> channel.type === ChannelType.Text);
  const audioChannels = server?.channels.filter( (channel)=> channel.type === ChannelType.AUDIO);
  const videoChannels = server?.channels.filter( (channel)=> channel.type === ChannelType.VIDEO);
  const members= server?.members.filter((member)=> member.profileId !== profile.id);

  if (!server) {
    return redirect("/");
  }

  const role =server.members.find((member)=> member.profileId === profile.id)?.role;
  return <div className="flex flex-col h-screen text-primary w-full dark:bg-[#2b2d31] bg-[#e9e9e8] ">
    <ServerHeader  server={server} role={role}/>
  </div>;
};