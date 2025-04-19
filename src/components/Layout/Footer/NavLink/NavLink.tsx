import { FC, ReactNode } from "react";
import styles from "./NavLink.module.scss";
import clsx from "clsx";
import { Typography } from "@/components/UI/Typography";
import Link from "next/link";

interface NavLinkProps {
  className?: string;
  type?: "internal" | "external";
  icon?: ReactNode;
  children: string;
  href: string;
}

const NavLink: FC<NavLinkProps> = ({
  className,
  icon,
  type = "internal",
  href,
  children,
}) => {
  const additionalProps =
    type === "external" ? { target: "_blank", rel: "noreferrer noopener" } : {};

  return (
    <Typography
      variant="paragraphs.regular_16"
      as={Link}
      className={clsx(className, styles.root, { [styles.withImage]: !!icon })}
      href={href}
      {...additionalProps}
    >
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <span>{children}</span>
    </Typography>
  );
};

export default NavLink;
