import { FC } from "react";
import { ComparePlansItem } from "./comparePlansData";
import styles from "./PlanTableRow.module.scss";
import { Typography } from "@/components/UI/Typography/Typography";
import Image from "next/image";
import { Tooltip } from "@/components/UI/Tooltip/Tooltip";

interface Props {
  item: ComparePlansItem;
}

const PlanTableRow: FC<Props> = ({ item }) => {
  if (item.type === "section") {
    return (
      <tr className={styles.sectionRow}>
        <td colSpan={4}>
          <Typography variant="paragraphs.caption4">{item.label}</Typography>
        </td>
      </tr>
    );
  }

  return (
    <tr className={styles.featureRow}>
      <td className={styles.label}>
        <span className={styles.labelText}>
          <Typography variant="paragraphs.caption1">{item.label}</Typography>
        </span>
        <Tooltip text={item.tooltip as string} side="top">
          {item.tooltip && (
            <Image
              className={styles.icon}
              src="/assets/images/tooltip.svg"
              width={17}
              height={17}
              alt="logo"
              priority
              quality={100}
            />
          )}
        </Tooltip>
      </td>

      {item.values.map((value, index) => (
        <td key={index} className={styles.cell}>
          {value === "check" ? (
            <Image
              className={styles.icon}
              src="/assets/images/check.svg"
              width={16}
              height={11}
              alt="logo"
              priority
              quality={100}
            />
          ) : value === "cross" ? (
            <Image
              className={styles.icon}
              src="/assets/images/cross.svg"
              width={16}
              height={11}
              alt="logo"
              priority
              quality={100}
            />
          ) : (
            <Typography variant="paragraphs.caption1">{value}</Typography>
          )}
        </td>
      ))}
    </tr>
  );
};

export default PlanTableRow;
