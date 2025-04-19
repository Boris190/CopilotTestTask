import styles from "./TarifsItem.module.scss";
import clsx from "clsx";
import Image from "next/image";
import { LinkButton } from "../UI/Buttons/LinkButton/LinkButton";
import { Typography } from "@/components/UI/Typography/Typography";

interface TarifsItemProps {
  name: string;
  title: string;
  price: string;
  priceSuffix?: string;
  buttonText: string;
  featuresBeforeLine?: string[];
  plusTitle?: string;
  featuresAfterLine?: string[];
  type?: "start" | "pro" | "enterprise";
}

const TarifsItem: React.FC<TarifsItemProps> = ({
  name,
  title,
  price,
  priceSuffix = "",
  buttonText,
  featuresBeforeLine = [],
  plusTitle,
  featuresAfterLine = [],
  type = "start",
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.tariffsHeader}>
        <Typography
          variant="paragraphs.captionTitle"
          className={clsx(styles.name, {
            [styles.type2]: type === "pro",
            [styles.type3]: type === "enterprise",
          })}
        >
          {name}
        </Typography>

        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.section2}>
        <div className={styles.priceText}>
          <Typography variant="paragraphs.caption2" className={styles.price}>
            {price}
          </Typography>
          {priceSuffix && (
            <Typography variant="paragraphs.caption1">{priceSuffix}</Typography>
          )}
        </div>
      </div>

      <div>
        <div className={styles.includes}>
          <div className={styles.beforeLine}>
            {featuresBeforeLine.map((text, index) => (
              <div key={`before-${index}`} className={styles.include}>
                <div className={styles.icon}>
                  <Image
                    alt="include icon"
                    src="/assets/images/include.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <Typography variant="paragraphs.caption1">{text}</Typography>
              </div>
            ))}
          </div>

          <div className={styles.line} />

          {plusTitle && (
            <div className={styles.plusTitle}>
              <Typography variant="paragraphs.caption1">{plusTitle}</Typography>
            </div>
          )}

          {featuresAfterLine.map((text, index) => (
            <div key={`after-${index}`} className={styles.include}>
              <div className={styles.icon}>
                <Image
                  alt="include icon"
                  src="/assets/images/include-purple.svg"
                  width={20}
                  height={20}
                />
              </div>
              <Typography variant="paragraphs.caption1">{text}</Typography>
            </div>
          ))}
        </div>
      </div>

      <LinkButton
        href="/"
        variant={type === "enterprise" ? "outline" : "primary"}
        className={styles.button}
      >
        <Typography variant="paragraphs.caption1">{buttonText}</Typography>
      </LinkButton>
    </div>
  );
};

export default TarifsItem;
