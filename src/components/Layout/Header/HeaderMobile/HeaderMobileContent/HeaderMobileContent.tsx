import React, { FC } from "react";
import Link from "next/link";
import { unauthorizedLinks } from "../../header.constants";
import styles from "./HeaderMobileContent.module.scss";

interface IHeaderDropdownContent {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  authPage?: boolean;
}

const HeaderMobileContent: FC<IHeaderDropdownContent> = ({ setIsOpen }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {unauthorizedLinks.map((link) => (
          <Link
            className={styles.link}
            key={link.link}
            href={link.link}
            onClick={handleClose}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMobileContent;

