import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils"


const state = false;

export default function Home() {
  return (
    <div className="">
    <p className="text-3xl font-bold text-indigo-500">
      this is protecxted route
      
    </p>


    <Button >
      click me</Button>
    </div>
  );
}
