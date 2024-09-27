import {
  GraphIcon,
  HomeIcon,
  PersonIcon,
  ShoesIcon,
  CompassIcon,
} from "@/components/tabBar/Icons";
import { useNavigate, useLocation } from "react-router-dom";

export const useTabNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: "/dashboard", icon: HomeIcon, label: "Home" },
    { path: "/leaderboard", icon: GraphIcon, label: "Leaderboard" },
    { path: "/notifications", icon: ShoesIcon, label: "Notifications" },
    { path: "/rules", icon: CompassIcon, label: "Rules" },
    { path: "/settings", icon: PersonIcon, label: "Settings" },
  ];

  const shouldShowTabs = tabs.some((tab) => tab.path === location.pathname);

  const handleTabClick = (path: string) => {
    navigate(path);
  };
  console.log(location.pathname);

  return { tabs, shouldShowTabs, activeTab: location.pathname, handleTabClick };
};
