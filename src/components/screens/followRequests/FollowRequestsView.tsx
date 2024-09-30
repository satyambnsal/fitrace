import { Button } from "@/components/ui/button";
import {
  NOTIFICATIONS_CONTENT,
  REQUESTS_DATA,
  SAMPLE_PROFILE_URL,
} from "@/constants";
import { ArrowLeft, ChevronRight } from "lucide-react";

type FollowRequestsViewType = {
  onBackClick: () => void;
};

export const FollowRequestsView = ({ onBackClick }: FollowRequestsViewType) => {
  return (
    <div className="text-left">
      <header className="flex items-center gap-3 pt-4 mt-4 px-2">
        <button onClick={onBackClick} className="px-4 py-3">
          <ArrowLeft />
        </button>

        <h2 className="text-xl">Follow requests</h2>
      </header>

      <section className="">
        <div className="px-6 py-4 flex flex-col">
          {REQUESTS_DATA.map((request) => {
            return (
              <div
                className="flex items-center justify-between py-3"
                key={request.username}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10">
                    <img
                      src={request.personImgUrl}
                      alt={request.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>

                  <p>{request.username}</p>
                </div>

                <div className="flex  items-center gap-2">
                  <Button
                    variant="blue"
                    size="sm"
                    className="text-xs px-4 min-w-[73px]"
                  >
                    confirm
                  </Button>

                  <Button
                    variant="destructiveSecondary"
                    size="sm"
                    className="text-xs px-4 min-w-[73px]"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
