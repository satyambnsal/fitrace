import { useNavigate } from "react-router-dom";
import { HeaderView } from "./HeaderView";

type HeaderProps = {
  allowPermissionWarning?: boolean;
  title?: string;
};

export const Header = ({ allowPermissionWarning, title }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderView
      allowPermissionWarning={allowPermissionWarning}
      onNotificationClicked={() => navigate("/notifications")}
      onLogoClick={() => navigate("/dashboard")}
      title={title}
    />
  );
};
