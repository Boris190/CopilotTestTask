"use client";

import Link from "next/link";
import clsx from "clsx";
import { FC, AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./LinkButton.module.scss";

type LinkSizeType = "l";
export type LinkVariantType = "primary" | "outline" | "white" | "whiteOutline";

interface ILinkButton
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: ReactNode;
  size?: LinkSizeType;
  variant: LinkVariantType;
  disabled?: boolean;
}

export const LinkButton: FC<ILinkButton> = ({
  children,
  href,
  variant,
  className,
  disabled,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
