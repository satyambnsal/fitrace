import { Logo } from "@/components/ui/logo";
import backgroundImg from "@/assets/splash.png";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/Spinner";
import { Copy } from "lucide-react";
import { trimStringWithEllipsis } from "@/utils";

type CreatedWalletViewType = {
  walletAddress: string;
  onClickCopy: () => void;
  truncatedWalletAddress: string;
  onClickContinue: () => void;
};

export const CreatedWalletView = ({
  walletAddress,
  onClickCopy,
  truncatedWalletAddress,
  onClickContinue,
}: CreatedWalletViewType) => {
  return (
    <div
      className="min-h-full flex justify-between flex-col text-white bg-cover bg-center relative text-left"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="z-10 min-h-screen flex flex-col pt-7">
        <div className="pt-5 px-6">
          <Logo />
        </div>
        <div className="bg-black/60 rounded-t-[50px] px-8 pt-12 pb-24 mt-auto animate-slide-in-bottom absolute bottom-0 left-0 right-0 backdrop-blur-md">
          <h2 className="mb-10 text-center mt-4 text-2xl">
            Created New Wallet{" "}
          </h2>

          <div>
            <div>
              <label htmlFor="create-wallet" className="block mb-3">
                Created New Wallet
              </label>

              <div className="flex items-center justify-between h-[50px] rounded-[5px] p-3 border border-white">
                <p>{truncatedWalletAddress}</p>
                <button onClick={onClickCopy}>
                  <Copy />
                </button>
              </div>

              <Button
                id="create-wallet"
                size="lg"
                className="w-full mt-4"
                onClick={onClickContinue}
              >
                Continue
                {false && <Spinner className="ms-2 !text-black" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[#080808C4]"></div>
    </div>
  );
};
