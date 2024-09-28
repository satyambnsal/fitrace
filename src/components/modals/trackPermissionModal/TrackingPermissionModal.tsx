import { TrackingPermissionModalView } from "./TrackingPermissionModalView";

type TrackingPermissionModalTypes = {
  openedModal: boolean;
};

export const TrackingPermissionModal = ({
  openedModal,
}: TrackingPermissionModalTypes) => {
  return <TrackingPermissionModalView openedModal={openedModal} />;
};
