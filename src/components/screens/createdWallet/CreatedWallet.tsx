import { copyToClipboard, trimStringWithEllipsis } from "@/utils";
import { CreatedWalletView } from "./CreatedWalletView";
import { useNavigate } from "react-router-dom";

export const CreatedWallet = () => {
  const navigate = useNavigate();
  const onClickCopy = () => {
    copyToClipboard("B62qk1KqJq2m59NJuPmHHWDFsejzc21Hr8gcHqWYfhM51dwpsVxtEQS", {
      type: "success",
      message: "wallet address copied successfully!",
      duration: 1000,
    });
  };

  return (
    <CreatedWalletView
      truncatedWalletAddress={trimStringWithEllipsis(
        "B62qk1KqJq2m59NJuPmHHWDFsejzc21Hr8gcHqWYfhM51dwpsVxtEQS"
      )}
      onClickCopy={onClickCopy}
      onClickContinue={() => navigate("/welcome")}
    />
  );
};
