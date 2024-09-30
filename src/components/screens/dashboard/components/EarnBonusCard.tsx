import { Button } from "@/components/ui/button";

type EarnBonusCardType = {
  onInviteClick: () => void;
};

export const EarnBonusCard = ({ onInviteClick }: EarnBonusCardType) => {
  return (
    <div className="flex items-center gap-4 justify-between bg-[#3F320D] rounded-[5px] py-1 px-3 border border-primary">
      <p className="text-xs">
        Earn bonus rewards by inviting friends to join challenges
      </p>
      <Button size="sm" className="px-5" onClick={onInviteClick}>
        invite
      </Button>
    </div>
  );
};
