import { useComponentValue } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { useEffect, useState } from "react";
import "./App.css";
import { Direction } from "./utils";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useDojo } from "./dojo/useDojo";
import { DojoProvider } from "./dojo/DojoContext";
import { dojoConfig } from "../dojoConfig";
import { setup } from "./dojo/generated/setup";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  GameScreen,
  AccountScreen,
  GameRules,
  Settings,
  Layout,
  Dashboard,
  WelcomeScreen,
  Leaderboard,
  Notifications,
  CreatedWallet,
  ExistingWallets,
  FollowRequests,
  Discover,
  Challenge,
} from "./components";

type SetupResultType = Awaited<ReturnType<typeof setup>>;

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<AccountScreen />} />
          <Route path="/created-wallet" element={<CreatedWallet />} />
          <Route path="/existing-wallets" element={<ExistingWallets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/home" element={<GameScreen />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/follow-requests" element={<FollowRequests />} />
          <Route path="/rules" element={<GameRules />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};
// function MyApp() {
//   const [setupResult, setSetupResult] = useState<SetupResultType>({} as SetupResultType)
//   useEffect(() => {
//     setup(dojoConfig)
//       .then((response) => {
//         console.log('res', response)
//         setSetupResult(response)
//       })
//       .catch((err) => {
//         console.error('failed to setup', err)
//       })
//   }, [])
//   console.log('setup result', setupResult)

//   if (!setupResult.burnerManager) {
//     return (
//       <div>
//         <Loading></Loading>
//       </div>
//     )
//   }

//   return (
//       <DojoProvider value={setupResult}>
//         <PositionGame />
//         <IonButton fill="clear">Start</IonButton>
//       </DojoProvider>
//   )
// }

// export const PositionGame = () => {
//   const {
//     setup: {
//       systemCalls: { spawn, move },
//       clientComponents: { Position, Moves },
//     },
//     account,
//   } = useDojo()

//   const [clipboardStatus, setClipboardStatus] = useState({
//     message: '',
//     isError: false,
//   })

//   // entity id we are syncing
//   const entityId = getEntityIdFromKeys([BigInt(account?.account.address)]) as Entity

//   // get current component values
//   const position = useComponentValue(Position, entityId)
//   const moves = useComponentValue(Moves, entityId)

//   console.log(moves)

//   const handleRestoreBurners = async () => {
//     try {
//       await account?.applyFromClipboard()
//       setClipboardStatus({
//         message: 'Burners restored successfully!',
//         isError: false,
//       })
//     } catch (error) {
//       setClipboardStatus({
//         message: `Failed to restore burners from clipboard`,
//         isError: true,
//       })
//     }
//   }

//   useEffect(() => {
//     if (clipboardStatus.message) {
//       const timer = setTimeout(() => {
//         setClipboardStatus({ message: '', isError: false })
//       }, 3000)

//       return () => clearTimeout(timer)
//     }
//   }, [clipboardStatus.message])
//   return (
//     <div>
//       <Button onClick={() => account?.create()}>
//         {account?.isDeploying ? 'deploying burner' : 'create burner'}
//       </Button>
//       {account && account?.list().length > 0 && (
//         <Button onClick={async () => await account?.copyToClipboard()}>
//           Save Burners to Clipboard
//         </Button>
//       )}
//       <Button onClick={handleRestoreBurners}>Restore Burners from Clipboard</Button>
//       {clipboardStatus.message && (
//         <div className={clipboardStatus.isError ? 'error' : 'success'}>
//           {clipboardStatus.message}
//         </div>
//       )}

//       <div className="card">
//         <div>{`burners deployed: ${account.count}`}</div>
//         <div>
//           <Block>
//             <p>select signer: </p>
//           </Block>

//           <select
//             value={account ? account.account.address : ''}
//             onChange={(e) => account.select(e.target.value)}
//           >
//             {account?.list().map((account, index) => {
//               return (
//                 <option value={account.address} key={index}>
//                   {account.address}
//                 </option>
//               )
//             })}
//           </select>
//         </div>
//         <div>
//           <Button onClick={() => account.clear()}>Clear burners</Button>
//           <p>You will need to Authorise the contracts before you can use a burner. See readme.</p>
//         </div>
//       </div>

//       <div className="card">
//         <Button onClick={() => spawn(account.account)}>Spawn</Button>
//         <div>Moves Left: {moves ? `${moves.remaining}` : 'Need to Spawn'}</div>
//         <div>Position: {position ? `${position.vec.x}, ${position.vec.y}` : 'Need to Spawn'}</div>

//         <div>{moves && moves.last_direction}</div>
//       </div>

//       <div className="card">
//         <div>
//           <Button
//             onClick={() =>
//               position && position.vec.y > 0
//                 ? move(account.account, Direction.Up)
//                 : console.log('Reach the borders of the world.')
//             }
//           >
//             Move Up
//           </Button>
//         </div>
//         <div>
//           <Button
//             onClick={() =>
//               position && position.vec.x > 0
//                 ? move(account.account, Direction.Left)
//                 : console.log('Reach the borders of the world.')
//             }
//           >
//             Move Left
//           </Button>
//           <Button onClick={() => move(account.account, Direction.Right)}>Move Right</Button>
//         </div>
//         <div>
//           <Button onClick={() => move(account.account, Direction.Down)}>Move Down</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MyApp
