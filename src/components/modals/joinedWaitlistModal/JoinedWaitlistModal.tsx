import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SAMPLE_PROFILE_URL } from "@/constants";

export const JoinedWaitlistModal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full" size="lg">
          Join Waitlist
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="pt-16 pb-8 px-8">
        <SheetHeader>
          <SheetTitle className="mb-8">
            <div className="w-[106px] h-[100px] mx-auto">
              <img
                src={SAMPLE_PROFILE_URL}
                alt="competition"
                className="w-full h-full object-cover rounded-[5px]"
              />
            </div>
          </SheetTitle>

          <SheetDescription className=" text-[#A19C9C] text-xl font-normal">
            You've successfully joined the waitlist!
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="mt-8">
          <SheetClose asChild>
            <Button type="submit">Invite Friends</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
