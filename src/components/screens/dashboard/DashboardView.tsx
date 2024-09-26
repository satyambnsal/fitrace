import { Button } from "@/components/ui/button";
import shoes2BgPath from "@/assets/shoes2Bg.png";
import stepsYellowImgPath from "@/assets/stepsYellow.png";
import stepsBgPath from "@/assets/stepsBg.png";
import { Header } from "@/components";
import locationIconPath from "@/assets/locationGreen.svg";
import fireIconPath from "@/assets/fire.svg";
import calendarPath from "@/assets/calendar.svg";
import flagPath from "@/assets/flag.svg";
import trophyPath from "@/assets/trophy.svg";
import { TrackingPermissionModal } from "@/components/modals/TrackingPermissionModal";

type DashboardView = {
  seeAllClick: () => void;
};

export const DashboardView = ({ seeAllClick }: DashboardView) => {
  return (
    <div className="text-start max-w-[500px] pb-8">
      <div
        className="p-4 min-h-[250px] rounded-lg mt-4 flex flex-col justify-between bg-no-repeat bg-cover bg-bottom"
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

      <div className="mt-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div
            className="py-3 px-6 flex flex-col justify-between gap-4 items-center rounded-xl bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${stepsBgPath})` }}
          >
            <div>
              <img src={stepsYellowImgPath} alt="steps" />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">4354</p>
              <p className="text-sm">steps</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div
              className="py-1 h-full px-6 flex justify-between gap-4 items-center rounded-xl bg-no-repeat bg-cover min-h-[82px]"
              style={{ backgroundImage: `url(${stepsBgPath})` }}
            >
              <div>
                <img src={locationIconPath} alt="location" />
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">2000</p>
                <p className="text-sm">Miles</p>
              </div>
            </div>

            <div
              className="mt-4 py-1 h-full px-6 flex justify-between gap-4 items-center rounded-xl bg-no-repeat bg-cover min-h-[82px]"
              style={{ backgroundImage: `url(${stepsBgPath})` }}
            >
              <div>
                <img src={fireIconPath} alt="fire" />
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">500</p>
                <p className="text-sm">Kal</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button className="rounded-[12px] min-h-[46px] min-w-[191px] font-semibold w-full">
            Claim 2000 FRT
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex  items-center justify-between gap-3 mb-2">
          <h2 className="text-2xl">Challanges</h2>
          <button onClick={seeAllClick}>see all</button>
        </div>

        <div className="flex items-center gap-4 justify-between bg-[#3F320D] rounded-[5px] py-1 px-3 border border-primary">
          <p className="text-xs">
            Earn bonus rewards by inviting friends to join challenges
          </p>
          <Button size="sm" className="px-5">
            invite
          </Button>
        </div>

        <div className="p-[1px] bg-gradient-to-r from-[#9A9A9A] to-[#308422] rounded-2xl mt-3">
          <div className="bg-background text-white p-4 rounded-2xl flex items-end justify-between">
            <div>
              <div className="flex gap-2 items-center mb-1">
                <span className="bg-[#FF8585] text-[10px] px-2 py-[1px] rounded-3xl">
                  2 days left
                </span>
                <button className="bg-[#3A89FF] text-[10px] px-2 py-[1px] rounded-3xl">
                  invite friends
                </button>
              </div>
              <h3 className="font-bold mb-1">Join October Running Challenge</h3>
              <ul className="flex  flex-col gap-1 text-muted">
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

            <Button
              size="sm"
              className="px-[26px] h-[28px] rounded-xl"
              variant="brown"
            >
              JOIN{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
