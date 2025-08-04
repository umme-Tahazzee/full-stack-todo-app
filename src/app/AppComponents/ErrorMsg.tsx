import { MdError } from "react-icons/md";
import {
 HoverCard,
 HoverCardContent,
 HoverCardTrigger,
} from "@/components/ui/hover-card"


export function ErrorMsg({ message }: { message: string }) {
 return (
  <div className="text-red-500 flex items-center gap-1 ">
   <div className="absolute right-2 top-8">

    <HoverCard>
     <HoverCardTrigger className="cursor-pointer" >
      <MdError className="size-4" />
     </HoverCardTrigger>
     <HoverCardContent className="w-auto p-2 px-3">
     <p className="text-[13px] mt-[4px] text-red-500  " > {message}</p>
     </HoverCardContent>
    </HoverCard>

   </div>
  </div>
 )
}