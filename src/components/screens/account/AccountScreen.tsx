import { useAccounts } from "@/hooks/useAccounts";
import { AccountScreenView } from "./AccountScreenView";
import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";

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
