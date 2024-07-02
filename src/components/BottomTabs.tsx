import { IonIcon } from '@ionic/react'
import { Button } from './ui/button.tsx'
import { settings , gameController, book } from 'ionicons/icons'
import { useHistory } from 'react-router-dom'

export const BottomTabs = () => {
  const history = useHistory()

  return (
    <div className='fixed bottom-0 w-full min-h-[50px] flex items-center justify-around p-3 text-xs backdrop-blur-xl bg-transparent border-t border-t-[#FFFFFF1a] z-[999]'>
      <Button className={`flex flex-col min-h-[55px] gap-1 text-xs text-muted-foreground hover:no-underline ${history.location.pathname === "/rules" ? "text-white" : "text-muted-foreground"}`} 
      variant="link"
      onClick={() => {
          history.push(`/rules`)
        }}>
      <IonIcon
          icon={book}
          size="small"
          />
        Rules
      </Button>

      <Button className={`flex flex-col min-h-[55px] gap-1 text-xs text-muted-foreground hover:no-underline ${history.location.pathname === "/home" ? "text-white" : "text-muted-foreground"}`} 
          variant="link"
          onClick={() => {
            history.push(`/home`)
          }}
          >
        <IonIcon
          icon={gameController}
          size="small"
          />Home
      </Button>
        
       <Button className={`flex flex-col min-h-[55px] gap-1 text-xs text-muted-foreground hover:no-underline ${history.location.pathname === "/settings" ? "text-white" : "text-muted-foreground"}`} 
        variant="link"
        onClick={() => {
          history.push(`/settings`)
        }}
      >
        <IonIcon
          icon={settings}
          size="small"
        />Setting

        </Button>
  </div>
  )
}
