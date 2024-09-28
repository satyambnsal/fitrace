import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DiscoverView = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">hii</TabsContent>
        <TabsContent value="password">hii</TabsContent>
      </Tabs>
    </div>
  );
};
