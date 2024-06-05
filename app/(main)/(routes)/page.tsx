import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle";


const state = false;

export default function Home() {
  return (
    <div className="flex justify-between">
    <p className="text-3xl font-bold text-indigo-500">
      this is protexted route
    </p>

    <UserButton 
    afterSignOutUrl="/"/>
    <ModeToggle />
    </div>
  );
}
