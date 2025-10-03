import { createContext } from "react";

type MobileContextType = {
  isMobile: boolean;
};

export const MobileContext = createContext<MobileContextType | undefined>(undefined);
