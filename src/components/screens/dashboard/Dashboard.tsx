import { Header } from "@/components";
import { DashboardView } from "./DashboardView";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 pb-[55px]">
      <Header allowPermissionWarning={false} />
      <DashboardView seeAllClick={() => navigate("/leaderboard")} />
    </div>
  );
};
