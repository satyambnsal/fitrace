import { Button } from "@/components/ui/button";
import backgroundImg from "@/assets/splash.png";
import { Logo } from "@/components/ui/logo";
import { Spinner } from "@/components/Spinner";
import blueCheckmarkPath from "@/assets/blueCheckmark.svg";

type ExistingWalletsProps = {
  onClickContinue: () => void;
  wallets: number[];
  handleWalletClick: (index: number) => void;
  selectedWallet: number;
};

export const ExistingWalletsView = ({
  onClickContinue,
  wallets,
  handleWalletClick,
  selectedWallet,
}: ExistingWalletsProps) => {
  return (
    <div
      className="min-h-full flex justify-between flex-col text-white bg-cover bg-center relative text-left"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="z-10 min-h-screen flex flex-col pt-7">
        <div className="pt-5 px-6">
          <Logo />
        </div>

        <div className="bg-black/60 rounded-t-[50px] px-8 py-12 mt-auto animate-slide-in-bottom absolute bottom-0 left-0 right-0 backdrop-blur-md">
          <h2 className="mb-10 text-center mt-4 text-2xl">Existing Wallets</h2>

          <div>
            <h3 className="mb-4">Your wallets</h3>

            <div className="flex items-center flex-col gap-4">
              {wallets.map((wallet, index) => (
                <Button
                  key={index}
                  variant={
                    selectedWallet === index ? "secondary" : "outlineSecondary"
                  }
                  size="lg"
                  className={`w-full justify-between px-4 ${
                    selectedWallet === index && "font-bold"
                  }`}
                  onClick={() => handleWalletClick(index)}
                >
                  Wallet {wallet}
                  {selectedWallet === index && (
                    <img src={blueCheckmarkPath} alt="checkmark" />
                  )}
                </Button>
              ))}
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

      <div className="absolute inset-0 pointer-events-none bg-[#080808C4]"></div>
    </div>
  );
};
