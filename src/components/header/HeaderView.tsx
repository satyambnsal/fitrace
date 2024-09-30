import { Bell } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import walletPath from "@/assets/wallet.svg";
import yellowTriangleWarningPath from "@/assets/yellowTriangleWarning.svg";
import { Button } from "@/components/ui/button";
import { TOKEN_BADGES_DATA } from "@/constants";
import { TrackingPermissionModal } from "@/components/modals/trackPermissionModal/TrackingPermissionModal";

type TokenBadgeProps = {
  tokenSymbol: string;
  amount: number;
  symbolUrl: string;
};

type HederViewProps = {
  allowPermissionWarning?: boolean;
  onNotificationClicked: () => void;
  onLogoClick: () => void;
  title?: string;
  showTokens?: boolean;
};

const TokenBadge = ({
  tokenSymbol,
  amount,
  symbolUrl,
  index,
}: TokenBadgeProps & { index: number }) => {
  return (
    <div
      className={`
          border-2 border-[#363636] rounded-xl py-[13px] px-2 
          flex items-center justify-center gap-3
          animate-[slideInFromLeft_0.5s_ease-out] opacity-0
        `}
      style={{
        animationDelay: `${index * 0.2}s`,
        animationFillMode: "forwards",
      }}
    >
      <img src={symbolUrl} alt={tokenSymbol} />
      <p className="text-xs">
        {amount} {tokenSymbol}
      </p>
    </div>
  );
};

export const HeaderView = ({
  allowPermissionWarning,
  onNotificationClicked,
  onLogoClick,
  title,
  showTokens,
}: HederViewProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 px-4 bg-background pb-2 shadow-[inset_0_-8px_8px_-8px_rgba(255,255,255,0.1)] z-10">
      <header className="flex items-center justify-between pb-4 pt-7 mt-4">
        {title ? (
          <h2 className="text-2xl">{title}</h2>
        ) : (
          <button onClick={onLogoClick}>
            <Logo size="lg" />
          </button>
        )}

        <div className="flex items-center gap-3">
          <TrackingPermissionModal openedModal={false} />

          <button onClick={onNotificationClicked}>
            <Bell />
          </button>

          <button className="bg-white rounded-[10px] px-[10px] py-2 flex items-center gap-2">
            <img src={walletPath} alt="wallet" />
            <p className="text-black text-[10px]">0x597..1</p>
          </button>
        </div>
      </header>

      {allowPermissionWarning && (
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
      )}

      {showTokens && (
        <div className="items-center justify-between gap-2 grid grid-cols-3">
          {TOKEN_BADGES_DATA.map((badge, index) => (
            <TokenBadge
              key={badge.tokenSymbol}
              tokenSymbol={badge.tokenSymbol}
              amount={badge.amount}
              symbolUrl={badge.symbolUrl}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
