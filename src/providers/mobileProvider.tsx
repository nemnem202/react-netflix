import { useEffect, useState, type ReactNode } from "react";
import { MobileContext } from "../context/mobile_context";

export function MobileProvider({ children }: { children: ReactNode }) {
  const [isMobile, set_is_mobile] = useState(window.innerWidth <= 743);

  useEffect(() => {
    const handle_resize = () => {
      set_is_mobile(window.innerWidth <= 743);
    };

    window.addEventListener("resize", handle_resize);
    return () => window.removeEventListener("resize", handle_resize);
  }, []);

  return <MobileContext.Provider value={{ isMobile }}>{children}</MobileContext.Provider>;
}
