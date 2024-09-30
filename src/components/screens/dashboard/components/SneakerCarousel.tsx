import Autoplay from "embla-carousel-autoplay";
import { ShoesInfoModal } from "@/components";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SNEAKERS_DATA } from "@/constants";

export const SneakerCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        className="w-full max-w-md mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {SNEAKERS_DATA.map((sneaker) => (
            <CarouselItem key={sneaker.id}>
              <div
                className="p-4 min-h-[250px] rounded-lg flex flex-col justify-between bg-no-repeat bg-cover bg-bottom relative items-start"
                style={{ backgroundImage: `url(${sneaker.imgUrl})` }}
              >
                <div className="bg-white/30 px-2 py-1 rounded-[5px] text-black">
                  {sneaker.name}
                </div>

                <div className="flex items-center justify-between w-full">
                  <div className="bg-white/30 px-2 py-1 rounded-[5px] text-black ">
                    lvl:
                    {sneaker.id}
                  </div>

                  <div>
                    <ShoesInfoModal />
                    <Button size="sm" className=" text-xs ms-3 align-middle">
                      Put on
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 w-auto p-3" />
        <CarouselNext className="right-0 w-auto p-3" />
      </Carousel>
    </div>
  );
};
