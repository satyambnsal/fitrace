import { NOTIFICATIONS_CONTENT, SAMPLE_PROFILE_URL } from "@/constants";
import { ArrowLeft, ChevronRight } from "lucide-react";

type NotificationsViewType = {
  onBackClick: () => void;
  onClickRequests: () => void;
};

export const NotificationsView = ({
  onBackClick,
  onClickRequests,
}: NotificationsViewType) => {
  return (
    <div className="text-left">
      <header className="flex items-center gap-3 pt-4 mt-4 px-2">
        <button onClick={onBackClick} className="px-4 py-3">
          <ArrowLeft />
        </button>

        <h2 className="text-xl">Notifications</h2>
      </header>

      <section className="">
        <div
          className="flex items-center gap-4 border-b border-b-[#5D5D5D] px-6 py-4"
          onClick={onClickRequests}
        >
          <div className="w-10 h-10 rounded-full">
            <img
              src={SAMPLE_PROFILE_URL}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex items-center justify-between flex-1">
            <div>
              <h3 className="text-xl">Follow requests</h3>
              <p className="text-sm text-[#939393]">username 1 , +1 other</p>
            </div>

            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#3384FD]"></div>
              <ChevronRight width={36} height={36} />
            </div>
          </div>
        </div>

        <div className="px-6 py-4">
          {NOTIFICATIONS_CONTENT.map((notification) => {
            return (
              <div
                className="py-2 flex items-center gap-4"
                key={notification.title}
              >
                <div className="w-8 h-8 rounded-full flex-none">
                  <img
                    src={notification.personImgUrl}
                    alt="profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div>
                  <h3 className="leading-tight">{notification.title}</h3>
                  <p className="text-[#939393] text-sm font-light">
                    {notification.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
