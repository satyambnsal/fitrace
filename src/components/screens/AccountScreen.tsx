import { useAccounts } from "../../hooks/useAccounts";
import { trimStringWithEllipsis } from "../../utils";
import { Button } from "@/components/ui/button";
import logo from "../../assets/icon.png";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../Spinner";
import backgroundImg from "../../assets/background.png";

export const AccountScreen = () => {
  const { createAccount, isLoading, error, account } = useAccounts();
  const navigate = useNavigate();
  // console.log({ account, error })
  return (
    <div
      className="min-h-full relative flex flex-col pb-12 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="text-center">FitRace</h1>
      <div className="flex justify-center">
        <img
          src={logo}
          alt="fitrace logo"
          className="w-64 h-64 my-8 block object-cover rounded-md"
        />
      </div>
      <div className="px-4 justify-center items-center flex flex-col gap-8 text-center w-full mt-auto">
        {!!account && (
          <div className="w-full">
            <label className="font-semibold mb-4 block">
              Use Existing Wallet
            </label>
            <Button
              onClick={() => {
                navigate("/home");
              }}
              variant="gradient"
              className="min-h-12 max-w-64 w-full"
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
          variant="gradient"
          className="min-h-12 flex items-center justify-center max-w-64 w-full"
          size="lg"
        >
          {!!isLoading && <Spinner className="text-white" />}
          {!isLoading && <span className="">Create New Wallet</span>}
        </Button>
      </div>
    </div>
  );
};
