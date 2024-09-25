import { Book, Gamepad2Icon, Settings } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { useNavigate, useLocation } from "react-router-dom";

export const BottomTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 w-full min-h-[50px] flex items-center justify-around p-3 text-xs backdrop-blur-xl bg-transparent border-t border-t-[#FFFFFF1a] z-[999]">
      <Button
        className={`flex flex-col min-h-[55px] gap-1 text-xs text-muted-foreground hover:no-underline ${
          location.pathname === "/rules"
            ? "text-white"
            : "text-muted-foreground"
        }`}
        variant="link"
        onClick={() => {
          navigate(`/rules`);
        }}
      >
        <Book />
        Rules
      </Button>

      <Button
        className={`flex flex-col min-h-[55px] gap-1 text-xs text-muted-foreground hover:no-underline ${
          location.pathname === "/home" ? "text-white" : "text-muted-foreground"
        }`}
        variant="link"
        onClick={() => {
          navigate(`/home`);
        }}
      >
        <Gamepad2Icon />
        Home
      </Button>

      <Button
        className={`flex flex-col min-h-[55px] gap-1 text-xs text-muted-foreground hover:no-underline ${
          location.pathname === "/settings"
            ? "text-white"
            : "text-muted-foreground"
        }`}
        variant="link"
        onClick={() => {
          navigate(`/settings`);
        }}
      >
        <Settings />
        Setting
      </Button>
    </div>
  );
};
