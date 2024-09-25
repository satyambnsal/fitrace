import { Button } from "../ui/button";
import { BottomTabs } from "../BottomTabs";
import { useAccounts } from "../../hooks/useAccounts";
import { trimStringWithEllipsis } from "../../utils";
import { Spinner } from "@/components/Spinner";
import backgroundImg from "../../assets/background.png";
import { MessageCircle, Trash } from "lucide-react";

export const Settings = () => {
  const { account, removeAccount, createAccount, isLoading } = useAccounts();
  return (
    <>
      <div
        className="px-4 pt-4 pb-24 h-full flex flex-col items-center gap-8 text-white"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {!!account?.address ? (
          <div className="w-full">
            <h2 className="text-xl">
              Welcome,
              <span className="pl-1">
                {trimStringWithEllipsis(account?.address)}
              </span>
            </h2>
          </div>
        ) : (
          <Button
            onClick={createAccount}
            className="min-h-12 flex items-center justify-center max-w-80 w-full"
            size="lg"
          >
            {!!isLoading && <Spinner className="w-6" />}
            {!isLoading && <span className="">Create New Wallet</span>}
          </Button>
        )}

        {account?.address && (
          <Button
            variant="destructive"
            className="w-full min-h-12 max-w-80"
            size="lg"
            onClick={() => {
              removeAccount();
            }}
          >
            <Trash />
            Delete Wallet
          </Button>
        )}

        <Button
          size="lg"
          className="w-full mb-8 min-h-12 p-0 max-w-80"
          variant="gradient"
        >
          <a
            href="https://t.me/satyambnsal"
            className="w-full h-full text-inherit flex items-center justify-center"
            target="_blank"
          >
            <MessageCircle />
            Support Or Feedback
          </a>
        </Button>
        {account?.address && (
          <>
            {/* <ScoreTable type="player" title="Your Games" address={account.address} /> */}
          </>
        )}
      </div>
    </>
  );
};
