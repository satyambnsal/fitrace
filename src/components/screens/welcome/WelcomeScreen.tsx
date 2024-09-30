import { useNavigate } from "react-router-dom";
import { WelcomeScreenView } from "./WelcomeScreenView";

export const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    <WelcomeScreenView navigateToDashboard={() => navigate("/dashboard")} />
  );
};
