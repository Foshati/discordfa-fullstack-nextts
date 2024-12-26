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
    <ActionTooltip label={name} side="right" align="center" className="ml-2">
      <button 
        onClick={onClick} 
        className="relative flex items-center group w-full "
      >
        <div
          className={cn(
            "absolute left-0 bg-orange-500 rounded-r-full transition-all ",
            "w-1 group-hover:h-5",
            params?.serverId === id ? "h-9" : "h-2"
          )}
        />
        <div
          className={cn(
            "relative flex mx-3 h-12 w-12 group-hover:rounded-2xl",
            "transition-all  overflow-hidden",
            "rounded",
            params?.serverId === id && "rounded-2xl bg-primary/10"
          )}
        >
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover "
            
          />
        </div>
      </button>
    </ActionTooltip>
  );
};
