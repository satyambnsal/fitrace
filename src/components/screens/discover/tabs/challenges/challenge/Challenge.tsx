import { useNavigate } from "react-router-dom";
import { ChallengeView } from "./ChallengeView";

export const Challenge = () => {
  const navigate = useNavigate();

  return <ChallengeView onBackClick={() => navigate(-1)} status="started" />;
};
