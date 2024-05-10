import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSpinner,
} from '@ionic/react'
import React from 'react'
import { useAccounts } from '../../hooks/useAccounts'
import { Loader } from '../Loader'
import { trimStringWithEllipsis } from '../../utils'
import { useAtom, useAtomValue } from 'jotai'
import { accountAtom } from '../../state/atoms'

export const AccountScreen = () => {
  const { createAccount, masterAccount, isLoading, error, account } = useAccounts()
  console.log({ account, error })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {!!account && (
          <div>
            <p>Use Existing Account</p>
            <IonButton routerLink="/home">{trimStringWithEllipsis(account?.address)}</IonButton>
          </div>
        )}
        <IonButton onClick={createAccount}>
          {!!isLoading && <IonSpinner />}
          Create New Account
        </IonButton>
      </IonContent>
    </IonPage>
  )
}
