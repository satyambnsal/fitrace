import {
  IonPage,
} from '@ionic/react'
import { useAccounts } from '../../hooks/useAccounts'
import { trimStringWithEllipsis } from '../../utils'
import SplashImg from "../../assets/Images/splashImg.png"

export const SplashScreen = () => {
  return (
    <IonPage className='bg-[#001f2c]'>
      <img src={SplashImg} alt="" className='h-full object-contain' />
    </IonPage>
  )
}
