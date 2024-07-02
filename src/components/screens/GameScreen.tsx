import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonIcon,
} from '@ionic/react'
import {
  ActivityData,
  CapacitorHealthkit,
  OtherData,
  QueryOutput,
  SampleNames,
  SleepData,
} from 'capacitor-healthkit-dojo'
import { useState } from 'react'
import { getStartAndEndOfDay } from '../../utils'
import { BottomTabs } from '../../components'
import { Button } from '../ui/button'
import { useHistory } from 'react-router'
import { arrowBackOutline } from 'ionicons/icons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import backgroundImg from '../../assets/background.png'

const READ_PERMISSIONS = ['steps', 'distance']

/**
   * 
   *totalFlightsClimbed: number;
    totalSwimmingStrokeCount: number;
    totalEnergyBurned: number;
    totalDistance: number;
    workoutActivityId: number;
    workoutActivityName: string;
   */

export const GameScreen = () => {
  const history = useHistory()
  const [totalSteps, setTotalSteps] = useState(0)
  const requestAuthorization = async (): Promise<void> => {
    try {
      await CapacitorHealthkit.requestAuthorization({
        all: [''],
        read: READ_PERMISSIONS,
        write: [''],
      })
    } catch (error) {
      console.error('[HealthKitService] Error getting Authorization:', error)
    }
  }
  const getActivityData = async (): Promise<QueryOutput<ActivityData> | undefined> => {
    try {
      //TODO: Ankit: Play with start date and end date to get same data as apple phone healthkit
      const { startDate, endDate } = getStartAndEndOfDay()
      const queryOptions = {
        sampleName: SampleNames.STEP_COUNT,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        limit: 0,
      }

      const response = await CapacitorHealthkit.queryHKitSampleType<ActivityData>(queryOptions)
      // console.log(response)
      const totalStepsData = response.resultData
        .filter((results) => (results as any).unitName === 'count')
        .reduce((prevSteps, obj) => prevSteps + (obj as any).value, 0)
      setTotalSteps(totalStepsData)
    } catch (error) {
      console.error(error)
      return undefined
    }
  }
  //TODO: Show this modal by default when user comes to home screen.  
  return (
      <IonPage>
        <IonContent>
          <div style={{backgroundImage: `url(${backgroundImg})`}} className='min-h-full text-white'>
            <div className='flex gap-3 items-center justify-center p-3'>
              <Button onClick={requestAuthorization}
                variant="gradient"
                >Request Authorization</Button>
              <Button
                variant="gradient"
                onClick={() => {
                  getActivityData()
                }}
              >
                Get Data
              </Button>
            </div>

            <div>
              <div className='py-4'>
                <div>Total steps: {totalSteps}</div>
              </div>
            </div>

            <Card className="w-[350px] mx-auto">
              <CardHeader>
                <CardTitle>Total Steps Count</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>

            <CardContent>
              <p>
                <h1 className='text-4xl'>{totalSteps}</h1>
              </p>
              </CardContent>

            <CardFooter className="flex justify-center">
            <Button disabled={true} variant="gradient">Claim {totalSteps} FRT token</Button>
            </CardFooter>
            </Card>
          </div>

        </IonContent>
     </IonPage>
  )
}
