<<<<<<< HEAD
"use client";
import { Plus } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();
=======
import React from "react";
import { Plus } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";

export const NavigationAction = () => {
>>>>>>> remotes/origin/main
  return (
    <ActionTooltip
      side="right"
      align="center"
      label="Create Server"
      kbd="Ctrl+N"
    >
<<<<<<< HEAD
      <button
        onClick={() => onOpen("createServer")}
        className="group flex items-center"
      >
=======
      <button className="group flex items-center">
>>>>>>> remotes/origin/main
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] items-center justify-center transition-all overflow-hidden bg-orange-50 dark:bg-neutral-700 group-hover:bg-orange-500">
          <Plus
            size={25}
            className="group-hover:text-white transition text-orange-500"
          />
        </div>
      </button>
    </ActionTooltip>
  );
};

export default NavigationAction;
