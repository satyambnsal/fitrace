import { SAMPLE_PROFILE_URL } from "@/constants";
import { ArrowLeft } from "lucide-react";
import calendarPath from "@/assets/calendar.svg";
import flagPath from "@/assets/flag.svg";
import trophyPath from "@/assets/trophy.svg";
import { Button } from "@/components/ui/button";

type ChallengeViewProps = {
  onBackClick: () => void;
};

export const ChallengeView = ({ onBackClick }: ChallengeViewProps) => {
  return (
    <div className="text-left min-h-screen flex flex-col">
      <div className="h-[320px]">
        <img
          src={SAMPLE_PROFILE_URL}
          alt="challenge"
          className="w-full h-full object-cover"
        />

        <div className="flex items-center justify-between absolute top-0 left-0 right-0 p-4">
          <button className="mt-4" onClick={onBackClick}>
            <ArrowLeft width={40} />
          </button>

          <span className="bg-white/50 rounded-[5px] min-h-[26px] inline-block px-2 py-[1px] text-black">
            150 waiting
          </span>
        </div>
      </div>

      <div className="px-4 py-6 flex flex-col justify-between gap-4 flex-1">
        <div>
          <p className="text-sm">Starts in 5 days</p>
          <h2 className="text-[2rem] font-bold text-primary max-w-[300px]">
            October Running Challenge
          </h2>
        </div>

        <div>
          <ul className="flex  flex-col">
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
          <p className="text-[#A19C9C] leading-tight">
            Lace up and take on the challenge this October! Track your runs,
            beat personal records, and compete with others for exclusive
            rewards. Whether you're aiming for fitness milestones or just
            staying active, this challenge will keep you motivated. Don't miss
            your chance to participate and earn prizes for every step you take.
            Join now and start running today
          </p>
        </div>

        <div>
          <Button size="lg" className="w-full">
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
};
