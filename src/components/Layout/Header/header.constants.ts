import { ReactNode } from "react";

export interface INavigationLink {
  name: string | ReactNode;
  link: string;
}

export const unauthorizedLinks: INavigationLink[] = [
  { name: "Pricing", link: "/#tariffs" },
  { name: "Blog", link: "/#blog" },
  { name: "Documentation", link: "/#documentation" },
  { name: "Discord Support", link: `/#getStart` },
];
