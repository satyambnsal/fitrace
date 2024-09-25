import { Bell, FileWarning, Wallet } from "lucide-react";
import { Button } from "../ui/button";
import walletPath from "../../assets/wallet.svg";
import yellowTriangleWarningPath from "../../assets/yellowTriangleWarning.svg";
import frtTokenPath from "../../assets/frtToken.svg";
import starknetIconPath from "../../assets/starknetIcon.svg";
import ethSymbolPath from "../../assets/ethSymbol.svg";
import shoes2BgPath from "../../assets/shoes2Bg.png";
import stepsYellowImgPath from "../../assets/stepsYellow.png";
import stepsBgPath from "../../assets/stepsBg.png";

export const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="p-4 text-start">
          <header className="flex  items-center justify-between">
            <h1 className="font-viga text-left mt-0 text-4xl">
              Fit
              <span className="text-[#FF5A5A]">Race</span>
            </h1>

            <div className="flex items-center gap-3">
              <button>
                <Bell />
              </button>

              <button className="bg-white rounded-[10px] px-[10px] py-2 flex items-center gap-2">
                <img src={walletPath} alt="wallet" />
                <p className="text-black text-[10px]">0x597..1</p>
              </button>
            </div>
          </header>

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

          <div className="items-center justify-between gap-2 grid grid-cols-3 mt-4">
            <div className="border-2 border-[#363636] rounded-xl py-[13px] px-3 flex items-center justify-center gap-3">
              <img src={starknetIconPath} alt="starknet" />
              <p className="text-xs">30 STRK</p>
            </div>
            <div className="border-2 border-[#363636] rounded-xl py-[13px] px-3 flex items-center justify-center gap-3">
              <img src={frtTokenPath} alt="starknet" />
              <p className="text-xs">3000 FRT </p>
            </div>
            <div className="border-2 border-[#363636] rounded-xl py-[13px] px-3 flex items-center justify-center gap-3">
              <img src={ethSymbolPath} alt="starknet" />
              <p className="text-xs">500 ETH</p>
            </div>
          </div>

          <div
            className="p-4 min-h-[250px] rounded-lg mt-4 flex flex-col justify-between"
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

          <div
            className="mt-4 py-5 px-6 flex justify-between gap-3 items-center rounded-xl"
            style={{ backgroundImage: `url(${stepsBgPath})` }}
          >
            <div>
              <div>
                <img src={stepsYellowImgPath} alt="steps" />
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">4354</p>
                <p className="text-sm">steps</p>
              </div>
            </div>

            <div>
              <Button className="rounded-[12px] min-h-[46px] min-w-[191px] font-semibold">Claim 2000 FRT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
