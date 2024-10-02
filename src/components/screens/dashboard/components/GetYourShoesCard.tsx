import shoes2BgPath from "@/assets/shoes2Bg.png";
import { Button } from "@/components/ui/button";
export const GetYourShoesCard = () => {
  return (
    <div
      className="p-4 min-h-[250px] rounded-lg flex flex-col justify-between bg-no-repeat bg-cover bg-bottom mt-4"
      style={{ backgroundImage: `url(${shoes2BgPath})` }}
    >
      <div>
        <h2 className="text-2xl font-bold mt-0 mb-1">Get Your Shoes</h2>
        <p className="text-[11px]">
          Own shoes to unlock more rewards while moving!
        </p>
      </div>

      <div>
        <Button
          variant="secondary"
          size="sm"
          className="min-w-[121px] min-h-[31px]"
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
