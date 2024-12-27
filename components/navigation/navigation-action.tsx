"use client";

import { Plus } from "lucide-react";
import { useModal } from "@/store/use-modal-store";
import TooltipAction from "../ui/tooltipAction";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <TooltipAction
      side="right"
      align="center"
      label="Create Server"
      kbd="Ctrl+N"
    >
      <button
        onClick={() => onOpen("createServer")}
        className="group flex items-center"
      >
        <div
          className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] 
          items-center justify-center transition-all overflow-hidden 
          bg-orange-50 dark:bg-neutral-700 group-hover:bg-orange-500"
        >
          <Plus
            size={25}
            className="group-hover:text-white transition text-orange-500"
          />
        </div>
      </button>
    </TooltipAction>
  );
};
