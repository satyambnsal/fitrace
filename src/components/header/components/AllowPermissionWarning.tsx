import yellowTriangleWarningPath from "@/assets/yellowTriangleWarning.svg";
import { Button } from "@/components/ui/button";

export const AllowPermissionWarning = () => {
  return (
    <aside className="bg-[#343434] rounded-[5px] py-2 px-3 flex items-center justify-between gap-2 mt-3">
      <div>
        <img src={yellowTriangleWarningPath} alt="warning" />
      </div>

      <div>
        <p className="text-xs">
          allow the persmission helps us to track your steps
        </p>
      </div>

      <div>
        <Button size="sm" className="text-xs px-[22px]">
          allow
        </Button>
      </div>
    </aside>
  );
};
