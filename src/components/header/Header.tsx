import { useNavigate } from "react-router-dom";
import { HeaderView } from "./HeaderView";

type HeaderProps = {
  allowPermissionWarning?: boolean;
};

export const Header = ({ allowPermissionWarning }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderView
      allowPermissionWarning={allowPermissionWarning}
      onNotificationClicked={() => navigate("/notifications")}
      onLogoClick={() => navigate("/dashboard")}
    />
  );
};
