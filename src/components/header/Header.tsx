import { useNavigate } from "react-router-dom";
import { HeaderView } from "./HeaderView";

type HeaderProps = {
  allowPermissionWarning?: boolean;
  title?: string;
  showTokens?: boolean;
};

export const Header = ({
  allowPermissionWarning,
  title,
  showTokens,
}: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderView
      allowPermissionWarning={allowPermissionWarning}
      onNotificationClicked={() => navigate("/notifications")}
      onLogoClick={() => navigate("/dashboard")}
      title={title}
      showTokens={showTokens}
    />
  );
};
