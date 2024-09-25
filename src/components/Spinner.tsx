import React from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

export const Spinner = ({ className }: { className?: string }) => {
  return <Loader2 className="animate-spin" width={16} height={16} />;
};
