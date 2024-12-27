import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader, LoaderCircle, Sparkle } from "lucide-react";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
    variant: {
      loader: "text-[#FF7002]",
      loaderCircle: "text-[#FF7002]",
      sparkle: "text-[#FF7002] fill-current",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "loaderCircle",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const icons = {
  loader: Loader,
  loaderCircle: LoaderCircle,
  sparkle: Sparkle,
} as const;

export const Spinner = ({ size, variant, className }: SpinnerProps) => {
  const IconComponent = icons[variant || "loaderCircle"];
  
  return (
    <IconComponent 
      className={cn(spinnerVariants({ size, variant }), className)} 
    />
  );
};