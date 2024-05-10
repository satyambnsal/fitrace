import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
// import React from 'react'

export const GameScreen = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Game Screen</IonContent>
    </IonPage>
  )
}
