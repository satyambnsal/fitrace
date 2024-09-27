import { useTabNavigation } from "@/hooks/useTabNavigation.tsx";
import { TabBarView } from "./TabBarView";

export const TabBar = () => {
  const { tabs, activeTab, handleTabClick } = useTabNavigation();

  return (
    <TabBarView
      tabs={tabs}
      activeTab={activeTab}
      handleTabClick={handleTabClick}
    />
  );
};
