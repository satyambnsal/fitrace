import { Header } from "@/components";
import { NotificationsView } from "./NotificationsView";
import { useNavigate } from "react-router-dom";

export const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-[55px]">
      <NotificationsView
        onBackClick={() => navigate(-1)}
        onClickRequests={() => navigate("/follow-requests")}
      />
    </div>
  );
};
