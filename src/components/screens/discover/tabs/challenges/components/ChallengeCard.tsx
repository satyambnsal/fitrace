import { Badge } from "@/components/ui/badge";
import calendarPath from "@/assets/calendar.svg";
import flagPath from "@/assets/flag.svg";
import trophyPath from "@/assets/trophy.svg";
import { Button } from "@/components/ui/button";

type ChallengeCardProps = {
  variant: "success" | "warning" | "destructive";
  status: "started" | "ended" | "upcoming";
  buttonText: "View Results" | "Join";
  onClickChallenge: () => void;
};

export const ChallengeCard = ({
  variant,
  status,
  buttonText,
  onClickChallenge,
}: ChallengeCardProps) => {
  return (
    <div
      onClick={onClickChallenge}
      className={`p-[1px] bg-gradient-to-r from-[#9A9A9A] cursor-pointer to-${variant} rounded-xl`}
    >
      <div className="bg-background rounded-xl pt-4 px-3 pb-3 flex items-end justify-between">
        <div>
          <Badge variant={variant} className="mb-1">
            {status}
          </Badge>

          <h4 className="font-bold">Join October Running Challenge</h4>

          <ul className="flex  flex-col text-muted">
            <li className="text-sm mb-1 flex items-center gap-1">
              <span className="mr-2">
                <img src={calendarPath} alt="calendar" />
              </span>
              <span>Oct 1 - Oct 30</span>
            </li>

            <li className="text-sm mb-1 flex items-center gap-1">
              <span className="mr-2">
                <img src={flagPath} alt="flag" />
              </span>
              <span>Complete 5km in a month</span>
            </li>

            <li className="text-sm mb-1 flex items-center gap-1">
              <span className="mr-2">
                <img src={trophyPath} alt="calendar" width={13} />
              </span>
              <span>Oct 1 - Oct 30</span>
            </li>
          </ul>
        </div>

        <div>
          <Button
            className="min-w-[112px] rounded-[5px] text-base font-semibold"
            variant={variant}
            size="sm"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};
