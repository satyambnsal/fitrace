import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  Sneakers,
} from "./components";

export const Router = () => {
  return (
    <BrowserRouter>
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
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/follow-requests" element={<FollowRequests />} />
          <Route path="/rules" element={<GameRules />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
