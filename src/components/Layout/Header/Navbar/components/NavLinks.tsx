"use client";

import { FC } from "react";
import { INavigationLink } from "../../header.constants";
import Link from "next/link";
import styles from "./NavLinks.module.scss";

interface INavLinks {
  links: INavigationLink[];
}

export const NavLinks: FC<INavLinks> = ({ links }) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {links.map((link) => (
        <Link
          className={styles.link}
          key={link.link}
          href={link.link}
          onClick={(e) => handleScroll(e, link.link)}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};
