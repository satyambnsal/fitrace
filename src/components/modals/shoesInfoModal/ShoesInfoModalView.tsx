import { Button } from "@/components/ui/button";
import shoes2BgPath from "@/assets/shoes2Bg.png";
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
import frtTokenPath from "@/assets/frtToken.svg";

export const ShoesInfoModalView = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Open Sheet</button>
      </SheetTrigger>
      <SheetContent side="bottom" className="pt-16 pb-8 px-8">
        <SheetHeader>
          <SheetTitle className="mb-8">Shoe Info</SheetTitle>
          <SheetDescription className="text-left text-white text-xl">
            runner #11
          </SheetDescription>
        </SheetHeader>
        <div className="pt-4 pb-6">
          <div className="mb-4">
            <img
              src={shoes2BgPath}
              alt="shoes"
              className="max-w-full mx-auto"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Attributes</h2>

            <ul className="flex flex-col gap-1">
              <li className="grid grid-cols-12 gap-4">
                <p className="col-span-3">Efficiency</p>
                <div className="w-full col-span-9 flex items-center">
                  <div className="bg-[#3F320D] rounded-[5px] h-[10px] w-full">
                    <div
                      className="bg-primary rounded-[5px] h-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </li>

              <li className="grid grid-cols-12 gap-4">
                <p className="col-span-3">Level</p>
                <div className="w-full col-span-9 flex items-center">
                  <div className="bg-[#3F320D] rounded-[5px] h-[10px] w-full">
                    <div
                      className="bg-primary rounded-[5px] h-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 justify-around bg-[#3F320D] rounded-[5px] py-[9px] px-3 border border-primary mt-6">
            <div>
              <img src={frtTokenPath} alt="FRT Token" />
            </div>
            <p className="text-xs">
              Earn 2500 extra FRT while moving with this shoes!
            </p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Put On</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
