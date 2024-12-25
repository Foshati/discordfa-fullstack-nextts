"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "./action-tooltip";

interface NavigationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const NavigationItem = ({ id, name, imageUrl }: NavigationItemProps) => {
  const router = useRouter();
  const params = useParams();

  const onClick = () => {
    router.push(`/servers/${id}`);
  };
  return (
    <ActionTooltip label={name} side="right" align="center">
      <button onClick={onClick} className="group flex items-center relative">
        <div
          className={cn(
            "absolute left-0 transition-all w-[4px] rounded-r-full bg-orange-500 ",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden duration-75",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        />


        <Image src={imageUrl} alt={name} fill />
      </button>
    </ActionTooltip>
  );
};
