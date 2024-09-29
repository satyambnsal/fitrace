import { useNavigate } from "react-router-dom";
import { ChallengesView } from "./ChallengesView";
import { Header } from "@/components";

export const Challenges = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 pb-[55px] pt-[168px]">
      <Header allowPermissionWarning={false} title="Discover" />
      <ChallengesView />
    </div>
  );
};
