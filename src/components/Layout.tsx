import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { BottomTabs } from "./BottomTabs";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-full text-white bg-background">
      {/* <div className="bg-transparent backdrop-blur-xl border-b border-b-[#FFFFFF1a] fixed w-full">
        <div className="flex items-center justify-between px-4 py-4">
          <Button
              className="flex items-center gap-2"
              variant="gradient"
              onClick={() => {
                history.goBack()
              }}
            >
              <IonIcon
                icon={arrowBackOutline}
                size="small"
                className="k-color-brand-green"
                color="#A91D3A"
              />
              Go Back
            </Button>
        </div>
      </div> */}

      <div>
        {children}
        {/* <BottomTabs /> */}
      </div>
    </div>
  );
};
