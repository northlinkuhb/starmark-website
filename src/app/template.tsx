import LenisScroll from "@/providers/LenisScroll";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <LenisScroll>{children}</LenisScroll>;
}
