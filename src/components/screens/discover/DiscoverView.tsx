import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ChallengesView } from "./tabs/challenges/ChallengesView";

const TABS_TRIGGER_CLASSES =
  "bg-[#303030] border-none h-[35px] rounded-[20px] text-white data-[state=active]:bg-white data-[state=active]:text-black px-6 py-1";

export const DiscoverView = () => {
  return (
    <div className="text-left">
      <Tabs defaultValue="challenges">
        <TabsList className="flex items-center gap-3">
          <TabsTrigger value="challenges" className={TABS_TRIGGER_CLASSES}>
            Challanges
          </TabsTrigger>
          <TabsTrigger value="friends" className={TABS_TRIGGER_CLASSES}>
            Friends
          </TabsTrigger>
          <TabsTrigger value="feed" className={TABS_TRIGGER_CLASSES}>
            Feed
          </TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="challenges">
            <ChallengesView />
          </TabsContent>
          <TabsContent value="friends">
            <div className="p-8 text-center text-4xl">Coming Soon</div>
          </TabsContent>
          <TabsContent value="feed">
            <div className="p-8 text-center text-4xl">Coming Soon</div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
