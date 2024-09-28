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
      <div className="min-h-full text-white bg-background">
        <div>
          {children}
          {shouldShowTabs && <TabBar />}
        </div>
      </div>
      <Toaster theme="dark" />
    </>
  );
};
