import { RefObject } from "react";
import type { StaticImport, StaticImageData } from "next/dist/shared/lib/get-img-props";

export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type HeadlineImage = {
  id: number;
  src: StaticImageData;
  alt: string;
};
