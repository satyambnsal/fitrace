import { SNEAKERS_DATA } from "@/constants";
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
import shoes2BgPath from "@/assets/shoes2Bg.png";
import { Button } from "@/components/ui/button";
import frtTokenPath from "@/assets/frtToken.svg";

export const SneakersView = () => {
  return (
    <ul className="grid grid-cols-2 gap-5 mt-8 pb-4">
      {SNEAKERS_DATA.map((sneaker, index) => {
        return (
          <Sheet key={sneaker.id}>
            <SheetTrigger asChild>
              <li
                className="border border-[#CBE0FF] rounded p-1 animate-bounceFadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-[185px] w-full">
                  <img
                    src={sneaker.imgUrl}
                    alt={sneaker.name}
                    className="rounded-[5px] w-full h-full object-cover"
                  />
                </div>

                <div className="p-3 flex items-center justify-center">
                  <div className="bg-white/30 p-2 rounded-[5px]">
                    {sneaker.name}
                  </div>
                </div>
              </li>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="pt-16 pb-16 px-8 bg-black/75"
            >
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
                  <p className="text-xs text-white">
                    Earn 2500 extra FRT while moving with this shoes!
                  </p>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Buy</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        );
      })}
    </ul>
  );
};
