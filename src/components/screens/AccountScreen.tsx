import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSpinner,
  IonToast,
  // IonToast,
} from '@ionic/react'
import { useAccounts } from '../../hooks/useAccounts'
import { trimStringWithEllipsis } from '../../utils'
import { Button } from 'konsta/react'
import { useEffect, useState } from 'react'

export const AccountScreen = () => {
  const { createAccount, isLoading, error, account , isAccountCreated } = useAccounts();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
      setShowToast(isAccountCreated);
  }, [isAccountCreated]) // settting isAccountCreated is the only dependency because we don't want to run the toast while user just landed on the page. We only want to run the toast when user clicked on the create account button and the account created successfully

  console.log({ account, error })
  return (
    <>
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="px-3 text">
            <Button  rounded outline className='absolute left-4 w-fit px-6 top-1/2 -translate-y-1/2'>
              Back
            </Button>
            <IonTitle class='col-span-9'>Account</IonTitle>
            </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className='p-5'>
        {!!account && (
           <>
          <div>
            <p className='mb-2'>Use Your Existing Account</p>
            <IonButton routerLink="/home">{trimStringWithEllipsis(account?.address)}</IonButton>
          </div>

          <div className='my-5'>
            <div className='flex gap-2 items-center mb-3'>
                <div className='border-b border-b-[#ffffff4a] w-full'></div>
                <div>Or</div>
                <div className='border-b border-b-[#ffffff4a] w-full'></div>
            </div>
                <p>You can also create new account</p>
          </div>

         </>

        )}
        <IonButton onClick={createAccount}>
          {!!isLoading && <IonSpinner />}
          Create New Account
        </IonButton>
        </div>

      </IonContent>
      </IonPage>
    
        <IonToast
          position='top'
          positionAnchor="header"
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Account Created successfully"
          duration={1000} // adjust the duration as needed
          buttons={[
            {
              text: 'Dismiss',
              role: 'cancel',
            },
            ]}
        />
    </>

  )
}
