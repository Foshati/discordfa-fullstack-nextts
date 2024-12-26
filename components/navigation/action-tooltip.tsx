import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ActionTooltipProps {
  label: string;
  side: "left" | "right" | "top" | "bottom";
  align: "start" | "center" | "end";
  children: React.ReactNode;
  className?: string;
  kbd?: string;
}

export const ActionTooltip = ({
  label,
  children,
  side,
  align,
  className,
  kbd,
}: ActionTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn(
            className,
            "bg-white text-[#A6ADBB] dark:bg-zinc-900 shadow-md",
            "p-2 rounded-sm max-w-[200px] sm:max-w-[300px]",
            "text-xs sm:text-sm break-words",
            "transform-gpu transition-all duration-200",
            "border border-border/5"
          )}
        >
          <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
            <p className="font-semibold capitalize">{label.toLowerCase()}</p>
            {kbd && (
              <kbd className="inline-flex h-5 items-center rounded border px-1.5 text-[0.625rem] font-medium text-muted-foreground/70 whitespace-nowrap">
                {kbd.toUpperCase()}
              </kbd>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
