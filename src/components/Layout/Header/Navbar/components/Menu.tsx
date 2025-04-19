"use client";

import { unauthorizedLinks } from "../../header.constants";
import { NavLinks } from "@/components/Layout/Header/Navbar/components/NavLinks";
import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLinks links={unauthorizedLinks} />
    </nav>
  );
};
