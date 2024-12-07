import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = true;

export default function HomePage() {
  return (
    <div>
      <Button className={cn("bg-slate-600", "text-lg", state && "bg-blue-500")}>
        clicka
      </Button>
    </div>
  );
}
