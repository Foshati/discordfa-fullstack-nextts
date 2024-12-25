import React from "react";
import { Plus } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";

export const NavigationAction = () => {
  return (
    <ActionTooltip
      side="right"
      align="center"
      label="Create Server"
      kbd="Ctrl+N"
    >
      <button className="group flex items-center">
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
