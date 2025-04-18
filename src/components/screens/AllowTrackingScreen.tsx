import { TrackingPermissionModal } from "../modals/trackPermissionModal/TrackingPermissionModal";
import backgroundImg from "../../assets/splash.png";

export const AllowTrackingScreen = () => {
  return (
    <div
      className="min-h-full flex justify-between flex-col text-white bg-cover bg-center relative text-left"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="z-10 min-h-screen flex flex-col px-6 pb-8 pt-7">
        <div className="pt-5">
          <h1 className="font-viga text-left mt-0">
            Fit
            <span className="text-[#FF5A5A]">Race</span>
          </h1>
        </div>
        <TrackingPermissionModal openedModal={true} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-black/75"></div>
    </div>
  );
};
