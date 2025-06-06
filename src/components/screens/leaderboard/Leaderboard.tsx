import { Header } from "@/components";
import { LeaderboardView } from "./LeaderboardView";

export const Leaderboard = () => {
  return (
    <div className="px-4 pb-[55px] pt-[76px]">
      <Header title="Leaderboard" />
      <LeaderboardView />
    </div>
  );
};
