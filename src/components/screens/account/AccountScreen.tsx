import { useAccounts } from "@/hooks/useAccounts";
import { AccountScreenView } from "./AccountScreenView";
import { useHistory } from "react-router";

export const AccountScreen = () => {
  const { createAccount, isLoading, error, account } = useAccounts();
  const history = useHistory();

  return (
    <AccountScreenView createAccount={createAccount} isLoading={isLoading} />
  );
};
