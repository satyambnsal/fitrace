import { IonContent, IonPage } from "@ionic/react";
import { useAccounts } from "../../hooks/useAccounts";
import { trimStringWithEllipsis } from "../../utils";
import { Button } from "@/components/ui/button";
import logo from "../../assets/icon.png";
import SplashBG from "../../assets/splash.png";
import { useHistory } from "react-router-dom";
import { Spinner } from "../Spinner";
import backgroundImg from "../../assets/splash.png";

export const AccountScreen = () => {
  const { createAccount, isLoading, error, account } = useAccounts();
  const history = useHistory();
  // console.log({ account, error })
  return (
    <IonPage>
      <IonContent>
        <div
          className="min-h-full flex justify-between flex-col text-white bg-cover bg-center relative text-left"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="z-10 min-h-screen flex flex-col">
            <div className="pt-5 px-6">
              <h1 className="font-viga text-left mt-0">FitRace</h1>
            </div>
            {/* <div className="px-4 justify-center items-center flex flex-col gap-8 text-center w-full mt-auto">
              {!!account && (
                <div className="w-full">
                  <label className="font-semibold mb-4 block">
                    Use Existing Wallet
                  </label>
                  <Button
                    onClick={() => {
                      history.push("/home");
                    }}
                    variant="gradient"
                    className="min-h-12 max-w-64 w-full"
                    disabled={isLoading}
                  >
                    {trimStringWithEllipsis(account?.address)}
                  </Button>
                </div>
              )}
              {!!account && (
                <div className="flex items-center w-full">
                  <div className="border-solid border-b border-b-[#EEE] w-full"></div>
                  <div className="px-3">Or</div>
                  <div className="border-solid border-b border-b-[#EEE] w-full"></div>
                </div>
              )}
              <Button
                onClick={createAccount}
                // variant="gradient"
                className="min-h-12 flex items-center justify-center max-w-64 w-full"
                size="lg"
              >
                {!!isLoading && <Spinner className="text-white" />}
                {!isLoading && <span className="">Create New Wallet</span>}
              </Button>
            </div> */}

            <div className="bg-black/60 rounded-t-[50px] px-8 py-12 mt-auto animate-slide-in-bottom">
              <h2 className="mb-10 text-center mt-4 text-2xl">
                Connect Wallet
              </h2>

              <div>
                <div>
                  <label htmlFor="create-wallet" className="block mb-2">
                    Create new wallet
                  </label>

                  <Button
                    id="create-wallet"
                    size="lg"
                    className="w-full"
                    onClick={createAccount}
                    disabled={isLoading}
                  >
                    Create a new wallet
                    {isLoading && <Spinner className="ms-2 text-black" />}
                  </Button>
                </div>

                <div className="flex  gap-2 items-center text-muted py-3">
                  <div className="border-t border-dashed border-muted w-full"></div>
                  OR
                  <div className="border-t border-dashed border-muted w-full"></div>
                </div>

                <div>
                  <label htmlFor="create-wallet" className="block mb-2">
                    Connect Existing one
                  </label>

                  <Button
                    id="create-wallet"
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Add Existing one
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none bg-[#080808C4]"></div>
        </div>
      </IonContent>
    </IonPage>
  );
};
