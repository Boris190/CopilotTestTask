import React from "react";
import styles from "./SectionTitleBlock.module.scss";
import Image from "next/image";
import { Typography } from "@/components/UI/Typography/Typography";

interface SectionTitleBlockProps {
  iconSrc?: string;
  iconAlt?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  as?: string;
}

export const SectionTitleBlock: React.FC<SectionTitleBlockProps> = ({
  iconSrc,
  iconAlt = "icon",
  title,
  description,
  actions,
  as,
  align = "center",
}) => {
  return (
    <div className={(styles[align], styles.titleWrapper)}>
      {iconSrc && (
        <div className={styles.icon}>
          <Image src={iconSrc} alt={iconAlt} width={20} height={20} />
          <Typography variant="paragraphs.regular_16" className={styles.title}>
            {iconAlt}
          </Typography>
        </div>
      )}
      <Typography variant={`headlines.${as}`} className={styles.title}>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="paragraphs.caption1"
          className={styles.description}
        >
          {description}
        </Typography>
      )}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
};

export default SectionTitleBlock;
