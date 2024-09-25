import { useAccounts } from "@/hooks/useAccounts";
import { AccountScreenView } from "./AccountScreenView";
import { useHistory } from "react-router";
import { IonContent, IonPage } from "@ionic/react";

export const AccountScreen = () => {
  const { createAccount, isLoading, error, account } = useAccounts();
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <AccountScreenView
          createAccount={createAccount}
          isLoading={isLoading}
        />
      </IonContent>
    </IonPage>
  );
};
