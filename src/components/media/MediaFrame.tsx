import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  children: ReactNode;
  className?: string;
  aspectClassName?: string;
  contentClassName?: string;
  frameClassName?: string;
};

const MediaFrame = ({
  children,
  className,
  aspectClassName = "aspect-[4/3]",
  contentClassName,
  frameClassName,
}: MediaFrameProps) => {
  return (
    <div className={cn("overflow-hidden rounded-3xl border border-border p-2 shadow-warm", frameClassName ?? "bg-card/70", className)}>
      <div className={cn("overflow-hidden rounded-2xl", aspectClassName, contentClassName)}>{children}</div>
    </div>
  );
};

export default MediaFrame;
