import { ChallengesView } from "./ChallengesView";
import { useNavigate } from "react-router-dom";

export const Challenges = () => {
  const navigate = useNavigate();

  return <ChallengesView onClickChallenge={() => navigate("/challenge")} />;
};
