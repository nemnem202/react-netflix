import { useContext } from "react";
import { MobileContext } from "../context/mobile_context";

export function useMobile() {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error("useMobile doit être utilisé dans un MobileProvider");
  }
  return context;
}
