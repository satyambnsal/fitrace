import { useAccounts } from "@/hooks/useAccounts";
import { useNavigate } from "react-router-dom";
import { AccountScreenView } from "./AccountScreenView";

export const AccountScreen = () => {
  const { createAccount, isLoading } = useAccounts();
  const navigate = useNavigate();

  return (
    <AccountScreenView
      createAccount={createAccount}
      isLoading={isLoading}
      createNewWallet={() => navigate("/created-wallet")}
      addExistingWallet={() => navigate("/existing-wallets")}
    />
  );
};
