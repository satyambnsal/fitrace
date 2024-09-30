import { useNavigate } from "react-router-dom";
import { FollowRequestsView } from "./FollowRequestsView";

export const FollowRequests = () => {
  const navigate = useNavigate();
  return <FollowRequestsView onBackClick={() => navigate(-1)} />;
};
