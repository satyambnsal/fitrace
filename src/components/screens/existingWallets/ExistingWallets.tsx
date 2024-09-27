import { useNavigate } from "react-router-dom";
import { ExistingWalletsView } from "./ExistingWalletsView";
import { useState } from "react";

const WALLETS = [1, 2, 3, 4, 5];

export const ExistingWallets = () => {
  const navigate = useNavigate();

  const [selectedWallet, setSelectedWallet] = useState<number>(1);

  const handleWalletClick = (index: number) => {
    setSelectedWallet(index);
  };

  return (
    <ExistingWalletsView
      onClickContinue={() => navigate("/dashboard")}
      wallets={WALLETS}
      handleWalletClick={handleWalletClick}
      selectedWallet={selectedWallet}
    />
  );
};
