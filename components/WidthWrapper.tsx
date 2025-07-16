import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function WidthWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div
      className={`px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 max-w-screen-2xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
