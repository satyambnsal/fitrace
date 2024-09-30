type TabBarViewProps = {
  tabs: { path: string; icon: () => React.JSX.Element; label: string }[];
  activeTab: string;
  handleTabClick: (path: string) => void;
};

export const TabBarView = ({
  tabs,
  activeTab,
  handleTabClick,
}: TabBarViewProps) => {
  return (
    <div className="fixed -bottom-4 left-0 right-0 bg-[#343434] pb-4 px-4 flex justify-around items-center rounded-[50px]">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => handleTabClick(tab.path)}
          className={`p-3 rounded-full ${
            activeTab === tab.path ? "text-white" : "text-[#555555]"
          }`}
        >
          <tab.icon />
        </button>
      ))}
    </div>
  );
};
