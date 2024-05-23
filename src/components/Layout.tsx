import React, { ReactNode } from 'react';
import backgroundImg from '../assets/background.png'
import { IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/react';
import { Button } from './ui/button';
import { arrowBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { BottomTabs } from './BottomTabs';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const history  = useHistory()
  return (
      <div style={{backgroundImage: `url(${backgroundImg})`}} className='min-h-full text-white'>
        <div className='bg-transparent backdrop-blur-xl border-b border-b-[#FFFFFF1a] fixed w-full'>
          <div className="flex items-center justify-between px-4 py-4">
            {/* <Button
              className="flex items-center gap-2"
              variant="gradient"
              onClick={() => {
                history.goBack()
              }}
            >
              <IonIcon
                icon={arrowBackOutline}
                size="small"
                className="k-color-brand-green"
                color="#A91D3A"
              />
              Go Back
            </Button> */}
          </div>
        </div>
        
        <div className='pt-[72px]'>
          {children}
          <BottomTabs />
        </div>

        <div>
        </div>
       </div>
  );
}