import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Challenges } from "@/components";
import { TABS_TRIGGER_CLASSESV1 } from "@/constants";
import { Feed } from "./tabs/feed/Feed";
import { Friends } from "./tabs/friends/Friends";

export const DiscoverView = () => {
  return (
    <div className="text-left">
      <Tabs defaultValue="challenges">
        <TabsList className="flex items-center gap-3">
          <TabsTrigger value="challenges" className={TABS_TRIGGER_CLASSESV1}>
            Challanges
          </TabsTrigger>
          <TabsTrigger value="friends" className={TABS_TRIGGER_CLASSESV1}>
            Friends
          </TabsTrigger>
          <TabsTrigger value="feed" className={TABS_TRIGGER_CLASSESV1}>
            Feed
          </TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="challenges">
            <Challenges />
          </TabsContent>
          <TabsContent value="friends">
            <Feed />
          </TabsContent>
          <TabsContent value="feed">
            <Friends />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
