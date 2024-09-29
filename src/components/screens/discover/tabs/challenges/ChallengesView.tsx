import { Button } from "@/components/ui/button";
import shinyBgPath from "@/assets/shinyBg.png";
import { SAMPLE_PROFILE_URL } from "@/constants";
import calendarPath from "@/assets/calendar.svg";
import flagPath from "@/assets/flag.svg";
import trophyPath from "@/assets/trophy.svg";
import { Badge } from "@/components/ui/badge";

type ChallengeViewProps = {
  onClickChallenge: () => void;
};

export const ChallengesView = ({ onClickChallenge }: ChallengeViewProps) => {
  return (
    <div className="pb-8">
      <div>
        <div className="flex items-center gap-4 justify-between bg-[#3F320D] rounded-[5px] py-1 px-3 border border-primary">
          <p className="text-xs">
            Earn bonus rewards by inviting friends to join challenges
          </p>
          <Button size="sm" className="px-5">
            invite
          </Button>
        </div>
      </div>

      <div
        className="bg-no-repeat bg-cover min-h-[96px] flex flex-col gap-2 justify-center items-center rounded-xl mt-4"
        style={{ backgroundImage: `url(${shinyBgPath})` }}
      >
        <h2 className="text-xl font-semibold">Create a new challenge</h2>

        <button className="w-8 h-8 rounded-md flex items-center justify-center text-4xl font-semibold bg-[#D9D9D9] text-black">
          +
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-3">Your Challenges</h3>

        <div>
          <div className="p-[1px] bg-gradient-to-r from-[#9A9A9A] to-[#007BFF] rounded-xl mt-3">
            <div className="bg-background rounded-xl">
              <div className="h-[177px]">
                <img
                  src={SAMPLE_PROFILE_URL}
                  alt="competition"
                  className="rounded-t-xl w-full h-full object-cover"
                />
              </div>

              <div className="pt-6 px-3 pb-3 flex items-end justify-between">
                <div>
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
                    variant="blue"
                    size="sm"
                  >
                    View Progress
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">All Challenges</h3>

        <div className="flex flex-col gap-4 mt-3">
          <div
            onClick={onClickChallenge}
            className="p-[1px] bg-gradient-to-r from-[#9A9A9A] to-destructive rounded-xl cursor-pointer"
          >
            <div className="bg-background rounded-xl pt-4 px-3 pb-3 flex items-end justify-between">
              <div>
                <Badge variant="destructive" className="mb-1">
                  upcoming
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
                  variant="destructive"
                  size="sm"
                >
                  View Results
                </Button>
              </div>
            </div>
          </div>
          <div
            onClick={onClickChallenge}
            className="p-[1px] bg-gradient-to-r from-[#9A9A9A] cursor-pointer to-success rounded-xl"
          >
            <div className="bg-background rounded-xl pt-4 px-3 pb-3 flex items-end justify-between">
              <div>
                <Badge variant="success" className="mb-1">
                  started
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
                  variant="success"
                  size="sm"
                >
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div
            onClick={onClickChallenge}
            className="p-[1px] bg-gradient-to-r from-[#9A9A9A] cursor-pointer to-warning rounded-xl"
          >
            <div className="bg-background rounded-xl pt-4 px-3 pb-3 flex items-end justify-between">
              <div>
                <Badge variant="warning" className="mb-1">
                  ended
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
                  variant="warning"
                  size="sm"
                >
                  View Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
