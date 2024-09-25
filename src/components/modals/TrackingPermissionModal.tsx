import { Plus } from "lucide-react";
import shoesPath from "../../assets/shoes1.png";
import { Button } from "../ui/button";
import { useState } from "react";

export const TrackingPermissionModal = ({
  openedModal,
}: {
  openedModal: boolean;
}) => {
  const [isOpenModal, setIsOpenModal] = useState(openedModal || false);
  return (
    <>
      {/* <div>
        <Button
          onClick={() => {
            setIsOpenModal(!isOpenModal);
          }}
        >
          Open Modal
        </Button>
      </div> */}

      <div
        className={`bg-red/90 fixed left-0 right-0 flex flex-col transition-all ${
          isOpenModal ? "bottom-0 top-0" : "-bottom-full"
        }`}
        onClick={(e) => {
          setIsOpenModal(!isOpenModal);
        }}
      >
        <div
          className="bg-black/90 text-center rounded-t-[50px] px-8 pb-12 pt-16 shadow-[0px_4px_4px_0px_#00000040] mt-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-6"
            onClick={() => {
              setIsOpenModal(false);
            }}
          >
            <Plus className="rotate-45" width={32} height={32} />
          </button>
          <h2 className="mb-8 text-center mt-4 text-2xl">
            Allow tracking Permissions
          </h2>
          <div className="items-center flex justify-center">
            <img
              src={shoesPath}
              alt="shoes"
              className="object-cover w-[226px] h-[115px]"
            />
          </div>
          <ul className="flex flex-col gap-4 mt-8">
            <li>
              To track your activitives allow FitRace to use location all the
              time.
            </li>
            <li>
              FitRace will use the location in background to track your step
              count.
            </li>
          </ul>

          <Button size="lg" className="w-full mt-8">
            Allow
          </Button>
        </div>
      </div>
    </>
  );
};
