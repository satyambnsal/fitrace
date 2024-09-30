import React, { ReactNode } from "react";
import { Toaster } from "sonner";
import { useTabNavigation } from "@/hooks/useTabNavigation";
import { TabBar } from "@/components";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { shouldShowTabs } = useTabNavigation();
  return (
    <>
      <div className="text-foreground bg-background">
        {children}
        {shouldShowTabs && <TabBar />}
      </div>
      <Toaster theme="dark" />
    </>
  );
};
