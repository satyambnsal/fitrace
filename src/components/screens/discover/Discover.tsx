import { Header } from "@/components";
import { DiscoverView } from "./DiscoverView";

export const Discover = () => {
  return (
    <div className="px-4 pb-[55px] pt-[168px]">
      <Header allowPermissionWarning={false} title="Discover" />
      <DiscoverView />
    </div>
  );
};
